import React from "react";

const Sign = () => {
  return (
    <div className="min-h-screen bg-[#f8f8f8] flex flex-col items-center justify-center px-4">
      <h1 className="text-4xl font-bold mb-10">Sign in to your account</h1>

      <div className="w-full max-w-xl bg-white border border-gray-200 rounded-lg shadow-sm p-10">

        {/* Email */}
        <div className="mb-6">
          <label className="block text-lg font-semibold mb-2">
            Email address
          </label>

          <input
            type="email"
            placeholder=""
            className="w-full h-14 px-4 border border-gray-300 rounded-md outline-none focus:ring-2 focus:ring-violet-600"
          />
        </div>

        {/* Password */}
        <div className="mb-6">
          <label className="block text-lg font-semibold mb-2">
            Password
          </label>

          <input
            type="password"
            placeholder=""
            className="w-full h-14 px-4 border border-gray-300 rounded-md outline-none focus:ring-2 focus:ring-violet-600"
          />
        </div>

        {/* Remember & Forgot */}
        <div className="flex justify-between items-center mb-6">
          <label className="flex items-center gap-3 cursor-pointer">
            <input
              type="checkbox"
              className="w-5 h-5 accent-violet-700"
            />
            <span className="text-lg">Remember me</span>
          </label>

          <a
            href="/forgot-password"
            className="text-violet-700 font-medium hover:underline"
          >
            Forgot password?
          </a>
        </div>

        {/* Sign In Button */}
        <button className="w-full h-14 bg-violet-700 hover:bg-violet-800 text-white text-xl font-semibold rounded-md transition duration-300">
          Sign in
        </button>

        {/* Divider */}
        <div className="flex items-center my-8">
          <div className="flex-1 border-t"></div>

          <span className="px-4 text-gray-500">
            Or continue with
          </span>

          <div className="flex-1 border-t"></div>
        </div>

        {/* Social Buttons */}
        <div className="grid grid-cols-2 gap-4">
          <button className="flex items-center justify-center gap-3 h-14 border rounded-md hover:bg-gray-50 transition">
            <img src="/google-icon.svg" alt="Google" size={28} />
            <span className="font-semibold text-lg">
              Google
            </span>
          </button>

          <button className="flex items-center justify-center gap-3 h-14 border rounded-md hover:bg-gray-50 transition">
            <img src="/github-icon.svg" alt="GitHub" size={26} />
            <span className="font-semibold text-lg">
              GitHub
            </span>
          </button>
        </div>
      </div>

      {/* Footer */}
      <p className="mt-10 text-lg">
        Not a member?{" "}
        <a
          href="/signup"
          className="text-violet-700 font-semibold hover:underline"
        >
          Start a 14 day free trial
        </a>
      </p>
    </div>
  );
};

export default Sign;