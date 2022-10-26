import React from "react";
import { withErrorBoundary } from "react-error-boundary";
import { ErrorComponent } from "hooks/ErrorComponent";

const LoadingSkeleTon = (props) => {
  return (
    <div
      className={`skeleton ${props.className}`}
      style={{
        height: props.height,
        width: props.width || "100%",
        borderRadius: props.radius,
      }}
    ></div>
  );
};

export default withErrorBoundary(LoadingSkeleTon, {
  FallbackComponent: ErrorComponent,
});
