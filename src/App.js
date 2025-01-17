import './App.css';
import Navbar from './component/navbar';
import TextForm from './component/TextForm';
import About from './component/about';
import React, { useState } from 'react';
import Alert from './component/Alert';
import { Routes, Route, BrowserRouter } from "react-router-dom";

 
function App() {
  const [mode, setMode] = useState('light'); // Whether dark mode is enabled or not
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type)=>{
      setAlert({
        msg: message,
        type: type
      })
      setTimeout(() => {
          setAlert(null);
      }, 3000);
  }

  const toggleMode = ()=>{
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
      showAlert("Dark mode has been enabled", "success");
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled", "success");
    }
  }
  return (
    <>

                
      <BrowserRouter>
          <Navbar title="TextEdit" mode={mode} toggleMode={toggleMode} key={new Date()} />
                             <Alert alert={alert}/>
                            <div className="container my-3">
                              <Routes>

                                     <Route path="about" element={ <About mode={mode} /> }/>
                                     <Route path="/" element={ <TextForm showAlert={showAlert} heading="Try TextEdit - word counter, character counter, remove extra spaces" mode={mode}/> }/>
                               </Routes>
                             </div>
                            
      </BrowserRouter>
                       
                
    </> 
  );
}

export default App;