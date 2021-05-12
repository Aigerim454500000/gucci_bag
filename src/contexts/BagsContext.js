import React, { useReducer } from "react";
import axios from "axios";
import {
  calcSubPrice,
  calcTotalPrice,
  getCountProductsInCart,
} from "../helpers/calcPrice";
export const bagsContext = React.createContext();
const INIT_STATE = {
  bagsData: [],
  paginationPages: 1,
  carToEdit: null,
  detailsData: null,
  cartLength: getCountProductsInCart(),
  ordersData: [],
};

const reducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case "GET_BAGS":
      return {
        ...state,
        bagsData: action.payload.data,

        paginationPages: Math.ceil(action.payload.headers["x-total-count"] / 4),
      };

    case "EDIT_BAG":
      return { ...state, carToEdit: action.payload };
    case "DETAILS_BAG":
      return { ...state, detailsData: action.payload };
    case "GET_CART":
      return { ...state, cart: action.payload };
    case "GET_ORDERS":
      return { ...state, ordersData: action.payload };
    case "CHANGE_CART_COUNT":
      return { ...state, cartLength: action.payload };
    default:
      return state;
  }
};
const BagsContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, INIT_STATE);

  async function getBags(history) {
    console.log(history);
    const search = new URLSearchParams(history.location.search);
    search.set("_limit", 4);
    history.push(`${history.location.pathname}?${search.toString()}`);
    let res = await axios.get(
      `http://localhost:8000/bags${window.location.search}`
    );
    dispatch({
      type: "GET_BAGS",
      payload: res,
    });
  }
  const addBag = (newCar, history) => {
    axios.post("http://localhost:8000/bags", newCar);

    getBags(history);
  };
  const deleteBag = async (id, history) => {
    await axios.delete(`http://localhost:8000/bags/${id}`);
    getBags(history);
  };
  const editBag = async (id) => {
    let { data } = await axios(`http://localhost:8000/bags/${id}`);
    dispatch({
      type: "EDIT_BAG",
      payload: data,
    });
  };
  const saveEditedBag = async (editedCar) => {
    await axios.patch(`http://localhost:8000/bags/${editedCar.id}`, editedCar);
  };
  const showDetails = async (id) => {
    let { data } = await axios(`http://localhost:8000/bags/${id}`);
    dispatch({
      type: "DETAILS_BAG",
      payload: data,
    });
  };
  //cart
  function addProductToCart(product) {
    let cart = JSON.parse(localStorage.getItem("cart"));
    if (!cart) {
      cart = {
        products: [],
        totalPrice: 0,
      };
    }
    let newProduct = {
      item: product,
      count: 1,
      subPrice: product.price,
    };
    let filteredCart = cart.products.filter(
      (elem) => elem.item.id === product.id
    );
    if (filteredCart.length > 0) {
      cart.products = cart.products.filter(
        (elem) => elem.item.id !== product.id
      );
    } else {
      cart.products.push(newProduct);
    }

    localStorage.setItem("cart", JSON.stringify(cart));
    dispatch({
      type: "CHANGE_CART_COUNT",
      payload: cart.products.length,
    });
  }
  function getCart() {
    let cart = JSON.parse(localStorage.getItem("cart"));
    if (!cart) {
      cart = {
        products: [],
        totalPrice: 0,
      };
    }
    dispatch({
      type: "GET_CART",
      payload: cart,
    });
  }
  function changeProductCount(count, id) {
    let cart = JSON.parse(localStorage.getItem("cart"));
    cart.products = cart.products.map((elem) => {
      if (elem.item.id === id) {
        elem.count = count;
        elem.subPrice = calcSubPrice(elem);
      }
      return elem;
    });
    cart.totalPrice = calcTotalPrice(cart.products);
    localStorage.setItem("cart", JSON.stringify(cart));
    getCart();
  }
  function checkProductInCart(id) {
    let cart = JSON.parse(localStorage.getItem("cart"));
    if (!cart) {
      cart = {
        products: [],
        totalPrice: 0,
      };
    }
    let newCart = cart.products.filter((elem) => elem.item.id === id);
    return newCart.length > 0 ? true : false;
  }
  function deleteFromCart(id) {
    let cart = JSON.parse(localStorage.getItem("cart"));
    if (!cart) {
      cart = {
        products: [],
        totalPrice: 0,
      };
    }
    cart.products = cart.products.filter((item) => {
      return item.item.id !== id;
    });
    localStorage.setItem("cart", JSON.stringify(cart));
    getCart();
    dispatch({
      type: "CHANGE_CART_COUNT",
      payload: cart.products.length,
    });
  }

  const addOrder = (newOrder) => {
    axios.post("http://localhost:8000/orders", newOrder);
  };
  async function getOrders() {
    let { data } = await axios.get(`http://localhost:8000/orders`);
    dispatch({
      type: "GET_ORDERS",
      payload: data,
    });
  }

  async function fetchCar(id) {
    let { data } = await axios.get(`http://localhost:8000/bags/` + id);

    dispatch({
      type: "EDIT_BAG",
      payload: data,
    });
  }
  return (
    <bagsContext.Provider
      value={{
        bagsData: state.bagsData,
        paginationPages: state.paginationPages,
        carToEdit: state.carToEdit,
        detailsData: state.detailsData,
        cart: state.cart,
        cartLength: state.cartLength,
        ordersData: state.ordersData,
        getBags,
        addBag,
        deleteBag,
        editBag,
        saveEditedBag,
        showDetails,
        addProductToCart,
        getCart,
        changeProductCount,
        checkProductInCart,
        deleteFromCart,
        fetchCar,

        addOrder,
        getOrders,
      }}
    >
      {children}
    </bagsContext.Provider>
  );
};
export default BagsContextProvider;
