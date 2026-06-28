import { useContext } from "react";
import UserContext from "../utils/UserContext";
const Contact = () => {
  const { loggedInUser, setUserName } = useContext(UserContext);
  return (
    <div>
      <h1>Contact Us Page</h1>
      <input
        className="border border-black"
        value={loggedInUser || " "}
        placeholder="name"
        onChange={(e) => {
          setUserName(e.target.value);
        }}
      />
      <button>Submit</button>
    </div>
  );
};

export default Contact;
