import RegisterForm from "./registerForm"


const LoginPage = () => {
  
  return (
    <section className="fix-height container m-auto px-7 flex items-center justify-center h-screen">
      <div className="m-auto bg-slate-800 rounded-lg p-5 w-full md:w-2/3">
        <h1 className="text-3xl font-bold text-white mb-5">Log In</h1>
        <RegisterForm/>
      </div>
    </section>
  )
}

export default LoginPage