import Head from "next/head";
import { useState } from "react";
import { setUser, useAppDispatch } from "../../redux/user";
import toggleToast from "../Components/toggleToast";

const Login = () => {
  const dispatch = useAppDispatch();
  const [loading, setLoading] = useState<boolean>(false);
  const [values, setValues] = useState({
    username: "",
    password: "",
  });

  const clickedLogin = async () => {
    setLoading(true);
    setTimeout(async () => {
      const hostname = window.location.hostname;
      const url = `http://${hostname}:3000/api/admin/login`;
      const res = await fetch(url, {
        method: "post",
        body: JSON.stringify(values),
      });
      const text = await res.text();
      const data = JSON.parse(text);

      if (data.username) {
        dispatch(setUser(data));
        setTimeout(() => {
          toggleToast(true, "Welcome, " + data.username);
        }, 1000);
      } else {
        setValues({
          username: values.username,
          password: "",
        });
        setTimeout(() => {
          toggleToast(false, "Something went wrong");
        }, 1000);
      }
      setLoading(false);
    }, 1000);
  };

  const handleInputChange = (target: any, value: string) => {
    return setValues({
      ...values,
      [target]: value,
    });
  };

  return (
    <div className="admin-login-container">
      <Head>
        <title>Admin Login</title>
      </Head>
      <div className="admin-login-window">
        <input
          className="admin-login-input"
          placeholder="Username"
          value={values.username}
          onChange={(e) => handleInputChange("username", e.target.value)}
        />
        <input
          className="admin-login-input"
          placeholder="Password"
          type="password"
          value={values.password}
          onChange={(e) => handleInputChange("password", e.target.value)}
        />
        <div
          className={
            loading ? `admin-login-button active` : `admin-login-button`
          }
          onClick={() => clickedLogin()}
        >
          Login
        </div>
      </div>
    </div>
  );
};

export default Login;
