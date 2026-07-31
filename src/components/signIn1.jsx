export const SignIn1 = () => {
  return (
    <section className="flex min-h-screen items-center justify-center bg-[#101828] p-6">
      <form className="flex w-full max-w-md flex-col gap-10 rounded-3xl bg-white/5 p-8 shadow-2xl shadow-black/20 backdrop-blur-xl">
        <img src="./public/mark.svg" alt="mark.svg" className="h-12 self-center" />
        <h1 className="text-center text-2xl font-bold text-white">Sign in to your account</h1>

        <div className="flex flex-col gap-6 w-full">
          <div className="flex flex-col gap-1 w-full">
            <label htmlFor="email" className="text-xs text-gray-200">Email address</label>
            <input
              id="email"
              type="email"
              name="email"
              className="h-10 w-full rounded-sm border border-white/10 bg-white/5 px-3 text-white outline-none focus:border-indigo-500 focus:bg-white/10"
            />
          </div>

          <div className="flex flex-col gap-1 w-full">
            <div className="flex items-center justify-between">
              <label htmlFor="password" className="text-xs text-gray-200">Password</label>
              <a href="#" className="text-xs text-indigo-500">Forgot password?</a>
            </div>
            <input
              id="password"
              type="password"
              name="password"
              className="h-10 w-full rounded-sm border border-white/10 bg-white/5 px-3 text-white outline-none focus:border-indigo-500 focus:bg-white/10"
            />
          </div>
        </div>

        <input
          type="submit"
          value="Sign in"
          className="h-10 w-full rounded-md bg-indigo-500 text-sm font-semibold text-white transition hover:bg-indigo-600 cursor-pointer"
        />

        <span className="text-center text-xs text-gray-400">
          Not a member? <a href="#" className="text-indigo-500">Start 14-day free trial</a>
        </span>
      </form>
    </section>
  )
}

export default function Signinpage() {
  return (
    <div className="min-h-screen bg-[#080b13]">
      <SignIn1 />
    </div>
  )
}
