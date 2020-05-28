import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

function Header(props) {
  return <h1>Sistema de notas, {props.name}</h1>;
}

function Descripcion(props) {
  return <p>Esto es la descripcion del sistema</p>;
}

function App() {
  return (
    <div>
      <Header name="2019" />
      <Descripcion />
    </div>
  );
}

const element = <Header name="Test" />;
ReactDOM.render(
  <App />,
  document.getElementById('root')
);
