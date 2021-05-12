import React, { useContext, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import AddCircleOutlineIcon from "@material-ui/icons/AddCircleOutline";
import { bagsContext } from "../../contexts/BagsContext";
import { Alert } from "@material-ui/lab";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import { useHistory } from "react-router-dom";
const AddProduct = () => {
  const { addBag } = useContext(bagsContext);
  const [showAlert, setShowAlert] = useState(false);
  const [showError, setShowError] = useState(false);
  const history = useHistory();
  const useStyles = makeStyles((theme) => ({
    root: {
      "& .MuiTextField-root": {
        margin: theme.spacing(0.9),
        width: "50ch",
      },
    },
  }));
  const classes = useStyles();
  const [bag, setBag] = useState({
    model: "",
    name: "",
    year: "",
    w: "",
    height: "",
    price: "",
    img1: "",
    img2: "",
    img3: "",
    img4: "",
    img5: "",
    img6: "",
    img7: "",
    img8: "",
    img9: "",
    img10: "",
    img11: "",
    img12: "",
    video: "",
    desc1: "",
    desc2: "",
    desc3: "",
  });
  const handleValues = (e) => {
    let newBag = {
      ...bag,
      [e.target.name]: e.target.value,
    };
    setBag(newBag);
  };
  const handleClick = () => {
    // if (
    //   bag.model === "" ||
    //   bag.name === "" ||
    //   bag.year === "" ||
    //   bag.w === "" ||
    //   bag.height === "" ||
    //   bag.price === "" ||
    //   bag.img1 === "" ||
    //   bag.img2 === "" ||
    //   bag.img3 === "" ||
    //   bag.img4 === "" ||
    //   bag.img5 === "" ||
    //   bag.img6 === "" ||
    //   bag.img7 === "" ||
    //   bag.img8 === "" ||
    //   bag.img9 === "" ||
    //   bag.img10 === "" ||
    //   bag.img11 === "" ||
    //   bag.img12 === "" ||
    //   bag.video === "" ||
    //   bag.desc1 === "" ||
    //   bag.desc2 === "" ||
    //   bag.desc3 === ""
    // ) {
    //   setShowError(true);
    //   return;
    // }
    // setBag({
    //   model: "",
    //   name: "",
    //   year: "",
    //   w: "",
    //   height: "",
    //   price: "",
    //   img1: "",
    //   img2: "",
    //   img3: "",
    //   img4: "",
    //   img5: "",
    //   img6: "",
    //   img7: "",
    //   img8: "",
    //   img9: "",
    //   img10: "",
    //   img11: "",
    //   img12: "",
    //   video: "",
    //   desc1: "",
    //   desc2: "",
    //   desc3: "",
    // });
    addBag(bag, history);
    setShowAlert(true);
  };

  return (
    <form className={classes.root} noValidate autoComplete="off">
      <TextField
        id="outlined-multiline-flexible"
        name="model"
        label="Model"
        multiline
        rowsMax={4}
        variant="outlined"
        onChange={handleValues}
        value={bag.model}
      />
      <br />
      <TextField
        id="outlined-multiline-flexible"
        name="name"
        label="Name"
        multiline
        rowsMax={4}
        variant="outlined"
        onChange={handleValues}
        value={bag.name}
      />
      <br />
      <TextField
        id="outlined-multiline-flexible"
        name="year"
        label="Year"
        multiline
        rowsMax={4}
        variant="outlined"
        onChange={handleValues}
        value={bag.year}
      />
      <br />
      <TextField
        id="outlined-multiline-flexible"
        name="w"
        label="W"
        multiline
        rowsMax={4}
        variant="outlined"
        onChange={handleValues}
        value={bag.w}
      />
      <br />
      <TextField
        id="outlined-multiline-flexible"
        name="height"
        label="Height"
        multiline
        rowsMax={4}
        variant="outlined"
        onChange={handleValues}
        value={bag.height}
      />
      <br />
      <TextField
        id="outlined-multiline-flexible"
        name="price"
        label="Price"
        multiline
        rowsMax={4}
        variant="outlined"
        onChange={handleValues}
        value={bag.price}
      />
      <br />
      <TextField
        id="outlined-multiline-flexible"
        name="img1"
        label="img1"
        multiline
        rowsMax={4}
        variant="outlined"
        onChange={handleValues}
        value={bag.img1}
      />{" "}
      <br />
      <TextField
        id="outlined-multiline-flexible"
        name="img2"
        label="img2"
        multiline
        rowsMax={4}
        variant="outlined"
        onChange={handleValues}
        value={bag.img1}
      />{" "}
      <br />
      <TextField
        id="outlined-multiline-flexible"
        name="img3"
        label="img3"
        multiline
        rowsMax={4}
        variant="outlined"
        onChange={handleValues}
        value={bag.img1}
      />{" "}
      <br />
      <br />
      <TextField
        id="outlined-multiline-flexible"
        name="img4"
        label="img4"
        multiline
        rowsMax={4}
        variant="outlined"
        onChange={handleValues}
        value={bag.img1}
      />{" "}
      <br />
      <br />
      <TextField
        id="outlined-multiline-flexible"
        name="img5"
        label="img5"
        multiline
        rowsMax={4}
        variant="outlined"
        onChange={handleValues}
        value={bag.img1}
      />{" "}
      <br />
      <br />
      <TextField
        id="outlined-multiline-flexible"
        name="img6"
        label="img6"
        multiline
        rowsMax={4}
        variant="outlined"
        onChange={handleValues}
        value={bag.img1}
      />{" "}
      <br />
      <br />
      <TextField
        id="outlined-multiline-flexible"
        name="img7"
        label="img7"
        multiline
        rowsMax={4}
        variant="outlined"
        onChange={handleValues}
        value={bag.img1}
      />{" "}
      <br />
      <br />
      <TextField
        id="outlined-multiline-flexible"
        name="img8"
        label="img8"
        multiline
        rowsMax={4}
        variant="outlined"
        onChange={handleValues}
        value={bag.img1}
      />{" "}
      <br />
      <br />
      <TextField
        id="outlined-multiline-flexible"
        name="img9"
        label="img9"
        multiline
        rowsMax={4}
        variant="outlined"
        onChange={handleValues}
        value={bag.img1}
      />{" "}
      <br />
      <br />
      <TextField
        id="outlined-multiline-flexible"
        name="img10"
        label="img10"
        multiline
        rowsMax={4}
        variant="outlined"
        onChange={handleValues}
        value={bag.img1}
      />{" "}
      <br />
      <br />
      <TextField
        id="outlined-multiline-flexible"
        name="img11"
        label="img11"
        multiline
        rowsMax={4}
        variant="outlined"
        onChange={handleValues}
        value={bag.img1}
      />{" "}
      <br />
      <br />
      <TextField
        id="outlined-multiline-flexible"
        name="img12"
        label="img12"
        multiline
        rowsMax={4}
        variant="outlined"
        onChange={handleValues}
        value={bag.img1}
      />{" "}
      <br />
      <TextField
        id="outlined-multiline-flexible"
        name="video"
        label="video"
        multiline
        rowsMax={4}
        variant="outlined"
        onChange={handleValues}
        value={bag.video}
      />
      <br />
      <TextField
        id="outlined-multiline-flexible"
        name="desc1"
        label="description1"
        multiline
        rowsMax={4}
        variant="outlined"
        onChange={handleValues}
        value={bag.desc1}
      />
      <br />
      <TextField
        id="outlined-multiline-flexible"
        name="desc2"
        label="description2"
        multiline
        rowsMax={4}
        variant="outlined"
        onChange={handleValues}
        value={bag.desc2}
      />
      <br />
      <TextField
        id="outlined-multiline-flexible"
        name="desc3"
        label="description3"
        multiline
        rowsMax={4}
        variant="outlined"
        onChange={handleValues}
        value={bag.desc3}
      />
      <br />
      {showAlert ? (
        <Alert
          action={
            <IconButton
              aria-label="close"
              color="inherit"
              size="small"
              onClick={() => {
                setShowAlert(false);
              }}
            >
              <CloseIcon fontSize="inherit" />
            </IconButton>
          }
        >
          Вы добавили новый товар!
        </Alert>
      ) : (
        ""
      )}
      {showError ? (
        <Alert
          severity="error"
          action={
            <IconButton
              aria-label="close"
              color="inherit"
              size="small"
              onClick={() => {
                setShowError(false);
              }}
            >
              <CloseIcon fontSize="inherit" />
            </IconButton>
          }
        >
          Заполните все поля!
        </Alert>
      ) : (
        ""
      )}
      <Button
        variant="contained"
        color="primary"
        size="large"
        className={classes.button}
        startIcon={<AddCircleOutlineIcon />}
        onClick={handleClick}
      >
        Добавить новую сумку
      </Button>
    </form>
  );
};

export default AddProduct;
