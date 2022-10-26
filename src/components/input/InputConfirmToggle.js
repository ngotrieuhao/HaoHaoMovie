import IconEyeClose from "components/icon/IconEyeClose";
import IconEyeOpen from "components/icon/IconEyeOpen";
import React, { Fragment, useState } from "react";
import Input from "./Input";

const InputConfirmToggle = ({ control }) => {
  const [togglePassword, setTogglePassword] = useState(false);
  if (!control) return null;
  return (
    <Fragment>
      <Input
        type={togglePassword ? "text" : "password"}
        name="passwordre"
        placeholder="Enter your confirm password"
        control={control}
      >
        {!togglePassword ? (
          <IconEyeClose onClick={() => setTogglePassword(true)}></IconEyeClose>
        ) : (
          <IconEyeOpen onClick={() => setTogglePassword(false)}></IconEyeOpen>
        )}
      </Input>
    </Fragment>
  );
};

export default InputConfirmToggle;
