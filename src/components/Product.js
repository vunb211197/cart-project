import React from "react";

class Product extends React.Component {
    onAddToCart = (product) => {
      this.props.onAddToCart(product);
    }

    showRatings = (rating) => {
        var result = [];
        for ( var i = 1 ; i<= rating ; i++) {
          result.push(<li className="fa fa-star" key={i}></li>);
        }
        for(var j =1 ; j<=(5-rating); j++) {
          result.push(<li className="fa fa-star-o" key={rating+j}></li>)
        }
        return result;
      }

  render() {
    var product = this.props.product;

    return (
      <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
          <div className="card text-center card-cascade narrower">
            <div className="view overlay hm-white-slight z-depth-1">
              <img
                src={product.image}
                className="img-fluid"
                alt=""
              />
              <a alt="">
                <div className="mask waves-light waves-effect waves-light" />
              </a>
            </div>
            <div className="card-body">
              <h4 className="card-title">
                <strong>
                  <a>{product.name}</a>
                </strong>
              </h4>
              <ul className="rating">
                {this.showRatings(product.rating)}
              </ul>
              <p className="card-text">{product.description}</p>
              <div className="card-footer">
                <span className="left">{product.price}$</span>
                <span className="right">
                  <a
                    alt=""
                    className="btn-floating blue-gradient"
                    data-toggle="tooltip"
                    data-placement="top"
                    title=""
                    data-original-title="Add to Cart"
                  >
                    <i className="fa fa-shopping-cart" onClick = {this.onAddToCart(product)} />
                  </a>
                </span>
              </div>
            </div>
          </div>
      </div>
    );
  }
}

export default Product;
