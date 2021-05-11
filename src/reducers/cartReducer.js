var data = JSON.parse(localStorage.getItem("cart"));
// var initialState = data ? data : [];

var initialState = [
  {
    product: {
      id: 1,
      name: "Iphone 11",
      image:
        "https://images.macrumors.com/t/aEVvOiTmk1YHlPJEzIPvQseQpwk=/1600x/https://images.macrumors.com/article-new/2019/09/iphone11prolineup.jpg",
      description: "Sản phẩm do Appple sản xuất",
      price: 500,
      inventory: 10,
      rating: 5,
    },
    quantity: 11,
  },
  {
    product: {
      id: 2,
      name: "Samsung A71",
      image: "https://cdn.alzashop.com/ImgW.ashx?fd=f16&cd=SAMO0182b1",
      description: "Máy samsung màn hình khá đẹp",
      price: 200,
      inventory: 5,
      rating: 3,
    },
    quantity: 2,
  },
];

var cart = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      console.log(action);
      var product = action.product;
      var quantity = action.quantity;
      return [...state];
    default:
      return state;
  }
};

export default cart;
