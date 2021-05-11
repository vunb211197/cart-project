import React from "react";
import { connect } from "react-redux";
import Products from "./../components/Products";
import Product from "./../components/Product";
import PropTypes from "prop-types";

class ProductsContainer extends React.Component {
  // show all product in products
  showProducts(products) {
    var rs = null;
    if (products.length > 0) {
      rs = products.map((product, index) => {
        return <Product key={index} product={product} />;
      });
    }
    return rs;
  }

  render() {
    var products = this.props.products;
    return <Products>{this.showProducts(products)}</Products>;
  }
}

// check prop type for state
ProductsContainer.propTypes = {
  products: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
      inventory: PropTypes.number.isRequired,
      rating: PropTypes.number.isRequired
    })
  ).isRequired,
};

const mapStateToProps = (state) => {
  return {
    products: state.products,
  };
};

export default connect(mapStateToProps, null)(ProductsContainer);
