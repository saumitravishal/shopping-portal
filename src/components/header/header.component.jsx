import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { auth } from "../../firebase/firebase.utils";
import { ReactComponent as Logo } from "../../assets/crown.svg";
import CartIcon from "../cart-icon/cart-icon.component";
import CartDropDown from "../cart-dropdown/cart-dropdown.component";
import { createStructuredSelector } from "reselect";
import { selectCurrentUser } from "../../redux/user/user.selectors";
import { selectCartHidden } from "../../redux/cart/cart.selectors";
import * as Styled from "./header.styles";

import "./header.styles.scss";

const Header = ({ currentUser, hidden }) => (
  <Styled.HeaderContainer>
    <Styled.LogoContainer to="/">
      <Logo className="logo" />
    </Styled.LogoContainer>
    <Styled.OptionsContainer>
      <Styled.OptionLink to="/shop">SHOP</Styled.OptionLink>
      <Styled.OptionLink to="/shop">CONTACT</Styled.OptionLink>
      {currentUser ? (
        <Styled.OptionLink as="div" onClick={() => auth.signOut()}>
          SIGN OUT
        </Styled.OptionLink>
      ) : (
        <Styled.OptionLink to="/signin">SIGN IN</Styled.OptionLink>
      )}
      <CartIcon />
    </Styled.OptionsContainer>
    {hidden ? null : <CartDropDown />}
  </Styled.HeaderContainer>
);

// const mapStateToProps = state => ({
//   currentUser: state.user.currentUser,
//   hidden: state.cart.hidden
// });

// createStructuredSelector automatic pass top level state to selector
const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  hidden: selectCartHidden
});

export default connect(mapStateToProps)(Header);
