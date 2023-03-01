// import logo from './logo.svg';
import './App.css';
import Card from './components/Card';
import studentApi from "./components/class";
import { useState } from 'react';
function App() {

  const[apis,setapis]=useState(studentApi)
  return (
 
   <Card apis={apis}>


   </Card>
  
  );
}

export default App;
