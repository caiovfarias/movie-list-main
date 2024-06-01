import { BrowserRouter, Routes as RT, Route } from 'react-router-dom';
import Login from './pages/login/Login';
import Home from './pages/home/Home';
import Popular from './pages/popular/Popular';
import TopRated from './pages/topRated/TopRated';
import Upcoming from './pages/upcoming/Upcoming';
import Details from './pages/details/Details';

function Routes() {
 
  return (
    <BrowserRouter>
        <RT>
            <Route path='/' element={<Login/>}/>
            <Route path='/home' element={<Home/>}/>
            <Route path='/popular' element={<Popular/>}/>
            <Route path='/upcoming' element={<Upcoming/>}/>
            <Route path='/top-rated' element={<TopRated/>}/>
            <Route path='/details/:id' element={<Details/>}/> 
        </RT>
    </BrowserRouter>
  );
}

export default Routes;

//os : após a / significa que podemos recuperar a informação