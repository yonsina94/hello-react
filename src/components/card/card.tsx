import React, { Component } from "react";
import "./card.css";

/**
 * A Card Component
 */
export class Card extends Component<
  {
    /**
     * Source of the image of the product
     */
    imgSrc: string;

    /**
     * Name of the product
     */
    productName: string;

    /**
     * Currency of the priced product
     */
    productCurrency: string;

    /**
     * Price of the product
     */
    productPrice: number;
  },
  { choosedProduct: string }
> {
  render() {
    const imageName = `${this.props.productName} image`;
    const formatedPrice = `${this.props.productCurrency.toUpperCase()} $: ${
      this.props.productPrice
    }`;
    return (
      <div style={{ padding: "10px" }}>
        <div className="card">
          <img src={this.props.imgSrc} alt={imageName} />
          <div className="details">
            <div style={{ display: "flex" }}>
              <div className="device-name">{this.props.productName}</div>
              <div className="device-price">{formatedPrice}</div>
            </div>
          </div>
          <div style={{ textAlign: "center" }}>
            <p hidden>blackberry</p>
            <button
              onClick={(e) => {
                this.setState({ choosedProduct: this.props.productName });
              }}
            >
              Comprar
            </button>
          </div>
        </div>
      </div>
    );
  }
}
