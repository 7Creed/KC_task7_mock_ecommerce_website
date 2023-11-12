import { useEffect, useState } from "react";
import AuthLayout from "../component/layout/AuthLayout";
import { Email, Password, User } from "../utils/AccountIcon";

const SignUp = () => {
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [conPassword, setConPassword] = useState("");

  useEffect(() => {
    setIsButtonDisabled(
      username.trim() === "" ||
        email.trim() === "" ||
        password.trim() === "" ||
        conPassword.trim()
    );
  }, [email, password]);

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleConPasswordChange = (e) => {
    setConPassword(e.target.value);
  };

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  // };
  return (
    <>
      <AuthLayout>
        <div className="flex justify-center item">
          <div className="w-full mx-auto md:w-5/6">
            <h2 className="text-3xl font-bold mb-5 text-center md:text-5xl">
              Create account
            </h2>
            <p className="lg:text-[22px] text-[16px] font-normal mb-7 lg:w-3/4">
              Welcome! Let's get you started...
            </p>
            <form action="">
              <div className="w-full">
                <div className="flex items-center gap-2 relative mb-4 border border-gray-300 rounded-3xl p-3">
                  <User />
                  <input
                    type="text"
                    id="username"
                    className="w-full"
                    placeholder="Username"
                    required
                    value={username}
                    onChange={handleUsernameChange}
                  />
                </div>
                <div className="flex items-center gap-2 relative mb-4 border border-gray-300 rounded-3xl p-3">
                  <Email />
                  <input
                    type="email"
                    id="email"
                    className="w-full"
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
                    className="w-full"
                    placeholder="Password"
                    required
                    value={password}
                    onChange={handlePasswordChange}
                  />
                </div>
                <div className="flex items-center gap-2 relative mb-4 border border-gray-300 rounded-3xl p-3">
                  <Password />
                  <input
                    type="password"
                    id="password"
                    className="w-full"
                    placeholder="Confirm Password"
                    required
                    value={conPassword}
                    onChange={handleConPasswordChange}
                  />
                </div>
                <div className="flex justify-center mt-6">
                  <button
                    className="border w-full font-medium text-white text-xl py-2 border-[#fff959] bg-amber-800 hover:bg-[] rounded-[20px] disabled:opacity-60"
                    disabled={isButtonDisabled}
                  >
                    Create account
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </AuthLayout>
    </>
  );
};

export default SignUp;
