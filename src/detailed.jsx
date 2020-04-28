import React, { useState, useEffect } from "react";
import axios from "axios";
import Box from "./box";

const Show = (props) => {
  const [i, setT] = useState(0);
  const [brands, setBrands] = useState([]);
  const colors = [
    "linear-gradient(to right, #ff8177 0%, #ff867a 0%, #ff8c7f 21%, #f99185 52%, #cf556c 78%, #b12a5b 100%)",
    "linear-gradient(to right, #f6d365 0%, #fda085 100%)",
    "linear-gradient(to right, #f093fb 0%, #f5576c 100%)",
    "linear-gradient(to right, #5ee7df 0%, #b490ca 100%)",
    "linear-gradient(to right, #667eea 0%, #764ba2 100%)",
  ];

  useEffect(() => {
    fetchData();
  }, []);

  function getColor(c) {
    var n = parseInt(c);
    if (n > 4) return n % 5;
    else return n;
  }

  const fetchData = async () => {
    axios.get(`http://localhost:8000/api/${props.brand}`).then((res) => {
      const jso = res.data;
      console.log(jso);
      setBrands(jso);
    });
  };

  return (
    <div className="container">
      <div>
        {brands.map((pe, i) => (
          <Box
            key={pe.id}
            name={pe.name}
            color={colors[getColor(pe.id)]}
            link={pe.link}
            version={pe.version}
            config={pe.config}
          />
        ))}
      </div>
    </div>
  );
};

export default Show;
