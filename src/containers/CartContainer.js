import React from "react";
import Cart from "./../components/Cart";
import CartItem from "./../components/CartItem";
import CartResult from "./../components/CartResult";
import { connect } from "react-redux";
import PropTypes from "prop-types";

class CartContainer extends React.Component {
  render() {
    var cart = this.props.cart;
    return (
      <Cart>
        {this.showCartItem(cart)}
        {this.showTotalPrice(cart)}
      </Cart>
    );
  }

  showTotalPrice(cart) {
    var total = 0;
    for (var i = 0; i < cart.length; i++) {
      total += cart[i].product.price * cart[i].quantity;
    }
    return <CartResult total={total} />;
  }

  showCartItem(cart) {
    var rs = null;
    if (cart.length == 0) {
      rs = "Chưa có sản phẩm nào trong giỏ hàng";
    }
    if (cart.length > 0) {
      rs = cart.map((cartItem, index) => {
        return <CartItem key={index} cartItem={cartItem} />;
      });
    }
    return rs;
  }
}

// check prop type for state
CartContainer.propTypes = {
  cart: PropTypes.arrayOf(
    PropTypes.shape({
      product: PropTypes.shape({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        image: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
        inventory: PropTypes.number.isRequired,
        rating: PropTypes.number.isRequired,
      }),
      quantity: PropTypes.number.isRequired,
    })
  ).isRequired,
};

const mapStateToProps = (state) => {
  return {
    cart: state.cart,
  };
};

export default connect(mapStateToProps, null)(CartContainer);
