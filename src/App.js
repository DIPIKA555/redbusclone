
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Busdetails from './Busdetails';

import Navbar from './Navbar';
import Searchbar from './Searchbar';

function App() {
  return (
    <div className="App">
     
     <BrowserRouter>
       <Navbar/>
       <Routes>
        
        <Route path='/' element={<Searchbar/>} />
        <Route path='/bus/:busid/:source/:deatination/:busName' element={<Busdetails/>}/>
      </Routes>
     </BrowserRouter>
    
    
    </div>
  );
}

export default App;
//npm install @mui/icons-material