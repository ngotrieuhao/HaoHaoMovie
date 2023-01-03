import React from "react";
import { Link, useNavigate } from "react-router-dom";
import Zoom from "react-reveal/Zoom";
import { useForm } from "react-hook-form";
import Input from "components/input/Input";
import Label from "components/label/Label";
import Field from "components/field/Field";
import InputPasswordToggle from "components/input/InputPasswordToggle";
import ButtonSubmit from "components/button/ButtonSubmit";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useEffect } from "react";
import { toast } from "react-toastify";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth, db } from "firebase-app/firebase-config";
import { addDoc, collection } from "firebase/firestore";

const schema = yup.object({
  fullname: yup.string().required("Please enter your fullname"),
  email: yup
    .string()
    .email("Please enter valid email address")
    .required("Please enter your email address"),
  password: yup
    .string()
    .min(8, "Your password must be at least 8 characters")
    .required("Please enter your password"),
});

const SignUpPage = () => {
  const navigate = useNavigate();
  const {
    control,
    handleSubmit,
    formState: { errors, isValid, isSubmitting },
    watch,
    reset,
  } = useForm({ mode: "onChange", resolver: yupResolver(schema) });

  const handleSignUp = async (values) => {
    if (!isValid) return;
    const user = await createUserWithEmailAndPassword(
      auth,
      values.email,
      values.password
    );

    // await updateProfile(auth.currentUser, {
    //   displayName: values.fullname,
    // });
    const colRef = collection(db, "users");
    await addDoc(colRef, {
      fullname: values.fullname,
      email: values.email,
      password: values.password,
    });
    toast.success("Register successfully");
    navigate("/login");
  };

  useEffect(() => {
    const arrErrors = Object.values(errors);
    if (arrErrors.length > 0) {
      toast.error(arrErrors[0]?.message, {
        pauseOnHover: false,
        delay: 0,
      });
    }
  }, [errors]);
  useEffect(() => {
    document.title = "Register Page";
  }, []);
  return (
    <>
      <div className=" py-28">
        <Zoom>
          <div className="wrapp-form__register">
            <h1 className="form__register--title">Register</h1>
            <form className="mt-10" onSubmit={handleSubmit(handleSignUp)}>
              <Field>
                <Label htmlFor="fullname">Fullname</Label>
                <Input
                  name="fullname"
                  control={control}
                  placeholder="Enter your fullname"
                ></Input>
              </Field>
              <Field>
                <Label htmlFor="email">Email Address</Label>
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

              <div className="register__button">
                <ButtonSubmit
                  type="submit"
                  isLoading={isSubmitting}
                  disabled={isSubmitting}
                  className="w-full max-w-[200px] mx-auto rounded-xl"
                >
                  Register
                </ButtonSubmit>
              </div>
            </form>

            <div className="no__register">
              <span>Have Account?</span>
              <Link to="/login" className="link--register">
                {" "}
                Login
              </Link>
            </div>
          </div>
        </Zoom>
      </div>
    </>
  );
};

export default SignUpPage;
