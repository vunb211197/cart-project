import React from "react";
class CartItem extends React.Component {
  render() {
    var cartItem = this.props.cartItem;
    var item_total_price = cartItem.product.price*cartItem.quantity;
    return (
        <tr>
          <th scope="row">
            <img
              src={cartItem.product.image}
              alt=""
              className="img-fluid z-depth-0"
            />
          </th>
          <td>
            <h5>
              <strong>{cartItem.product.name}</strong>
            </h5>
          </td>
          <td>{cartItem.product.price}$</td>
          <td className="center-on-small-only">
            <span className="qty">{cartItem.quantity} &nbsp;</span>
            <div className="btn-group radio-group" data-toggle="buttons">
              <label
                className="btn btn-sm btn-primary
                                      btn-rounded waves-effect waves-light"
              >
                <a href="">—</a>
              </label>
              <label
                className="btn btn-sm btn-primary
                                      btn-rounded waves-effect waves-light"
              >
                <a href="">+</a>
              </label>
            </div>
          </td>
          <td>{item_total_price}$</td>
          <td>
            <button
              type="button"
              className="btn btn-sm btn-warning waves-effect waves-light"
              data-toggle="tooltip"
              data-placement="top"
              title=""
              data-original-title="Remove item"
            >
              <i className="fa fa-trash-o" aria-hidden="true"></i>
            </button>
          </td>
        </tr>
    );
  }
}
export default CartItem;
