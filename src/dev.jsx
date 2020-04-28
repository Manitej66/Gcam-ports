import React, { useState, useEffect } from "react";
import { Button } from "react-bootstrap";

const Dev = () => {
  return (
    <div className="container">
      <h1
        style={{
          fontFamily: "Gilroy",
          fontWeight: "bold",
          fontSize: 30,
          display: "flex",
          flexDirection: "row",
          marginTop: 30,
          justifyContent: "center",
        }}
      >
        Have a project?
      </h1>
      <br />
      <h1
        style={{
          fontFamily: "Gilroy",
          fontWeight: "bold",
          fontSize: 30,
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
        }}
      >
        Reach out to us
      </h1>
      <Button className="ic2" href="https://t.me/manitej66">
        <i class="fas fa-paper-plane m-1"></i>
        Telegram
      </Button>
    </div>
  );
};

export default Dev;
