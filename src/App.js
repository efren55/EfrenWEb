import './App.css';
import './CSS/style.css';
import LogoEfren from './img/EfrenLogo.png';
import Navegacion from './componentes/Navegacion';
import Footer from './componentes/Footer';
import Sobremi from './componentes/Informacion'; 
import Tecnologias from './componentes/Tecnologias';
import Proyectos from './componentes/Proyectos';
import { AIA,Sunshine } from "./componentes/Empresas";
import {useRef} from 'react'


function App() {
  return (
    /*<img src={require('./img/Ellipse.png')} />  */

    <div className="App">
      <div className='header'>
        <div className='contenedor-navegacion'>
          <Navegacion
            nombre='Sobre Mi'
            clase='sobremi button-nav'
            id='#sobreMi'
          />
          <Navegacion
            nombre='Tecnologias'
            clase= 'tecnologias button-nav'
            id='#tecnologias'
          />
          <Navegacion
            nombre='Proyectos'
            clase= 'proyectosNav button-nav'
            id='#proyectos'
          />
          <Navegacion
            nombre= 'CV'
            clase= 'contacto button-nav'
            id='#CV'
          />
        </div>
        <img src={LogoEfren} className='contenedor-logo' alt='Logo pagina Efren'/>
      </div>

      <div className='contenedor-body'>
        <Sobremi/>
        <Tecnologias/>
        <div className='contenedor-proyectos'>
          <h1 className='titulo-proyecto'>Proyectos</h1>
          <div className='proyectos-contenedor' id='proyectos'>
            <Proyectos
              nombre= {AIA.nombre}
              imagen={AIA.imagen}
              imgInfo={AIA.imgInfo}
              texto={AIA.texto}
              localizacion={AIA.localizacion}
              claseA= 'aia'
            />
            <Proyectos
              nombre={Sunshine.nombre}
              imagen={Sunshine.imagen}
              imgInfo={Sunshine.imgInfo}
              texto={Sunshine.texto}
              localizacion={Sunshine.localizacion}
              claseS= 'sunshine'
            />
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  );
}

export default App;
