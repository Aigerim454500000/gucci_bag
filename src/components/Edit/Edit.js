import React, { useContext, useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Backdrop from "@material-ui/core/Backdrop";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import { bagsContext } from "../../contexts/BagsContext";
import CircularProgress from "@material-ui/core/CircularProgress";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
const useStyles = makeStyles((theme) => ({
  root: {
    margin: "30px",
    "& .MuiTextField-root": {
      margin: theme.spacing(0.5),
      width: "60vw",
    },
  },
  backdrop: {
    zIndex: theme.zIndex.drawer + 1,
    color: "#fff",
  },
}));

export default function EditModal() {
  const { carToEdit, fetchCar, saveEditedBag } = useContext(bagsContext);
  const [EditBag, setEditBag] = useState(carToEdit);
  const [check, setCheck] = useState(false);
  const classes = useStyles();
  const params = useParams();
  const [openSpinner, setOpenSpinner] = React.useState(true);
  useEffect(() => {
    setEditBag(carToEdit);
    if (carToEdit) {
      setCheck(true);
    }
  }, [carToEdit]);
  const handleCloseSpinner = () => {
    setOpenSpinner(false);
  };

  useEffect(() => {
    fetchCar(params.id);
  }, []);

  const handleValues = (e) => {
    let editedCar = {
      ...EditBag,
      [e.target.name]: e.target.value,
    };
    setEditBag(editedCar);
  };

  return (
    <>
      {!check ? (
        <div>
          <Backdrop
            className={classes.backdrop}
            open={openSpinner}
            onClick={handleCloseSpinner}
          >
            <CircularProgress color="inherit" />
          </Backdrop>
        </div>
      ) : (
        <form className={classes.root} noValidate autoComplete="off">
          <TextField
            id="outlined-multiline-flexible"
            name="model"
            label="Model"
            variant="outlined"
            value={EditBag.model}
            onChange={handleValues}
          />
          <br />
          <TextField
            id="outlined-multiline-flexible"
            name="name"
            label="Name"
            multiline
            rowsMax={4}
            variant="outlined"
            value={EditBag.year}
            onChange={handleValues}
          />
          <br />
          <TextField
            id="outlined-multiline-flexible"
            name="year"
            label="Year"
            multiline
            rowsMax={4}
            variant="outlined"
            value={EditBag.v}
            onChange={handleValues}
          />
          <br />
          <TextField
            id="outlined-multiline-flexible"
            name="w"
            label="W"
            multiline
            rowsMax={4}
            variant="outlined"
            value={EditBag.kpp}
            onChange={handleValues}
          />
          <br />
          <TextField
            id="outlined-multiline-flexible"
            name="height"
            label="Height"
            multiline
            rowsMax={4}
            variant="outlined"
            value={EditBag.unit}
            onChange={handleValues}
          />
          <br />
          <TextField
            id="outlined-multiline-flexible"
            name="price"
            label="Price"
            multiline
            rowsMax={4}
            variant="outlined"
            value={EditBag.price}
            onChange={handleValues}
          />
          <br />
          <TextField
            id="outlined-multiline-flexible"
            name="img1"
            label="Img1"
            multiline
            rowsMax={4}
            variant="outlined"
            value={EditBag.img1}
            onChange={handleValues}
          />
          <br />
          <TextField
            id="outlined-multiline-flexible"
            name="img2"
            label="img2"
            multiline
            rowsMax={4}
            variant="outlined"
            value={EditBag.img2}
            onChange={handleValues}
          />

          <br />
          <TextField
            id="outlined-multiline-flexible"
            name="img3"
            label="img3"
            multiline
            rowsMax={4}
            variant="outlined"
            value={EditBag.img3}
            onChange={handleValues}
          />
          <br />

          <TextField
            id="outlined-multiline-flexible"
            name="img4"
            label="img4"
            multiline
            rowsMax={4}
            variant="outlined"
            value={EditBag.img4}
            onChange={handleValues}
          />
          <br />
          <TextField
            id="outlined-multiline-flexible"
            name="img5"
            label="img5"
            multiline
            rowsMax={4}
            variant="outlined"
            value={EditBag.img5}
            onChange={handleValues}
          />
          <br />
          <TextField
            id="outlined-multiline-flexible"
            name="img6"
            label="img6"
            multiline
            rowsMax={4}
            variant="outlined"
            value={EditBag.img6}
            onChange={handleValues}
          />
          <br />
          <TextField
            id="outlined-multiline-flexible"
            name="img7"
            label="img7"
            multiline
            rowsMax={4}
            variant="outlined"
            value={EditBag.img7}
            onChange={handleValues}
          />
          <br />
          <TextField
            id="outlined-multiline-flexible"
            name="img8"
            label="img8"
            multiline
            rowsMax={4}
            variant="outlined"
            value={EditBag.img8}
            onChange={handleValues}
          />
          <br />
          <TextField
            id="outlined-multiline-flexible"
            name="img9"
            label="img9"
            multiline
            rowsMax={4}
            variant="outlined"
            value={EditBag.img9}
            onChange={handleValues}
          />
          <br />
          <TextField
            id="outlined-multiline-flexible"
            name="img10"
            label="img10"
            multiline
            rowsMax={4}
            variant="outlined"
            value={EditBag.img10}
            onChange={handleValues}
          />
          <br />
          <br />
          <TextField
            id="outlined-multiline-flexible"
            name="img11"
            label="img11"
            multiline
            rowsMax={4}
            variant="outlined"
            value={EditBag.img10}
            onChange={handleValues}
          />
          <br />
          <br />
          <TextField
            id="outlined-multiline-flexible"
            name="img12"
            label="img12"
            multiline
            rowsMax={4}
            variant="outlined"
            value={EditBag.img10}
            onChange={handleValues}
          />
          <br />
          <TextField
            id="outlined-multiline-flexible"
            name="video"
            label="video"
            multiline
            rowsMax={4}
            variant="outlined"
            value={EditBag.video}
            onChange={handleValues}
          />
          <br />
          <TextField
            id="outlined-multiline-flexible"
            name="desc1"
            label="desc1"
            multiline
            rowsMax={4}
            variant="outlined"
            value={EditBag.desc1}
            onChange={handleValues}
          />
          <br />
          <TextField
            id="outlined-multiline-flexible"
            name="desc2"
            label="desc2"
            multiline
            rowsMax={4}
            variant="outlined"
            value={EditBag.desc2}
            onChange={handleValues}
          />
          <br />
          <TextField
            id="outlined-multiline-flexible"
            name="desc3"
            label="desc3"
            multiline
            rowsMax={4}
            variant="outlined"
            value={EditBag.desc3}
            onChange={handleValues}
          />
          <br />
          <Link to="/modal">
            {" "}
            <Button
              variant="contained"
              color="primary"
              size="large"
              className={classes.button}
              onClick={saveEditedBag(EditBag)}
            >
              Save
            </Button>
          </Link>
        </form>
      )}
    </>
  );
}
