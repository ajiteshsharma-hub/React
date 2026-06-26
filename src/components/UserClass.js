import React from "react";
import UserContext from "../utils/UserContext";
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
      <div className="user-cardrestaurant-card rounded-2xl bg-gray-100 w-72 h-full p-3 hover:shadow-2xl hover:bg-gray-200">
        <img src={avatar_url} />
        <UserContext.Consumer>
          {({ loggedInUser }) => <h1 className="text-lg">{loggedInUser}</h1>}
        </UserContext.Consumer>
        <h3>Name: {name} </h3>
        <h3>Location: {location} </h3>
        <h3>Contact: {login} </h3>
      </div>
    );
  }
}

export default UserClass;
