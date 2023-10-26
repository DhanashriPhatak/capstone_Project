import './Nav.css';

import Home from './Home';
import AboutUs from './AboutUs';
import Menu from './Menu';
import ReserveTable from './ReserveTable';
import Order from './OrderOnline';
import Login from './Login';

import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
// import OrderOnline from './OrderOnline';

function Nav(){
    return(
        // <div>
        //     <nav>
        //         <ul>
        //             <li><a href="App.js">Home</a></li>
        //             <li><a href="About.js">About</a></li>
        //             <li><a href="Menu.js">Menu</a></li>
        //             <li><a href="ReserveTable.js">Reservations</a></li>
        //             <li><a href="OrderOnline.js">Order Online</a></li>
        //             <li><a href="Login.js">Login</a></li>
        //         </ul>
        //     </nav>
        // </div>
        <Router>
        <div>
          {/* <h2>Welcome to React Router Tutorial</h2>  */}
           <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <ul className="navbar-nav mr-auto">
            <li><Link to={'/home'} className="nav-link"> <b>Home</b> </Link></li>
            <li><Link to={'/about'} className="nav-link"><b>About</b></Link></li>
            <li><Link to={'/menu'} className="nav-link"><b>Menu</b></Link></li>
            <li><Link to={'/reserve'} className="nav-link"><b>Reservation</b></Link></li>
            <li><Link to={'/order'} className="nav-link"><b>Order Online</b></Link></li>
            <li><Link to={'/login'} className="nav-link"><b>Login</b></Link></li>
          </ul>
          </nav>
          <Routes>
              <Route exact path='/home' component={Home} />
              <Route path='/about' component={AboutUs} />
              <Route path='/menu' component={Menu} />
              <Route path='/reserve' component={ReserveTable} />
              <Route path='/order' component={Order} />
              <Route path='/login' component={Login} />
          </Routes>
        </div>
      </Router>
    )
}

export default Nav;