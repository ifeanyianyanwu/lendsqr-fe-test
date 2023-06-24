import Logo from "../../assets/logo.png";
import SignInImg from "../../assets/signinImage.svg";
import Button from "../../components/ui/Button/Button";
import TextInput from "../../components/ui/TextInput/TextInput";
import "./Login.scss";
import { SyntheticEvent, useState } from "react";
import { useNavigate } from "react-router-dom";

type UserData = {
  email: string;
  password: string;
};

const Login = () => {
  const [userCredentials, setUserCredentials] = useState<UserData>({
    email: "",
    password: "",
  });
  const [passwordType, setPasswordType] = useState("password");
  const navigate = useNavigate();

  const handleInputChange = (e: SyntheticEvent) => {
    const { name, value } = e.target as HTMLInputElement;
    setUserCredentials((prev) => ({ ...prev, [name]: value }));
  };

  const handleShowButtonClick = () => {
    setPasswordType((prev) => (prev === "password" ? "text" : "password"));
  };

  const handleSubmit = (e: SyntheticEvent) => {
    e.preventDefault();
    if (!userCredentials.email || !userCredentials.password) {
      alert("Please enter a valid Username and Password");
      return;
    }
    navigate("/dashboard/users");
  };

  return (
    <div className="page-container">
      <div className="sign-in__image">
        <img src={Logo} alt="logo" />
        <img src={SignInImg} alt="Sign In Image" />
      </div>
      <div className="sign-in__form_container">
        <form onSubmit={handleSubmit}>
          <h1>Welcome!</h1>
          <h4>Enter details to login.</h4>
          <TextInput
            type="email"
            name="email"
            placeholder="Email"
            onChange={handleInputChange}
          />
          <TextInput
            type={passwordType}
            name="password"
            placeholder="Password"
            onChange={handleInputChange}
          >
            <p className="password-show-btn" onClick={handleShowButtonClick}>
              {passwordType === "password" ? "SHOW" : "HIDE"}
            </p>
          </TextInput>
          <p>FORGOT PASSWORD?</p>
          <Button type="submit" color="accent">
            Log In
          </Button>
        </form>
      </div>
    </div>
  );
};

export default Login;
