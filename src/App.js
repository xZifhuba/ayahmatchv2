import React from 'react';
import './App.css';
import Menu from './Menu';
import Sidebar from './Sidebar'
import About from './About';
import Dhikr from './Dhikr'
import FatihaPage from './Pages/Fatiha/FatihaPage';

import {BrowserRouter, Routes, Route, Link} from 'react-router-dom'; 



function App() {


  return (
    <div className="App">
     
     <BrowserRouter /*Wrap entire div content with browser router for using route components*/>
       <Routes /*Routes tag used to contain all the invididual route paths to the pages, route tag is each individual path defined*/ >
         <Route path="/"element={<><Sidebar/><Menu /></>}/>
         <Route path='/About' element={<><Sidebar /><About /> </>}/>
         <Route path='/Fatiha' element={<><Sidebar /><FatihaPage /> </>}/>
         <Route path='/Dhikr' element={<><Sidebar /><Dhikr /> </>}/>
     
       </Routes>
      </BrowserRouter>
      
     

     
    
  
    </div>
  );
}

export default App;
