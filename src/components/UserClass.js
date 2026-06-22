import React from "react";
class UserClass extends React.Component {
  constructor(props) {
    super(props);
    console.log("Child Constructor is rendered");
    console.log(props);
    this.state = {
      count: 0,
      count2: 0,
      count3: 3,
    };
  }

  componentDidMount() {
    console.log("Child component mounted");
  }

  render() {
    console.log("Child render is called");
    const { name, location, contact } = this.props;
    const { count, count2 } = this.state;
    return (
      <div className="user-card">
        <h3>Name: {name} </h3>
        <h3>Location: {location} </h3>
        <h3>Contact: {contact} </h3>
        <h3>
          Count : {count} <br></br>
          Count2: {count2}
        </h3>
        <button
          onClick={() => {
            this.setState({
              count: count + 1,
              count2: count2 + 2,
            });
          }}
        >
          Count Increase
        </button>
      </div>
    );
  }
}

export default UserClass;
