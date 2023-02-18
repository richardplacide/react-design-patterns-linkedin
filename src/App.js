import SplitScreen from "./SplitScreen";

const LeftHandComponent = () => {
  return (
    <h1 style={{backgroundColor:'azure'}}>LeftHandComponent</h1>
  )
}

const RightHandComponent = () => {
  return (
    <p style={{backgroundColor:'lime'}}>RightHandComponent</p>
  )
}


function App() {
  return (
    <SplitScreen 
    left={LeftHandComponent}
    right={RightHandComponent}
    />    
  );
}

export default App;
