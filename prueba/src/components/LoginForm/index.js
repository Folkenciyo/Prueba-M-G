import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./styles.css";

export const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleChangeEmail = (event) => {
    setEmail(event.target.value);
  };
  const handleChangePassword = (event) => {
    setPassword(event.target.value);
  };

  return (
    <>
      <div className="LoginBox">
        <h3>Iniciar Sesión</h3>
        <form>
          <div className="Form">
            <div>
              <div className="InputBox">
                <p>Dirección de correo electrónico</p>
                <input
                  type="text"
                  value={email}
                  placeholder="example@example.com"
                  onChange={handleChangeEmail}
                />
              </div>
              <div className="InputBox">
                <p>Contraseña</p>
                <input
                  type="pasword"
                  value={password}
                  placeholder="########"
                  onChange={handleChangePassword}
                />
              </div>
            </div>
          </div>
          <Link to="/FileLoader">
            <button>Enviar</button>
          </Link>
        </form>
      </div>
    </>
  );
};
