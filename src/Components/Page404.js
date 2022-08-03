import React from "react";
import LinkButton from "./LinkButton";

const Page404 = () => {
  return (
    <div>
      <span className="span-error-message">
        Error 404. The page you are looking for does not exist.
      </span>
      <LinkButton
        message={"Visit our Home page instead."}
        link={"/"}
        buttonText={"Home"}
      ></LinkButton>
    </div>
  );
};

export default Page404;
