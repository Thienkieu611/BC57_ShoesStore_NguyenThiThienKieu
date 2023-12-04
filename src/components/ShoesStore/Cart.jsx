import React, { Component } from "react";

export default class Cart extends Component {
  render() {
    let { arrCart } = this.props;
    return (
      <div>
        <h3 className="mb-4">Giỏ hàng</h3>
        <table className="table text-center">
          <thead>
            <tr>
              <th>Mã SP</th>
              <th>Tên sản phẩm</th>
              <th>Hình ảnh</th>
              <th>Giá bán</th>
              <th>Số lượng</th>
              <th>Thành tiền</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {arrCart.map((prodCart) => {
              return (
                <tr key={prodCart.id}>
                  <td>{prodCart.id}</td>
                  <td>{prodCart.name}</td>
                  <td>
                    <img
                      src={prodCart.image}
                      alt="..."
                      width={50}
                      height={50}
                    />
                  </td>
                  <td>{prodCart.price}</td>
                  <td>
                    <button
                      className="btn btn-dark mx-2"
                      onClick={() => {
                        this.props.updateCart(prodCart.id, 1);
                      }}
                    >
                      +
                    </button>
                    {prodCart.count}
                    <button
                      className="btn btn-dark mx-2"
                      onClick={() => {
                        this.props.updateCart(prodCart.id, -1);
                      }}
                    >
                      -
                    </button>
                  </td>
                  <td>{prodCart.price * prodCart.count}</td>
                  <td
                    className="btn btn-danger mt-2"
                    onClick={() => {
                      this.props.deleteCart(prodCart.id);
                    }}
                  >
                    <i class="fa fa-trash-alt"></i>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }
}
