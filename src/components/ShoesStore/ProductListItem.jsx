import React, { Component } from "react";

export default class ProductListItem extends Component {
  render() {
    let { item } = this.props;
    return (
      <div className="card">
        <img src={item.image} alt="..." />
        <div className="card-body">
          <h5>{item.name}</h5>
          <p>{item.price}</p>
          <button
            className="btn btn-primary"
            onClick={() => {
              this.props.viewDetail(item);
            }}
          >
            View Detail
          </button>
          <button
            className="btn btn-danger mx-2"
            onClick={() => {
              this.props.addToCart(item);
            }}
          >
            Add to cart <i className="fa fa-cart-plus"></i>
          </button>
        </div>
      </div>
    );
  }
}
