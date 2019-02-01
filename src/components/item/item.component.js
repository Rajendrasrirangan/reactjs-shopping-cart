import React from "react";
import './item.component.css';
import PropTypes from 'prop-types';
class Item extends React.Component {

    remove_from_cart(product){
        this.props.remove_from_cart(product);
    }
    add_to_cart(product){
        this.props.add_to_cart(product);
    }

render() {
     return (
         <div className="item" >
           <img src={this.props.product.ProductImage} height="170px" width="70px" alt="Random imag"/>
           <h3>{this.props.product.BrandName}</h3>
           <p>{this.props.product.ProductNmae}</p>
           <p>{this.props.product.ProductDetail}</p>
           <h2>{this.props.product.ProductPrice}</h2>
           {(this.props.product.count !==0) && <div className="row">
                <div className="col-lg-2 col-md-2 button-border" onClick={()=>this.remove_from_cart(this.props.product)}>-</div>
                <div className="col-lg-8 col-md-8 button-border">{this.props.product.count} in cart </div>
                <div className="col-lg-2 col-md-2 button-border" onClick={()=>this.add_to_cart(this.props.product)}>+</div>
           </div>}
           {(this.props.product.count === 0) && <button onClick={()=>this.add_to_cart(this.props.product)}>Add to cart </button>}
         </div>
     );
 }
}

Item.propTypes = {
    remove_from_cart: PropTypes.func,
    add_to_cart: PropTypes.func,
    product: PropTypes.object
  };
//module.exports = item;
export default Item;