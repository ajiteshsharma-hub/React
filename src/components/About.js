import React from "react";
import User from "./User";
import UserClass from "./UserClass";

class About extends React.Component {
  constructor(props) {
    super(props);
    console.log("ParentConstructor is rendered");
  }

  componentDidMount() {
    console.log("Parent component mounted");
  }

  render() {
    console.log("Parent render is called");
    return (
      <div>
        <h1>About Us Page</h1>
        <User
          name={"Ajitesh Sharma"}
          location={"Bhopal"}
          contact={"@ajitesh_sharma"}
        />
        <UserClass
          name={"Trishila Bhargav"}
          location={"Indore"}
          contact={"@trishila_bhargav"}
        />
      </div>
    );
  }
}

// const About = () => {
//   return (
//     <div>
//       <h1>About Us Page</h1>
//       <User
//         name={"Ajitesh Sharma"}
//         location={"Bhopal"}
//         contact={"@ajitesh_sharma"}
//       />
//       <UserClass
//         name={"Trishila Bhargav"}
//         location={"Indore"}
//         contact={"@trishila_bhargav"}
//       />
//     </div>
//   );
// };

export default About;
