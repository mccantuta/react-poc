import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

function Header(props) {
  return <h1>Sistema de notas, {props.name}</h1>;
}

function Descripcion(props) {
  return <p>Esto es la descripcion del sistema</p>;
}

class Boton extends React.Component {
  render() {
    return <button onClick={this.lanzarEvento}>Evento</button>
  }

  lanzarEvento() {
    alert('Lanzando evento');
  }
}

class Hola extends React.Component {
  render() {
    return <h3>Hola</h3>
  }
}

class Chao extends React.Component {
  render() {
    return <h3>Chao</h3>
  }
}

function MensajePersonal(props) {
  if (props.flag) {
    return <Hola />
  }
  return <Chao />
}

function App() {
  return (
    <div>
      <Header name="2019" />
      <Descripcion />
      <Boton />
      <MensajePersonal flag={false} />
    </div>
  );
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
