import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import Header from '../common/template/header';
import SideBar from '../common/template/sidebar';
import Footer from '../common/template/footer';
import Routes from './routes';
import Messages from '../common/msg/messages';

export default (props) => (
  <BrowserRouter>
    <div className='wrapper'>
      <Header />
      <SideBar />
      <Routes />
      <Footer />
      <Messages />
    </div>
  </BrowserRouter>
);
