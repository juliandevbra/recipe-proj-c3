import React from "react";
import { useState } from "react";
import Card from "./Card";

const Form = () => {
  const [user, setUser] = useState({
    nombre: "",
    color: "",
  });
  const [show, setShow] = useState(false);
  const [error, setError] = useState(false);

  const handleChange = (e) => {
    console.log(e.target.name, e.target.value);
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      user.nombre.length > 3 &&
      !user.nombre.startsWith(" ") &&
      user.color.length > 5
    ) {
      setShow(true);
      setError(false);
    } else {
      setShow(false);
      setError(true);
    }
  };

  return (
    <div>
      {!show && (
        <form onSubmit={handleSubmit}>
          <label>Nombre:</label>
          <input
            name="nombre"
            type="text"
            value={user.nombre}
            onChange={handleChange}
          />
          <label>Color:</label>
          <input
            name="color"
            type="text"
            value={user.color}
            onChange={handleChange}
          />
          <button>Enviar</button>
        </form>
      )}

      {show && <Card user={user} />}
      {error && <h3 className="error">Por favor, verifique su información</h3>}
    </div>
  );
};

export default Form;
