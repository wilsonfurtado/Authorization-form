import React, { useState } from "react";
import Form from "./Form";
import Content from "./Content";

const Main = () => {
  const [isAuthorize, setIsAuthorize] = useState(false);

  const getAuthorization = (validation) => {
    validation ? setIsAuthorize(true) : setIsAuthorize(false);
  };

  return (
    <main>
      {!isAuthorize ? <Form authorize={getAuthorization} /> : <Content />}
    </main>
  );
};

export default Main;
