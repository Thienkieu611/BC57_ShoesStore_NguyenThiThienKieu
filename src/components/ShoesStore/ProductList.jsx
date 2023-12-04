import React, { Component } from "react";
import ShoesStore from "./ShoesStore";
import ProductListItem from "./ProductListItem";

export default class ProductList extends Component {
  render() {
    return (
      <div>
        <h3 className="text-center my-3">Danh sách các sản phẩm giày</h3>
        <div className="row">
          {this.props.productsData.map((product) => {
            return (
              <div
                className="col-lg-4 col-md-6 col-sm-12 my-3"
                key={product.id}
              >
                <ProductListItem
                  item={product}
                  addToCart={this.props.addToCart}
                  viewDetail={this.props.viewDetail}
                />
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}
