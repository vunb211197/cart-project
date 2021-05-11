import React from "react";
import Product from "./Product";

class Products extends React.Component {

  render() {
    var products = this.props.products;
    return (
      <div>
        <section className="section">
          <h1 className="section-heading">Danh Sách Sản Phẩm</h1>
          <div className="row">
            {this.props.children}
          </div>
        </section>
      </div>
    );
  }
}

export default Products;
