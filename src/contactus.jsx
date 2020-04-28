import React, { useState, useEffect } from "react";
import { Button } from "react-bootstrap";

const About = () => {
  const [s, setS] = useState(0);
  return (
    <div className="container">
      <h1 style={{ fontFamily: "Gilroy", fontWeight: "bold", fontSize: 30 }}>
        Hey! If you haven't found your device in the list, <br /> Don't worry!
        Reach out to us and we'll resolve your issue :)
      </h1>

      <Button className="ic2" href="https://t.me/manitej66">
        <i class="fas fa-paper-plane m-1"></i>
        Telegram
      </Button>
    </div>
  );
};

export default About;
