import AuthLayout from "../component/layout/AuthLayout";
import { Email, Password, User } from "../utils/AccountIcon";


const SignUp = () => {
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
                  />
                </div>
                <div className="flex items-center gap-2 relative mb-4 border border-gray-300 rounded-3xl p-3">
                  <Email />
                  <input
                    type="email"
                    id="email"
                    className="w-full"
                    placeholder="Email Address"
                  />
                </div>
                <div className="flex items-center gap-2 relative mb-4 border border-gray-300 rounded-3xl p-3">
                  <Password />
                  <input
                    type="password"
                    id="password"
                    className="w-full"
                    placeholder="Password"
                  />
                </div>
                <div className="flex items-center gap-2 relative mb-4 border border-gray-300 rounded-3xl p-3">
                  <Password />
                  <input
                    type="password"
                    id="password"
                    className="w-full"
                    placeholder="Confirm Password"
                  />
                </div>
                <div className="flex justify-center mt-6">
                  <button className="border w-full font-medium text-white text-xl py-2 border-[#fff959] bg-amber-800 hover:bg-[] rounded-[20px]">
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
