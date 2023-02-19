import React from 'react';
import SplitScreen from './SplitScreen';

const LeftHandComponent = ({name}) => {
  return (
    <div style={{backgroundColor:'azure'}}>
      <h1>LeftHandComponent</h1>
      <h2>Hello there {name}</h2>
    </div>
  )
}

const RightHandComponent = ({message}) => {
  return (
    <p style={{backgroundColor:'lime'}}>RightHandComponent with message: {message}</p>
  )
}


function App() {
  return (
    <SplitScreen leftWeight={2}>
      <LeftHandComponent name="Richard" />
      <RightHandComponent message="Reach the sky" />
    </SplitScreen>
  );
}

export default App;
