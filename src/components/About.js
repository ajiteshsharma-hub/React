import React from "react";
import User from "./User";
import UserClass from "./UserClass";

class About extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <UserClass />
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
