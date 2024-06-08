import { useState } from "react";
import "./App.css";

function App() {
  const [entrada, setEntrada] = useState("");

  function handleSearch(digitado) {
    setEntrada(digitado.target.value);
  }

  function register() {
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${entrada}&lang=pt_br&units=metric&appid=777fd6c175f16899b669ab9b22be7638`
    )
      .then((response) => {
        return response.json();
      })
      .then((dado) => {
        console.log(dado);
      })
      .catch(() => {
        alert("deu erro");
      });
  }

  return (
    <div className="App">
      <div className="container">
        <div className="form_area">
          <p className="title">Cadastre seu cachorro!</p>
          <form action="">
            <div className="form_group">
              <label className="sub_title">Nome do animal</label>
              <input
                placeholder="Ex: Rex"
                className="form_style"
                type="text"
                id="nome"
                onChange={handleSearch}
              />
            </div>
            <div className="form_group">
              <label className="sub_title">Raça</label>
              <input
                placeholder="Ex:  Vira-lata"
                className="form_style"
                type="text"
                id="raca"
              />
            </div>
            <div className="form_group">
              <label className="sub_title">Telefone para contato</label>
              <input
                placeholder="(00) - 00000000"
                className="form_style"
                type="text"
                id="telefone"
              />
            </div>
            <div>
              <button className="btn" onClick={register()}>
                Cadastrar
              </button>
              <p>
                Have an Account?{" "}
                <a className="link" href="">
                  Login Here!
                </a>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
