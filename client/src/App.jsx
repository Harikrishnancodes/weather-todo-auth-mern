import { Route, Routes, Navigate } from "react-router-dom";

import Login from './component/Login/Index'
import Signup from './component/Signup/Index'
import Todo from "./component/Todo/Todo";
import Weather from "./component/weather/Weather";

function App() {
  

  return (
    <Routes>
    <Route path='/' element={<Login/>}/>
   <Route path='/signup' element={<Signup/>}/>
   <Route path='todo' element={<Todo />} />
   <Route path='weather' element={<Weather />} />
</Routes>
  )
}

export default App
