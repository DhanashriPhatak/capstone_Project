import './Nav.css';
import { Link } from 'react-router-dom';
import Header from './Header';
import { HStack } from '@chakra-ui/react';
// import OrderOnline from './OrderOnline';

function Nav(){
    return(
        <div>
          <HStack>
          {/* <Header></Header> */}
           <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <ul className="navbar-nav mr-auto">
            <li><Link to='/' className="nav-link"> <b>Home</b> </Link></li>
            <li><Link to='/about' className="nav-link"><b>About</b></Link></li>
            <li><Link to='/menu' className="nav-link"><b>Menu</b></Link></li>
            <li><Link to='/reserve' className="nav-link"><b>Reservation</b></Link></li>
            <li><Link to='/order' className="nav-link"><b>Order Online</b></Link></li>
            <li><Link to='/login' className="nav-link"><b>Login</b></Link></li>
          </ul>
          </nav>
          {/* <Routes>
              <Route exact path='home' element={<Home/>} />
              <Route path='about' element={<AboutUs/>} />
              <Route path='menu' element={<Menu/>} />
              <Route path='reserve' element={<ReserveTable/>} />
              <Route path='order' element={<Order/>} />
              <Route path='login' element={<Login/>} />
          </Routes> */}
          </HStack>
          
        </div>
    )
}

export default Nav;