import './App.css';
import Home from './Pages/Home';
import Main from './Pages/Main';
import End from './Pages/End';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Qaror from './Components/Qaror';
import Aholi from './Components/Aholi';
import Saylov from './Components/Saylov';
import OdamSavdosi from './Components/OdamSavdosi';
import Oliy from './Components/Oliy';
import Vaksina from './Components/Vaksina';
import Xiyobon from './Components/Xiyobon';
import Masala from './Components/Masala';
import Tashkilotlar from './Components/Tashkilotlar';
import Hokimiyat from './Components/Hokimiyat';
import Hokim from './Components/Hokim';
import Moliya from './Components/Moliya';
import Sanoat from './Components/Sanoat';
import Savdo from './Components/Savdo';
import Yoshlar from './Components/Yoshlar';
import Suv from './Components/Suv';
import Mahalla from './Components/Mahalla';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <div className="home">
            <Home />
            <Main />
            <End />
          </div>
        </Route>
        <Route path='/news'>
          <div className="home">
            <Home />
          </div>
        </Route>
        <Route path='/qaror'>
          <div className="home">
            <Qaror />
          </div>
        </Route>
        <Route path='/aholi'>
          <div className="home">
            <Aholi />
          </div>
        </Route>
        <Route path='/saylov'>
          <div className="home">
            <Saylov />
          </div>
        </Route>
        <Route path='/odamsavdosi'>
          <div className="home">
            <OdamSavdosi />
          </div>
        </Route>
        <Route path='/oliy'>
          <div className="home">
            <Oliy />
          </div>
        </Route>
        <Route path='/vaksina'>
          <div className="home">
            <Vaksina />
          </div>
        </Route>
        <Route path='/xiyobon'>
          <div className="home">
            <Xiyobon />
          </div>
        </Route>
        <Route path='/masala'>
          <div className="home">
            <Masala />
          </div>
        </Route>
        <Route path='/tashkilotlar'>
          <div className="home">
            <Tashkilotlar />
          </div>
        </Route>
        <Route path='/hokimiyat'>

          <Route exact path='/hokimiyat'>
            <div className="home">
              <Hokimiyat />
            </div>
          </Route>
          <Route path='/hokimiyat/hokim'>
            <div className="home">
              <Hokim />
            </div>
          </Route>
          <Route path='/hokimiyat/moliya'>
            <div className="home">
              <Moliya />
            </div>
          </Route>
          <Route path='/hokimiyat/sanoat'>
            <div className="home">
              <Sanoat />
            </div>
          </Route>
          <Route path='/hokimiyat/savdo'>
            <div className="home">
              <Savdo />
            </div>
          </Route>
          <Route path='/hokimiyat/yoshlar'>
            <div className="home">
              <Yoshlar />
            </div>
          </Route>
          <Route path='/hokimiyat/suv'>
            <div className="home">
              <Suv />
            </div>
          </Route>
          <Route path='/hokimiyat/mahalla'>
            <div className="home">
              <Mahalla />
            </div>
          </Route>
        </Route>

      </Switch>
    </BrowserRouter>
  );
}

export default App;
