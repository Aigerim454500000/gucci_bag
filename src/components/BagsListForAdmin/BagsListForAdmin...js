import React, { useContext, useEffect, useState } from "react";
import { bagsContext } from "../../contexts/BagsContext";
import CarCard from "../BagsListForAdmin/CarCard";
import { Grid } from "@material-ui/core";
import Sidebar from "./Sidebar";
import { useHistory } from "react-router-dom";
import Pagination from "@material-ui/lab/Pagination";

const BagsListForAdmin = (props) => {
  const { getBags, bagsData, paginationPages } = useContext(bagsContext);
  const [page, setPage] = useState(getBags());
  const history = useHistory();
  console.log(props);
  useEffect(() => {
    getBags(props);
  }, []);

  const handlePage = (e, page) => {
    const search = new URLSearchParams(history.location.search);
    search.set("_page", page);
    history.push(`${history.location.pathname}?${search.toString()}`);
    setPage(page);
    getBags(history);
  };

  return (
    <>
      {bagsData ? (
        <div style={{ display: "flex", flexDirection: "row" }}>
          <Sidebar />
          <Grid container spacing={3} style={{ margin: 0 }}>
            {bagsData?.map((item) => (
              <CarCard item={item} key={item.id} />
            ))}
          </Grid>
          <Pagination
            page={+page}
            onChange={handlePage}
            count={paginationPages}
          />
        </div>
      ) : (
        <h1>Loading...</h1>
      )}
    </>
  );
};

export default BagsListForAdmin;
