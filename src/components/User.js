import { useState } from "react";
const User = (props) => {
  const { name, location, contact } = props;
  const [count, setCount] = useState(0);
  return (
    <div className="user-card">
      <h3>Name: {name}</h3>
      <h3>Location: {location}</h3>
      <h3>Contact: {contact}</h3>
      <h3>Count: {count}</h3>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Count Increase
      </button>
    </div>
  );
};

export default User;
