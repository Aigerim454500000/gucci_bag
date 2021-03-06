import React, { useContext, useState } from "react";
import { Grid, makeStyles, Paper } from "@material-ui/core";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import { bagsContext } from "../../contexts/BagsContext";
import Typography from "@material-ui/core/Typography";
import Slider from "@material-ui/core/Slider";
import Button from "@material-ui/core/Button";
import "./Sidebar.css";
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 3,
    width: "50vw",
  },
  paper: {
    padding: theme.spacing(2),
    color: "black",
    margin: 0,
    backgroundColor: "#e7e7e7",
  },
  root: {
    width: 300,
  },
}));
const Sidebar = ({ history }) => {
  const { getBags } = useContext(bagsContext);
  const handleChangeMemory = (e) => {
    if (e.target.value === "all") {
      history.push(`${history.location.pathname.replace("model")}`);
      getBags(history);
      return;
    }
    const search = new URLSearchParams(history.location.search);
    search.set("model", e.target.value);
    history.push(`${history.location.pathname}?${search.toString()}`);
    getBags(history);
  };
  const classes = useStyles();
  const [value, setValue] = React.useState([0, 100000]);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const showChangePrice = () => {
    const search = new URLSearchParams(history.location.search);
    history.push(
      `${history.location.pathname}?price_gte=${value[0]}&price_lte=${value[1]}`
    );
    getBags(history);
    search.toString();
  };
  const [searchValue, setSearchValue] = useState(getSearchValue());
  const handleValue = (e) => {
    const search = new URLSearchParams(history.location.search);
    search.set("q", e.target.value);
    history.push(`${history.location.pathname}?${search.toString()}`);
    setSearchValue(e.target.value);
    getBags(history);
  };
  function getSearchValue() {
    const search = new URLSearchParams(history.location.search);
    return search.get("q");
  }
  return (
    <Grid item m={1}>
      <Paper className="sidebar" className={classes.paper}>
        {" "}
        <Typography style={{ fontSize: 30, textAlign: "center" }}>
          ????????????
        </Typography>
        <div></div>
        <input
          className="inp-search"
          onChange={handleValue}
          value={searchValue}
        />
        <div className={classes.root}>
          <Typography id="range-slider" gutterBottom>
            ???????? ???? ... ... ????
          </Typography>
          <Slider
            value={value}
            onChange={handleChange}
            valueLabelDisplay="auto"
            aria-labelledby="range-slider"
            min={0}
            max={2000}
            step={100}
          />
          <Button onClick={showChangePrice} variant="outlined" color="primary">
            ????????????????????
          </Button>
        </div>
        <br />
        <FormControl component="fieldset">
          <FormLabel component="legend">MODELS</FormLabel>
          <RadioGroup
            onChange={handleChangeMemory}
            aria-label="model"
            name="model"
          >
            <FormControlLabel
              value="GG Supreme"
              control={<Radio />}
              label="GG Supreme"
            />
            <FormControlLabel
              value="GG Marmont"
              control={<Radio />}
              label="GG Marmont"
            />
            <FormControlLabel
              value="Jackie 1961"
              control={<Radio />}
              label="Jackie 1961"
            />
            <FormControlLabel
              value="Gucci Horsebit 1955"
              control={<Radio />}
              label="Gucci Horsebit 1955"
            />
            <FormControlLabel value="all" control={<Radio />} label="All" />
          </RadioGroup>
        </FormControl>
      </Paper>
    </Grid>
  );
};
export default Sidebar;
