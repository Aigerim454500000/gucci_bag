import React, { useContext } from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import IconButton from "@material-ui/core/IconButton";
import Badge from "@material-ui/core/Badge";
import { bagsContext } from "../../contexts/BagsContext";
import BurgerMenu from "./BurgerMenu";
const Header = () => {
    const { cartLength } = useContext(bagsContext);
    return (
        <>
            <div className="hamburger_menu">
                <BurgerMenu />
            </div>
            <div className="header">
                <Link to="/">
                    <div className="logo_div">
                        <img
                            className="logo"
                            src="https://www.vectorkhazana.com/assets/images/products/Gucci_svg.png"
                            alt=""
                        />
                    </div>
                </Link>
                <div className="navBar">
                    <Link to="/cart">
                        <IconButton
                            edge="end"
                            aria-label="account of current user"
                            aria-haspopup="true"
                            color="inherit"
                            style={{ marginRight: "5px" }}
                        >
                            <Badge badgeContent={cartLength} color="secondary">
                                <img
                                    src="https://img.icons8.com/material/452/shopping-cart--v1.png"
                                    style={{ width: 35 }}
                                    alt=""
                                />
                            </Badge>
                        </IconButton>
                    </Link>
                    <Link to="/login">
                        <button className="login">Log in</button>
                    </Link>
                    <Link to="/signup">
                        <button className="signup">Sign up</button>
                    </Link>
                    <Link to="/store">
                        <button className="store">Store</button>
                    </Link>
                </div>
            </div>
        </>
    );
};
export default Header;
