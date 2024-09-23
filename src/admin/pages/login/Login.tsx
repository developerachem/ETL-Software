import { useState } from "react";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useLoginMutation } from "../../../features/auth/auth";
import { loginState } from "../../../features/auth/auth-slice";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // * Hooke
  const [login, { isLoading }] = useLoginMutation();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // * Handle Login
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!email || !password) {
      toast.dismiss();
      toast.error("All Fields are required");
      return;
    }

    login({
      email,
      password,
    })
      .unwrap()
      .then((res) => {
        console.log(res);
        toast.dismiss();
        toast.success(res.message);
        dispatch(
          loginState({
            user: res.user,
            token: res.token,
          })
        );
        navigate("/admin");
      })
      .catch((err) => {
        toast.dismiss();
        toast.error(err.data.message);
        console.error(err);
      });
  };

  return (
    <div className="flex h-screen justify-center items-center bg-color300">
      <div className="w-[400px]">
        <div className="bg-white p-10 shadow-xl rounded">
          <img src="/logo.png" className="w-[120px] m-auto mb-5" alt="" />
          <h1 className="border-b mb-5 font-[font-500] text-[19px]">Login</h1>
          <form onSubmit={handleSubmit}>
            <input
              type="email"
              className="input border bg-slate-200 w-full mb-5 rounded focus:outline-none focus:border-none"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <input
              type="password"
              className="input border bg-slate-200 w-full mb-5 rounded focus:outline-none focus:border-none"
              placeholder="Enter Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

            <button className="py-3 rounded text-[#fff] font-[font-500] bg-primaryColor w-full">
              {isLoading ? "Loading..." : "Login"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
