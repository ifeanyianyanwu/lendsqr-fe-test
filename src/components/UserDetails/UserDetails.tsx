import { useEffect } from "react";

const UserDetails = () => {
  useEffect(() => {
    console.log(JSON.parse(localStorage.userData));
  }, []);

  return <div>UserDetails</div>;
};

export default UserDetails;
