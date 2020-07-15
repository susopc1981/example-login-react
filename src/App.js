import React, { useState, useEffect } from "react";
import "./App.css";
import { InputSelect } from "./components/InputSelect";
import { InputText } from "./components/InputText";
import { InputGender } from "./components/InputGender";
import { SubmitButton } from "./components/SubmitButton";
import { checkTlf } from "./checkDataInput";
import { calculateDataSelect } from "./checkData";

function App() {
  const date = calculateDataSelect();
  const [errorMessage, setErrorMessage] = useState();
  const [name, setName] = useState("");
  const [errorName, setErrorName] = useState("asd");
  const [surname, setSurname] = useState("");
  const [errorSurname, setErrorSurname] = useState("asd");
  const [gender, setGender] = useState("male");
  const [year, setYear] = useState("");
  const [month, setMonth] = useState("");
  const [day, setDay] = useState("");
  const [finalDate, setFinalDate] = useState("");
  const [tlf, setTlf] = useState("");
  const [errorTlf, setErrorTlf] = useState("asd");
  const [mail, setMail] = useState("");
  useEffect(() => {
    console.log(year, month, day);
  }, [year, month, day]);

  useEffect(() => {
    name.length < 3
      ? setErrorName("El nombre debe tener mas de 2 digitos")
      : setErrorName("");
    surname.length < 3
      ? setErrorSurname("El apellido debe ser mayor de 2 digitos")
      : setErrorSurname("");
    const newTlf = checkTlf(tlf);
    !newTlf ? setErrorTlf("El telefono no es válido") : setErrorTlf("");
    console.log(gender);
  }, [name, tlf, mail, surname, gender]);

  function HandleOnChangeName(event) {
    setName(event.target.value);
  }

  function HandleOnChangeSurname(event) {
    setSurname(event.target.value);
  }
  function HandleOnChangeTlf(event) {
    setTlf(event.target.value);
  }
  function HandleOnChangeMail(event) {
    setMail(event.target.value);
  }
  function HandleOnChangeGender(event) {
    setGender(event.target.value);
  }
  function HandleOnChangeBirth(event) {}
  return (
    <div className="App">
      <form>
        <div>
          <label>Nombre</label>
          <InputText
            value={name}
            name="nombre"
            placeHolder="Escirbe el nombre"
            onChange={HandleOnChangeName}
          />
          {name.length > 0 && errorName.length > 3 ? <p>{errorName}</p> : <></>}
        </div>
        <div>
          <label>Apellidos</label>
          <InputText
            value={surname}
            name="apellidos"
            placeHolder="Escirbe los apellidos"
            onChange={HandleOnChangeSurname}
          />
          {surname.length > 0 && errorSurname.length > 3 ? (
            <p>{errorSurname}</p>
          ) : (
            <></>
          )}
        </div>
        <div>
          <label>Fecha de nacimiento</label>
          <InputSelect
            data={date.days}
            onChange={HandleOnChangeBirth}
            value={day}
          />
          <InputSelect
            data={date.monthName}
            onChange={HandleOnChangeBirth}
            value={month}
          />
          <InputSelect
            data={date.years}
            onChange={HandleOnChangeBirth}
            value={year}
          />
        </div>
        <div>
          <label>Sexo</label>
          <InputGender
            name="gender"
            value="male"
            text="Hombre"
            option={gender}
            onChange={HandleOnChangeGender}
          />
          <br></br>
          <InputGender
            name="gender"
            value="female"
            text="Mujer"
            option={gender}
            onChange={HandleOnChangeGender}
          />
        </div>
        <div>
          <label>E-Mail</label>
          <InputText
            value={mail}
            name="mail"
            placeHolder="email@example.es"
            onChange={HandleOnChangeMail}
          />
        </div>
        <div>
          <label>Teléfono</label>
          <InputText
            value={tlf}
            name="tlf"
            placeHolder="Introduce tu teléfono"
            onChange={HandleOnChangeTlf}
          />
          {errorTlf !== "" && tlf.length > 0 ? <p>{errorTlf}</p> : <></>}
        </div>
        <SubmitButton />
      </form>
    </div>
  );
}

export default App;
