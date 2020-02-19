import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

import Button from "../custom-button/custom-button.component";
import CartItem from "../cart-item/cart-item.component";
import { selectCartItems } from "../../redux/cart/cart.selectors";
import { toogleCartHidden } from "../../redux/cart/cart.actions";

import "./cart-dropdown.styles.scss";

// we can use dispatch over here if we have to dispatc one action
const CartDropDown = ({ cartItems, history, dispatch }) => (
  <div className="cart-dropdown">
    <div className="cart-items">
      {cartItems.length ? (
        cartItems.map(cartItem => (
          <CartItem key={cartItem.id} item={cartItem} />
        ))
      ) : (
        <span className="empty-message">Your cart is empty</span>
      )}
    </div>
    <Button
      onClick={() => {
        history.push("/checkout");
        dispatch(toogleCartHidden());
      }}
    >
      GO TO CHECKOUT
    </Button>
  </div>
);

// const mapStateToProps = ({ cart: { cartItems } }) => ({
//   cartItems
// });

// Now we are using selectors

const mapStateToProps = state => ({
  cartItems: selectCartItems(state)
});

export default withRouter(connect(mapStateToProps)(CartDropDown));
