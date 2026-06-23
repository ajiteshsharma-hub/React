import React from "react";
class UserClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userInfo: {
        name: "dummy",
        location: "default",
        contact: "@dummy",
      },
    };
  }

  async componentDidMount() {
    const data = await fetch("https://api.github.com/users/ajiteshsharma-hub");
    const json = await data.json();
    this.setState({
      userInfo: json,
    });
  }

  componentDidUpdate() {
    console.log("Component is updated");
  }

  componentWillUnmount() {
    console.log("Component is unmounted");
  }

  render() {
    const { name, location, login, avatar_url } = this.state.userInfo;
    return (
      <div className="user-card">
        <img src={avatar_url} />
        <h3>Name: {name} </h3>
        <h3>Location: {location} </h3>
        <h3>Contact: {login} </h3>
      </div>
    );
  }
}

export default UserClass;
