import "./Header.css";

import {Link} from 'react-router-dom';
 
function Header()  {
return (

  <div className="container-header">
    <Link to="/">Técnico em Desenvolvimento de Sistemas</Link>
    <Link to="/quemsomos">Quem somos</Link>
    <Link to="/sobrenos">Sobre nós</Link>
    <Link to="/alunos">Alunos</Link>
  </div>
) 

