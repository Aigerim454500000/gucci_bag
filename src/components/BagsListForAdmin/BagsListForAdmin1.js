import React, { useContext, useEffect, useState } from "react";
import { bagsContext } from "../../contexts/BagsContext";
import CarCard from "./CarCard";
import { Grid, Paper } from "@material-ui/core";
import Sidebar from "./Sidebar";
import Pagination from "@material-ui/lab/Pagination";
import { useHistory } from "react-router-dom";
import "./BagsListForAdmin.css";
const BagsListForAdmin1 = (props) => {
  const { getBags, bagsData, paginationPages } = useContext(bagsContext);
  const history = useHistory();
  const [page, setPage] = useState(getPage());

  function getPage() {
    const search = new URLSearchParams(history.location.search);
    return search.get("_page");
  }
  const handlePage = (e, page) => {
    const search = new URLSearchParams(history.location.search);
    search.set("_page", page);
    history.push(`${history.location.pathname}?${search.toString()}`);
    getBags(history);
  };
  useEffect(() => {
    getBags(history);
  }, []);
  return (
    <div className="bagsForAdmin">
      <Sidebar {...props} />
      <Paper>
        <Grid container spacing={3} style={{ margin: 0 }}>
          {bagsData.map((item) => (
            <CarCard history={history} item={item} key={item.id} />
          ))}
        </Grid>
        <Pagination
          onChange={handlePage}
          count={paginationPages}
          color="primary"
          defaultPage={+page}
        />{" "}
      </Paper>
    </div>
  );
};

export default BagsListForAdmin1;
