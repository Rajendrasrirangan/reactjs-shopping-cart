import React from "react";
import './summary.component.css';
import PropTypes from 'prop-types';
class Summary extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            totalAmount: 0,
            totalCartCount: 0,
            productList: []
        };
        this.remove_from_cart = this.remove_from_cart.bind(this);
    }

    componentDidMount() {
        let total = 0;
        let cartCount = 0;
        let list = []
        this.state.productList.forEach((product, index) => {
            if (product.count !== 0) {
                total += product.count * product.ProductPrice;
                cartCount++;
                list.push(product);
            }
            if (index === this.props.productList.length - 1) {
                this.setState({ totalAmount: total, totalCartCount: cartCount, productList: list });
            }
        });
    }

    componentWillReceiveProps(newProps) {
        let total = 0;
        let cartCount = 0;
        let list = [];
        newProps.productList.forEach((product, index) => {
            if (product.count !== 0) {
                total += product.count * product.ProductPrice;
                cartCount++;
                list.push(product);
            }
            if (index === newProps.productList.length - 1) {
                this.setState({ totalAmount: total, totalCartCount: cartCount, productList: list });

            }
        });
    }

    remove_from_cart(product) {
        this.props.remove_from_cart(product, "ALL");
    }
    render() {

        const style1 = {

            border: '1px solid green',

            color: '#4db1e8',
            fontFamily: 'sans-serif',
            align: 'right'

        }
        let summaryCss = { width: '50%' };
        let cartCss = {
            width: '50%'
        };
        return (
            <div className="mainDiv" style={style1}>
                <p>Your Cart Summary</p>
                <div className="row">
                    <div className="col-lg-6 col-md-6 text-center left" style={summaryCss}>
                        <p className='marginZero'>Items in the cart</p>
                        <span>{this.state.totalCartCount}</span>
                    </div>
                    <div className="col-lg-6 col-md-6 right text-center" style={cartCss}>
                        <p className='marginZero padding-left-25'>Total Rs</p>
                        <p>{this.state.totalAmount}</p>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-4 col-lg-4">Item</div>
                    <div className="col-md-3 col-lg-3">Quantity</div>
                    <div className="col-md-3 col-lg-3">Total Rs</div>
                    <div className="col-md-2 col-lg-2">-</div>
                </div>
                {
                    this.state.productList.map((product, index) => {
                            return (
                                <div className="row" key={index}>
                                    <div className="col-md-4 col-lg-4">{product.ProductNmae}</div>
                                    <div className="col-md-2 col-lg-2">{product.count}</div>
                                    <div className="col-md-3 col-lg-3">{product.count * product.ProductPrice}</div>
                                    <div className="col-md-3 col-lg-3"><button onClick={() => this.remove_from_cart(product)}>Remove </button></div>
                                </div>
                            )
                    })}
            </div>
            );
        }
    }
    
Summary.propTypes = {
                    remove_from_cart: PropTypes.func,
                productList: PropTypes.array
            };
            
export default Summary;