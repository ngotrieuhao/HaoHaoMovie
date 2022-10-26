import IconEyeClose from "components/icon/IconEyeClose";
import IconEyeOpen from "components/icon/IconEyeOpen";
import React, { Fragment, useState } from "react";
import Input from "./Input";
import { withErrorBoundary } from "react-error-boundary";
import { ErrorComponent } from "hooks/ErrorComponent";

const InputPasswordToggle = ({ control }) => {
  const [togglePassword, setTogglePassword] = useState(false);
  if (!control) return null;
  return (
    <Fragment>
      <Input
        type={togglePassword ? "text" : "password"}
        name="password"
        placeholder="Enter your password"
        control={control}
      >
        {!togglePassword ? (
          <IconEyeClose
            className="select-none"
            onClick={() => setTogglePassword(true)}
          ></IconEyeClose>
        ) : (
          <IconEyeOpen
            className="select-none"
            onClick={() => setTogglePassword(false)}
          ></IconEyeOpen>
        )}
      </Input>
    </Fragment>
  );
};

export default withErrorBoundary(InputPasswordToggle, {
  FallbackComponent: ErrorComponent,
});
