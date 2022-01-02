import React, { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "./Firebase/firebase";

import "./css/Form.css";

const Form = ({ authorize }) => {
  const passwordStocked = "azerty";

  const [registerEmail, setRegisterEmail] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");

  const givePermission = (e) => {
    e.preventDefault();
    if (passwordStocked === registerPassword) {
      authorize(true);
      register();
    } else {
      authorize(false);
      alert("Le mot de passe n'est pas valide !");
    }
  };

  const register = async () => {
    try {
      const user = await createUserWithEmailAndPassword(
        auth,
        registerEmail,
        registerPassword
      );
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <div className="form-style">
      <form onSubmit={givePermission}>
        <input
          type="email"
          id="email"
          placeholder="Email"
          required
          autoComplete="off"
          onChange={(event) => {
            setRegisterEmail(event.target.value);
          }}
        />

        <input
          type="password"
          id="password"
          name="password"
          placeholder="Mot de passe"
          onChange={(event) => {
            setRegisterPassword(event.target.value);
          }}
        />

        <input type="submit" value="Envoyer" />
      </form>
    </div>
  );
};

export default Form;
