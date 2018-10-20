import React, { Component } from "react";
import { SubmissionError } from "redux-form";
import RegisterForm from "./components/RegisterForm";

class RegisterFormContainer extends Component {
  submit = values => {
    window.alert(JSON.stringify(values, null, 4));
  };
  getInitialValues = () => ({
    newsletter: true,
    preference: "spaces"
  });
  render() {
    return (
      <RegisterForm
        onSubmit={this.submit}
        initialValues={this.getInitialValues()}
      />
    );
  }
}
export default RegisterFormContainer;
