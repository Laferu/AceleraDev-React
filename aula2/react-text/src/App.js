import React from 'react';

import './App.css';

function Title(){
  return(
    <h1><Text text="Meu título mudado" /></h1>
  )
}

function Content(){
  return(
  <div>
    <Text text="Meu Texto" />
  </div>
  )
}

function Text(props){
  return(
    <span className="text">
      {props.text}
    </span>
  )
}

function App() {
  return (
    <div>
      <Title />
      <Content />
    </div>
  );
}

export default App;
