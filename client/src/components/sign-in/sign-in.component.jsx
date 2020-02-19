import React, { useState } from "react";
import { connect } from "react-redux";
import FormInput from "../form-input/form-input.component";
import Button from "../custom-button/custom-button.component";
// import { auth, signInWithGoogle } from "../../firebase/firebase.utils";
import {
  googleSignInStart,
  emailSignInStart
} from "../../redux/user/user.actions";

import "./sign-in.styles.scss";

// class SignIn extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       email: "",
//       password: ""
//     };
//   }

const SignIn = ({ emailSignInStart, googleSignInStart }) => {
  const [userCredentials, setCredentials] = useState({
    email: "",
    password: ""
  });

  const { email, password } = userCredentials;

  const handleSubmit = async e => {
    e.preventDefault();
    // const { emailSignInStart } = this.props;
    emailSignInStart(email, password);
    // try {
    //   await auth.signInWithEmailAndPassword(email, password);
    //   this.setState({ email: "", password: "" });
    // } catch (error) {
    //   console.log(error);
    // }
  };

  const handleChange = e => {
    const { value, name } = e.target;
    // this.setState({ [name]: value });
    setCredentials({ ...userCredentials, [name]: value });
  };

  return (
    <div className="sign-in">
      <h2>I already have an account</h2>
      <span>Sign in with your email and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          name="email"
          type="email"
          handleChange={handleChange}
          value={email}
          label="email"
          required
        />
        <FormInput
          name="password"
          type="password"
          value={password}
          handleChange={handleChange}
          label="password"
          required
        />
        <div className="buttons">
          <Button type="submit">Sign In</Button>
          <Button type="button" onClick={googleSignInStart} isGoogleSignIn>
            Sign In With Google
          </Button>
        </div>
      </form>
    </div>
  );
};

const mapDispatchToProps = dispatch => ({
  googleSignInStart: () => dispatch(googleSignInStart()),
  emailSignInStart: (email, password) =>
    dispatch(emailSignInStart({ email, password }))
});

export default connect(null, mapDispatchToProps)(SignIn);
