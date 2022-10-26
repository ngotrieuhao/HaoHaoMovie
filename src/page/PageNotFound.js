import Button from "components/button/Button";
import React from "react";
import { NavLink } from "react-router-dom";

const PageNotFound = () => {
  return (
    <section className="pt-24 pb-16">
      <div className="flex flex-col items-center justify-center">
        <img src="/404.png" alt="404 Not Found" />
        <h1 className="py-6 text-5xl">Page Not Found</h1>
        <Button bgColor="secondary" className="mt-8 rounded-3xl">
          <NavLink to="/">Back to Home</NavLink>
        </Button>
      </div>
    </section>
  );
};

export default PageNotFound;
