import * as actionTypes from "./types";

const fetch_menu_request = () => {
  return {
    type: actionTypes.FETCH_MENU_REQUEST,
  };
};

const fetch_menu_success = (payload) => {
  return {
    type: actionTypes.FETCH_MENU_SUCCESS,
    payload: payload,
  };
};

const fetch_menu_failure = (error) => {
  return {
    type: actionTypes.FETCH_MENU_FAILURE,
  };
};
const data = [
  {
    id: 1,
    menu: "Foods",
    sub_menu: "Rice",
    title: "صوصات ",
    price: 25000,
    image: "https://media01.stockfood.com/previews/MTQ5MjIyNzg0/12435232.jpg",
  },
  {
    id: 2,
    menu: "Foods",
    sub_menu: "Rice",
    title: "صوصات",
    price: 40000,
    image: "https://media01.stockfood.com/thumbs/200/11435392.jpg",
  },
  {
    id: 3,
    menu: "Foods",
    sub_menu: "Snacks",
    title: "صوصات",
    price: 5000,
    image: "https://media02.stockfood.com/previews/MTM4MDUxOTI0/11504327.jpg",
  },
  {
    id: 4,
    menu: "Foods",
    sub_menu: "Snacks",
    title: "Putu Ayu",
    price: 5000,
    image: "https://media01.stockfood.com/thumbs/200/11504332.jpg",
  },
  {
    id: 5,
    menu: "Drinks",
    sub_menu: "Baverages",
    title: "Coconut",
    price: 15000,
    image:
      "https://media02.stockfood.com/previews/ODUzMTk4NDUy/71099871-Coconuts-on-a-table-Ubud-Bali-Indonesia-Asia.jpg",
  },
];

export const fetch_menu = () => {
  return (dispatch) => {
    dispatch(fetch_menu_request());

    return fetch(
      "https://my-json-server.typicode.com/BabyCode10/point-of-sale-demo/menus"
    )
      .then((response) => response.json())
      .then((body) => {
        console.log(body);
        dispatch(fetch_menu_success(data));
      })
      .catch((error) => {
        dispatch(fetch_menu_failure(error));
      });
  };
};
