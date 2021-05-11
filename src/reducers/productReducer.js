var initialState = [
  {
    id: 1,
    name: "Iphone 11",
    image: "https://images.macrumors.com/t/aEVvOiTmk1YHlPJEzIPvQseQpwk=/1600x/https://images.macrumors.com/article-new/2019/09/iphone11prolineup.jpg",
    description: "Sản phẩm do Appple sản xuất",
    price: 500,
    inventory: 10,
    rating : 5
  },
  {
    id: 2,
    name: "Samsung A71",
    image: "https://cdn.alzashop.com/ImgW.ashx?fd=f16&cd=SAMO0182b1",
    description: "Máy samsung màn hình khá đẹp",
    price: 200,
    inventory: 5,
    rating : 3
  },
  {
    id: 3,
    name: "Nokia 1280",
    image: "https://cf.shopee.sg/file/8ff812c2250b2797d1feb413f1b8ea4f",
    description: "Cục gạch",
    price: 100,
    inventory: 100,
    rating : 0
  },
];

var products = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default products;
