import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import FlatGallery from './components/FlatGallery';
import Footer from './components/Footer';
import Services from './components/Services';
import Gallery from './components/Gallery';
import Header from './components/Header';
import MainTopComponent from './components/MainTopComponent';
import Reviews from './components/Reviews';
import BottomMenu from './components/BottomMenu';
import BaseModal from './modals/BaseModal';
import { useAppSelector } from './redux/reduxHooks';
import useDispatchAll from './customHooks/useDispatchAll';
import TextImages from './components/TextImages';
import Cart from './pages/Cart';


function App() {
  const [modal,setModal] = useState(false);
  const selector = useAppSelector((s)=>s.modal);
  const dispatchAll = useDispatchAll();
  const hrClasses = "h-px my-3 bg-gray-300 border-0";

  useEffect(()=>{
    setModal(selector.isOpened);
  },[selector])
  
  return (
    
      <div className="flex items-center justify-center flex-col"  >
        <div  className=' flex flex-col justify-center xxs:w-[330px] duo:w-[530px] lg:w-[900px]  	'>
          <header className="App-header">
          <Header />
          </header>
          <MainTopComponent />
          <hr className={hrClasses}  />
          <hr className={hrClasses}  />
          <TextImages />

          <Reviews />
          <Services />
        </div>

        <FlatGallery />
        <BottomMenu />
        <Footer />


        {modal&&<BaseModal />}
      </div>
  );
}

export default App;
