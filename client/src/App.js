import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom"

import Home from './page/Home/Home';
import Details from './page/Details/Details';
import Landing from './page/Landing/Landing';
import Create from './page/Create/Create';
import Navbar from './component/Navbar/Navbar';


function App() {

  return (
    <div className="App">


      <BrowserRouter> {/* <BrowserRouter ES EL COMPONENTE PADRE DE TODAS  LAS RUTAS > {} */}
        <Navbar />
        <Routes>  {/* <Routes GENERA UN ARBOL DE COMPONENTES, VENDRIA SIENDO EL PADRE DE Route, a partir de su props.children */}

          <Route exact path={"/"} element={<Landing />} />
          <Route path={'/Home'} element={<Home />} /> {/* <Route    Dentro de nuestro Router podemos generar todas las rutas que queramos*/}
          <Route path={'/Details'} element={<Details />} />
          <Route  path="/Details/:id" element={<Details/>}/>

          <Route path={"/Create"} element={<Create />} />
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;