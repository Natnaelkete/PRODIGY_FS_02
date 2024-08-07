import "./authPage.scss";
import { useState } from "react";
import Login from "../components/auth/Login";
import Signup from "../components/auth/Signup";

function AuthPage() {
  const [animation, setAnimation] = useState(false);

  return (
    <div className="wrapper">
      <div className="form-wrapper">
        <Login animation={animation} setAnimation={setAnimation} />
        <Signup animation={animation} setAnimation={setAnimation} />
        <div className={`img-container ${animation && "animate"}`}></div>
      </div>
    </div>
  );
}

export default AuthPage;
