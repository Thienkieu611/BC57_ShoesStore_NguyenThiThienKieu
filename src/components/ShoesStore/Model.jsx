import React, { Component } from "react";

export default class Model extends Component {
  render() {
    let { prodDetail } = this.props;
    return (
      <div>
        <div className="row my-5">
          <div className="col-4">
            <h3>{prodDetail.name}</h3>
            <img
              src={prodDetail.image}
              alt="..."
              height={300}
              className="w-100"
            />
          </div>
          <div className="col-7">
            <h3>Thông tin chi tiết</h3>
            <table className="table">
              <tbody>
                <tr>
                  <th>Mã sản phẩm</th>
                  <th>{prodDetail.id}</th>
                </tr>
                <tr>
                  <th>Biệt danh</th>
                  <th>{prodDetail.alias}</th>
                </tr>
                <tr>
                  <th>Giá sản phẩm</th>
                  <th>{prodDetail.price}</th>
                </tr>
                <tr>
                  <th>Mô tả</th>
                  <th>{prodDetail.shortDescription}</th>
                </tr>
                <tr>
                  <th>Số lượng còn trong kho</th>
                  <th>{prodDetail.quantity}</th>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
}
