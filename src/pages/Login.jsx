import { Link } from "react-router-dom";
import AuthLayout from "../component/layout/AuthLayout";
import { Email, Password, User, GoogleIcon } from "../utils/AccountIcon";
import { useEffect, useState } from "react";

const Login = () => {
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    // console.log(email.trim() === "", password.trim() === "")
    // console.log(!(email.trim()) !== "" && !password.trim() !== "")
    setIsButtonDisabled(email.trim() === "" || password.trim() === "");
  }, [email, password]);

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  // };

  return (
    <>
      <AuthLayout>
        <div className="flex justify-center item">
          <div className="mx-auto md:w-5/6">
            <h2 className="text-3xl font-bold mb-5 md:text-5xl text-center">
              Welcome Back!{" "}
            </h2>
            <form action="">
              <div className="w-full">
                <div className="flex items-center gap-2 relative mb-4 border border-gray-300 rounded-3xl p-3">
                  <Email />
                  <input
                    type="email"
                    id="email"
                    className="w-full outline-none"
                    placeholder="Email Address"
                    required
                    value={email}
                    onChange={handleEmailChange}
                  />
                </div>
                <div className="flex items-center gap-2 relative mb-4 border border-gray-300 rounded-3xl p-3">
                  <Password />
                  <input
                    type="password"
                    id="password"
                    className="w-full outline-none"
                    placeholder="Password"
                    required
                    value={password}
                    onChange={handlePasswordChange}
                  />
                </div>
                <div className="flex justify-center mt-6">
                  <button
                    className="border w-full font-medium text-white text-xl py-2 border-[#fff959] bg-amber-800 hover:bg-[] rounded-[20px] disabled:opacity-60"
                    disabled={isButtonDisabled}
                  >
                    Sign In
                  </button>
                </div>
                <p className="text-center mt-3">
                  <Link to="">Forgot Password?</Link>
                </p>
                <div className="flex justify-between items-center gap-5 md:gap-10 w-3/4 mx-auto my-10 md:my-14">
                  <div className="w-3/4 md:w-1/2 border-t-[0.5px] border-[#808080] "></div>
                  <p className="">or</p>
                  <div className="w-3/4 md:w-1/2 border-t-[0.5px] border-[#808080] "></div>
                </div>
                <button
                  type="submit"
                  className="border border-[#555555] focus:outline-none font-medium rounded-lg text-sm w-full px-5 py-[15px] text-center flex justify-center items-center"
                >
                  <div className="flex items-center gap-3">
                    <GoogleIcon />
                    <p className="">Sign in with Google</p>
                  </div>
                </button>
              </div>
            </form>
          </div>
        </div>
      </AuthLayout>
    </>
  );
};

export default Login;
