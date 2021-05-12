import React, { useContext } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import DeleteIcon from "@material-ui/icons/Delete";
import Button from "@material-ui/core/Button";
import EditIcon from "@material-ui/icons/Edit";
import { Link } from "react-router-dom";
import { bagsContext } from "../../contexts/BagsContext";
const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 500,
  },
  media: {
    height: 0,
    paddingTop: "56.25%", // 16:9
  },
  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: "rotate(180deg)",
  },
}));
const BagCard = ({ item, history }) => {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);
  const { deleteBag, editBag, showDetails } = useContext(bagsContext);
  return (
    <div style={{ margin: 10, width: 400 }}>
      <CardMedia className={classes.media} image={item.img1} />
      <Card style={{ padding: 15 }} className={classes.root}>
        <div
          className="bag_name"
          style={{ lineHeight: "20px", fontSize: "30px" }}
        >
          {item.model}
        </div>
        <div
          style={{ lineHeight: "40px", fontSize: "14px" }}
          className="bag_model"
        >
          {item.name}
        </div>
        <CardContent>
          <Typography variant="body2" color="textSecondary" component="p">
            {" "}
            <div style={{ lineHeight: "30px" }} className="bag_year">
              <img alt="" style={{ width: 17, marginRight: 5 }} />
              {item.year}
            </div>
            <div style={{ lineHeight: "30px" }} className="bag_w">
              <img alt="" style={{ width: 17, marginRight: 5 }} />
              {item.w}
            </div>
            <div style={{ lineHeight: "30px" }} className="bag_height">
              <img alt="" style={{ width: 17, marginRight: 5 }} />
              {item.height}
            </div>
            <div
              style={{ fontSize: 27, color: "black", lineHeight: "40px" }}
              className="bag_price"
            >
              {item.price} $
            </div>
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <Button
            variant="contained"
            color="secondary"
            className={classes.button}
            startIcon={<DeleteIcon />}
            onClick={() => deleteBag(item.id, history)}
          >
            Удалить
          </Button>
          <Link to={`/edit/${item.id}`}>
            <Button
              variant="contained"
              color="primary"
              className={classes.button}
              startIcon={<EditIcon />}
            >
              Редактировать
            </Button>
          </Link>

          <Link to="/details">
            <IconButton
              onClick={() => showDetails(item.id, history)}
              aria-expanded={expanded}
              aria-label="show more"
            >
              <ExpandMoreIcon />
            </IconButton>
          </Link>
        </CardActions>
      </Card>
    </div>
  );
};

export default BagCard;
