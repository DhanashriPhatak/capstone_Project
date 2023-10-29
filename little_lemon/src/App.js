import './App.css';
import Header from './Header';
// import Nav from './Nav';
// import ReserveTable from './ReserveTable';
import Footer from './Footer';
// import Hero from './Hero';
// import { HStack, VStack } from "@chakra-ui/react";
import { Routes, Route  } from "react-router-dom";

import Home from './Home';
import AboutUs from './AboutUs';
import Menu from './Menu';
import BookingPage from './BookingPage';
import Order from './OrderOnline';
import Login from './Login';
import Nav from './Nav';
import { HStack, VStack } from '@chakra-ui/react';
import Hero from './Hero';

function App() {
  return (
    <>
    <div className="App">
      <VStack>
        <HStack>
          <Header></Header>
          <Nav></Nav>
        </HStack>
        </VStack>
        <Hero></Hero>
        <Routes>
        <Route exact  path="/" element={<Home />}/>
        <Route path='about' element={<AboutUs/>} />
        <Route path='menu' element={<Menu/>} />
        <Route path='reserve' element={<BookingPage/>} />
        <Route path='order' element={<Order/>} />
        <Route path='login' element={<Login/>} />
      </Routes>
        <Footer></Footer>
      
    </div>
      
    </>
  );
}

export default App;
