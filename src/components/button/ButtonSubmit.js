// import { LoadingSpinner } from "components/loading";
import React from "react";
import styled, { css } from "styled-components";
import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";
import LoadingSpinner from "components/loading/LoadingSpinner";
import { withErrorBoundary } from "react-error-boundary";
import { ErrorComponent } from "hooks/ErrorComponent";

const ButtonStyles = styled.button`
  cursor: pointer;
  padding: 0 25px;
  line-height: 1;
  font-weight: 600;
  font-size: 16px;
  height: ${(props) => props.height || "66px"};
  display: flex;
  justify-content: center;
  align-items: center;

  ${(props) =>
    props.kind === "secondary" &&
    css`
      color: #9cabb6;
      background-color: white;
    `};
  ${(props) =>
    props.kind === "primary" &&
    css`
      color: white;
      background-color: #dd003f;
    `};
  ${(props) =>
    props.kind === "ghost" &&
    css`
      color: #9cabb6;
      background-color: rgba(29, 192, 113, 0.1);
    `};
  &:disabled {
    opacity: 0.5;
    pointer-events: none;
  }
  &:hover {
    background-color: #0f172a;
    color: white;
    border: 1px solid white;
  }
`;
/**
 * @param {*} onClick Handler onClick
 * @requires
 * @param {string} type Type of button 'button' | 'submit'
 */
const ButtonSubmit = ({
  type = "button",
  onClick = () => {},
  children,
  kind = "primary",
  ...props
}) => {
  const { isLoading, to } = props;
  const child = !!isLoading ? <LoadingSpinner></LoadingSpinner> : children;
  if (to !== "" && typeof to === "string") {
    return (
      <NavLink className="inline-block">
        <ButtonStyles type={type} kind={kind} {...props}>
          {child}
        </ButtonStyles>
      </NavLink>
    );
  }
  return (
    <ButtonStyles type={type} kind={kind} onClick={onClick} {...props}>
      {child}
    </ButtonStyles>
  );
};

ButtonSubmit.propTypes = {
  type: PropTypes.oneOf(["button", "submit"]),
  isLoading: PropTypes.bool,
  onClick: PropTypes.func,
  children: PropTypes.node,
  kind: PropTypes.oneOf(["primary", "secondary", "ghost"]),
};

export default withErrorBoundary(ButtonSubmit, {
  FallbackComponent: ErrorComponent,
});
