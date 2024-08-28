import React from "react";
import style from "./LoginForm.module.css";
import Label from "../../01 uikit/Label/Label";
import { useForm } from "react-hook-form";
import LoginService from "../../../services/LoginService";

const LoginForm = () => {

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  // const navigate = useNavigate();

  const onSubmit = (data) => {
    const user = data;
    LoginService.authUser(user);
    // navigate("/dashboard");
    console.log(user);
  };

  return (
    <div className={style.container}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className={style.input_container}>
          <Label label="Usuario" />
          <input className={style.input} type="text" {...register('username')} />
        </div>
        <div className={style.input_container}>
          <Label label="Contraseña" />
          <input className={style.input} type="password" {...register('password')} />
        </div>
        <div className={style.input_container}>
          <input className={style.button} type="submit" />
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
