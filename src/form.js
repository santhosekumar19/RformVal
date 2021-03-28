import React, { Component } from "react";
import Message from "./message";

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isValidName: false,
      isValidPhone: false,
      isValidEmail: false,
      isValidBlog: false,
      msg: "invalid Form"
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange = e => {
    let x = e.target.value;
    console.log(x);
    switch (e.target.name) {
      case "name":
        if (x.length > 2 && x.length < 31) {
          this.setState({ isValidName: true });
        } else {
          this.setState({ isValidName: false });
        }
        break;

      case "email":
        if (/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(x)) {
          this.setState({ isValidEmail: true });
        } else {
          this.setState({ isValidEmail: false });
        }
        break;

      case "phone":
        if (/^[3-9]{1}[0-9]+/.test(x) && x.length === 10) {
          this.setState({ isValidPhone: true });
        } else {
          this.setState({ isValidPhone: false });
        }
        break;

      case "blog":
       
        if (/[a-z0-9-\.]+\.[a-z]{2,4}\/?([^\s<>\#%"\,\{\}\\|\\\^\[\]`]+)?$/.test(x)
        ) {
          this.setState({ isValidBlog: true });
        } else {
          this.setState({ isValidBlog: false });
        }
        break;

      default:
        break;
    }
  };

  handlesubmit = e => {
    console.log(this.state);
    console.log("submitted");
    if (
      this.state.isValidName &&
      this.state.isValidEmail &&
      this.state.isValidBlog &&
      this.state.isValidPhone
    ) {
      this.setState({ msg: "Valid Form" });
    } else {
      this.setState({ msg: "inValid Form" });
    }
  };

  render() {
    return (
      <div>
        <form>
          <h1>First Name</h1>
          <input name="name" onChange={this.handleChange} />

          <h1>phone</h1>
          <input name="phone" type="number" onChange={this.handleChange} />

          <h1>Email</h1>
          <input type="email" name="email" onChange={this.handleChange} />

          <h1>Blog URL</h1>
          <input name="blog" onChange={this.handleChange} />

          <button type="button" onClick={this.handlesubmit}>
            Validate
          </button>
        </form>
        <Message msg={this.state.msg} />
      </div>
    );
  }
}

export default Form;
