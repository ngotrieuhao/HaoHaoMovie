import Button from "components/button/Button";
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import Zoom from "react-reveal/Zoom";
import Field from "components/field/Field";
import Label from "components/label/Label";
import Input from "components/input/Input";
import { useForm } from "react-hook-form";
import { useAuth } from "contexts/auth-context";
import { useEffect } from "react";
import ButtonSubmit from "components/button/ButtonSubmit";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { toast } from "react-toastify";
import InputPasswordToggle from "components/input/InputPasswordToggle";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "firebase-app/firebase-config";

const schema = yup.object({
  email: yup
    .string()
    .email("Please enter valid email address")
    .required("Please enter your email address"),
  password: yup
    .string()
    .min(8, "Your password must be at least 8 characters")
    .required("Please enter your password"),
});

const LoginPage = () => {
  const { userInfo } = useAuth();
  const navigate = useNavigate();
  useEffect(() => {
    document.title = "Login Page";
    if (userInfo?.email) navigate("/");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [userInfo]);
  const {
    control,
    handleSubmit,
    formState: { errors, isValid, isSubmitting },
  } = useForm({
    mode: "onChange",
    resolver: yupResolver(schema),
  });

  useEffect(() => {
    const arrErrors = Object.values(errors);
    if (arrErrors.length > 0) {
      toast.error(arrErrors[0]?.message, {
        pauseOnHover: false,
        delay: 0,
      });
    }
  }, [errors]);
  const handleSignIn = async (values) => {
    if (!isValid) return;
    await signInWithEmailAndPassword(auth, values.email, values.password);
    navigate("/");
  };

  return (
    <>
      <div className="py-28">
        <Zoom>
          <div className="wrapp-form__login">
            <h1 className="form__login--title">Login</h1>
            <form
              className="mt-10"
              action=""
              onSubmit={handleSubmit(handleSignIn)}
            >
              <Field>
                <Label htmlFor="fullname">Email address</Label>
                <Input
                  name="email"
                  control={control}
                  placeholder="Enter your email address"
                ></Input>
              </Field>

              <Field>
                <Label htmlFor="password">Password</Label>
                <InputPasswordToggle control={control}></InputPasswordToggle>
              </Field>
              <div className="text-center login__button">
                <ButtonSubmit
                  type="submit"
                  isLoading={isSubmitting}
                  disabled={isSubmitting}
                  className="w-full max-w-[200px] mx-auto rounded-xl"
                >
                  Login
                </ButtonSubmit>
              </div>
            </form>
            <div className="form__login--forget">
              {/* <a href="#" className="link--forget">
              Forget Password?
            </a> */}
            </div>
            {/* <div className="text--continute">or Continute with</div>
          <div className="another__login">
            <div className="another__login--facebook">
              <img
                src="./images/facebook-icon.png"
                alt=""
                className="another__login--icon1"
              />
            </div>
            <div className="another__login--google">
              <img
                src="./images/google-icon.png"
                alt=""
                className="another__login--icon2"
              />
            </div>
          </div> */}
            <div className="no__login">
              <span> Don't have Account?</span>

              <Link to="/sign-up" className="link--register">
                {" "}
                Register
              </Link>
            </div>
          </div>
        </Zoom>
      </div>
    </>
  );
};

export default LoginPage;
