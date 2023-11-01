import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { Provider } from 'react-redux';
import store from './store';
import DashboardPage from './containers/pages/DashboardPage'; 
import LoginOlvido from './containers/pages/LoginOlvido';
import Home from './containers/pages/home';


function App() {
  
  return (
    <Provider store={store}>
      <Router>
        <Routes>
          {/* Error Display */}
          <Route exact path='/' element={<Home/>}/>
          <Route exact path='/dashboard' element={<DashboardPage/>}/>
          <Route exact path='/olvido' element={<LoginOlvido/>}/>
        </Routes>
      </Router>
     
    </Provider>
  );
}

export default App;
