import logo from './logo.svg';
import './App.css';
import { BrowserRouter,Router,Route,Routes } from 'react-router-dom';
import Main from './main';
import Menu from './menu';
import Service from './service';
import Contact from './contact';
import Dishes from './Dishes';
import About from './about';

function App() {
  return (
    <div className="App">
    <h2 style={{color:'skyblue'}}>Welcome To Products Store</h2><br />
    <div className="App" style={{height:'40px', width:'1520px' ,backgroundColor:'greenyellow'}}>
    <BrowserRouter>
    <Menu />
         <Routes>
            <Route path='/' element={<Main />}/>
            <Route path='/main' element={<Main />}/>
            <Route path='/service' element={<Service />}/>
            <Route path='/contact' element={<Contact />}/>
            <Route path='/Dishes' element={<Dishes />}/>
            <Route path='/About' element={<About />}/>

             
         </Routes>
    
    </BrowserRouter>
    </div>  
    </div>
  )
}

export default App;
