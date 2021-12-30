import Home from './pages/Home';
import CoinDetail from './pages/CoinDetail';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
          <Routes>
            <Route exact path="/home" element={<Home/>}/>
            <Route exact path="/detail/:id" element={<CoinDetail/>}/>
            <Route path="*" element={<Home/>}/>
          </Routes>  
      </BrowserRouter>
    </div>
  );
}

export default App;
