
import './App.css';
import TextForm from './components/TextForm';
import Navbar from './components/Navbar';
import React, {useState} from 'react'
import Alert from './components/Alert';
import About from './components/About';
/*import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
*/
function App() {

  
  //const [mode,setMode]=useState('light');
  const [bg,setBG]=useState('white');
  const [alert,setAlert]=useState(null);
  
  const setTheme=(color)=>{
    setBG(color);
    document.body.style.backgroundColor=color;
  }
  /*const toggleMode=()=>{
    if(mode==='dark'){
      setMode('light');
      document.body.style.backgroundColor='#F4F4F4';
      showAlert("Dark mode has been enabled","success");
    }
    else{
      setMode('dark');
      document.body.style.backgroundColor='#101d31';
      showAlert("Light mode has been enabled","success");
    }
  }*/
 
  const showAlert=(message,type)=>{
    setAlert({
      msg:message,
      type:type
    })
  setTimeout(() => {
    setAlert(null);
  }, 2000);
  }
  return (
      <>
    
      
   {/* <Router>
      
    
          <Routes>
      <Route path="/" element={
      
             }{/*
      </Route>
        <Route path="/About" element={<About bg={bg} />}>
        </Route>
      
    </Routes>
    </Router>
            */}
          <Navbar title="TextUtils" bg={bg} /*mode={mode}*/ setTheme={setTheme} showAlert={showAlert}/*toggle={toggleMode}*/ />
          <div className="container my-5">
          <Alert alert={alert} />
          <TextForm  showAlert={showAlert} heading="Enter text here" bg={bg} />
      
          </div>
      </>
    );
}

export default App;
