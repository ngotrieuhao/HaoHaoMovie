import React from "react";
import styled from "styled-components";
import { withErrorBoundary } from "react-error-boundary";
import { ErrorComponent } from "hooks/ErrorComponent";

const LabelStyles = styled.label`
  color: ${(props) => props.theme.titleColor};
  font-weight: 500;
  font-size: 18px;
  cursor: pointer;
`;

const Label = ({ htmlFor = "", children, ...props }) => {
  return (
    <LabelStyles htmlFor={htmlFor} {...props}>
      {children}
    </LabelStyles>
  );
};

export default withErrorBoundary(Label, { FallbackComponent: ErrorComponent });
