import React from "react";
import "./sign-up.styles.scss";
import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";
import { auth, createUserProfileDocument } from "../../firebase/firebase.utils";

class SignUp extends React.Component {
  constructor() {
    super();

    this.state = {
      displayName: "",
      name: "",
      email: "",
      password: "",
      confirm_password: "",
    };
  }

  handleChange = (event) => {
    const { value, name } = event.target;

    this.setState({ [name]: value });
  };

  handleSubmit = async (event) => {
    event.preventDefault();

    const { displayName, email, password, confirm_password } = this.state;

    if (password !== confirm_password) {
      console.log("Password don't match");
      return;
    }

    try {
      const { user } = await auth.createUserWithEmailAndPassword(
        email,
        password
      );
      await createUserProfileDocument(user, { displayName });

      this.setState({
        displayName: "",
        name: "",
        email: "",
        password: "",
        confirm_password: "",
      });
    } catch (error) {
      console.error(error);
    }
  };
  render() {
    const { displayName, email, password, confirm_password } = this.state;
    return (
      <div className="sign-up">
        <h2 className="title">I don't have a account</h2>
        <span>SignUp With Your Email And Password</span>

        <form className="sign-up-form" onSubmit={this.handleSubmit}>
          <FormInput
            type="text"
            name="displayName"
            className="form-control"
            value={displayName}
            handelChange={this.handleChange}
            label="display Name"
            required
          />
          <FormInput
            type="email"
            name="email"
            className="form-control"
            value={email}
            handelChange={this.handleChange}
            label="email"
            required
          />
          <FormInput
            type="password"
            name="password"
            className="form-control"
            value={password}
            handelChange={this.handleChange}
            label="password"
            required
          />
          <FormInput
            type="password"
            name="confirm_password"
            className="form-control"
            value={confirm_password}
            handelChange={this.handleChange}
            label="confirm_password"
            required
          />
          <div className="buttons">
            <CustomButton type="submit">Sign Up</CustomButton>
          </div>
        </form>
      </div>
    );
  }
}

export default SignUp;
