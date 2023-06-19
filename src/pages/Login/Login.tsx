import Logo from "../../assets/logo.svg";
import SignInImg from "../../assets/signinImage.svg";
import TextInput from "../../components/ui/TextInput/TextInput";
import "./Login.scss";
import { SyntheticEvent, useState } from "react";

const Login = () => {
  const [userCredentials, setUserCredentials] = useState({});
  const [passwordType, setPasswordType] = useState("password");
  const handleInputChange = (e: SyntheticEvent) => {
    const { name, value } = e.target as HTMLInputElement;
    setUserCredentials((prev) => ({ ...prev, [name]: value }));
  };
  const handleShowButtonClick = () => {
    setPasswordType((prev) => (prev === "password" ? "text" : "password"));
  };
  const handleSubmit = (e: SyntheticEvent) => {
    e.preventDefault();
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
          <button>Log In</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
