import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import { useState } from 'react';
import Alert from './components/Alert';


function App() {
  const [mode, setmode] = useState('light');
  const [alert, setAlert] = useState(null);
  const showAlert = (message,type)=>{
    setAlert({
      msg : message,
      type : type
    })
    setTimeout(() => {
      setAlert('')
    }, 2000);
  }
  let toggleMode=()=>{
    if(mode==='light'){
      setmode('dark');
      document.body.style.backgroundColor='black';
      showAlert("Dark Mode has been enabled","success")
    }
    else{
      setmode('light');
      document.body.style.backgroundColor='white';
      showAlert("Light Mode has been enabled","success")
    }
  }
  return (
    <>

      <Navbar title = 'TextManipulator' mode = {mode} toggleMode={toggleMode}/>
      <Alert alert={alert}/>
      <div className="container my-3">
        
        <TextForm showAlert = {showAlert} heading = 'Enter text to analyze below' mode = {mode}/>
      </div>

    </>
  );
}

export default App;
