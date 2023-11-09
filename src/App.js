import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { Provider } from 'react-redux';
import store from './store';
import DashboardPage from './containers/pages/DashboardPage'; 
import LoginOlvido from './containers/pages/LoginOlvido';
import Home from './containers/pages/home';
import CambioClave from './containers/pages/cambioClave';
import User from './containers/pages/user';
import Listaruser from './containers/pages/listaruser';
import Listarnombre from './containers/pages/listarnombre';
import Listarconcepto from './containers/pages/listarconcepto';
import Listarobservacion from './containers/pages/listarobservaciones';
import DashboardPage2 from './containers/pages/DashboardPage2'; 
import DashboardPage3 from './containers/pages/DashboardPage3'; 

function App() {
  
  return (
    <Provider store={store}>
      <Router>
        <Routes>
          {/* Error Display */}
          <Route exact path='/' element={<Home/>}/>
          <Route exact path='/dashboard' element={<DashboardPage/>}/>
          <Route exact path='/dashboard2' element={<DashboardPage2/>}/>
          <Route exact path='/dashboard3' element={<DashboardPage3/>}/>
          <Route exact path='/olvido' element={<LoginOlvido/>}/>
          <Route exact path='/cambioClave' element={<CambioClave/>}/>
          <Route exact path='/user' element={<User/>}/>
          <Route exact path='/listaruser' element={<Listaruser/>}/>
          <Route exact path='/listarnombre' element={<Listarnombre/>}/>
          <Route exact path='/listarconcepto' element={<Listarconcepto/>}/>
          <Route exact path='/listarobservacion' element={<Listarobservacion/>}/>
          
        </Routes>
      </Router>
     
    </Provider>
  );
}

export default App;
