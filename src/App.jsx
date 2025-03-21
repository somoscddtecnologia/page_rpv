import { BrowserRouter, Routes, Route } from "react-router";

import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./Pages/Home";
import QuemSomos from "./Pages/QuemSomos";
import SobreNos from "./Pages/SobreNos";
import Alunos from "./Pages/Alunos";

function App() {
  return (
    <BrowserRouter>
      <div className="app-container">
        <Header />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/quemsomos" element={<QuemSomos />}></Route>
          <Route path="/sobrenos" element={<SobreNos />}></Route>
          <Route path="/alunos" element={<Alunos />}></Route>
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export { App };
