import React, { useContext, useEffect, useState } from "react";
import { bagsContext } from "../../contexts/BagsContext";
import { Grid, Paper } from "@material-ui/core";
import Sidebar from "./Sidebar";
import Pagination from "@material-ui/lab/Pagination";
import { useHistory } from "react-router-dom";
import "./BagsListForUser.css";
import BagCard from "./BagCard";
const BagsListForUser = (props) => {
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
    getBags(props.history);
    console.log("THIS IS BAGS DATA", bagsData);
  }, []);
  return (
    <div className="bagsForUser">
      <Sidebar {...props} />
      <Paper style={{ backgroundColor: "#e7e7e7" }}>
        <Grid container spacing={3} style={{ margin: 0 }}>
          {bagsData.map((item) => (
            <BagCard item={item} key={item.id} />
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

export default BagsListForUser;
