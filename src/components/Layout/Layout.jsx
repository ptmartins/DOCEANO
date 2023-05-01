import React from 'react';
import {Navbar} from '../../components';
import './layout.css';

const Layout = ({children}) => {   

  return (
    <div className="main-wrapper">
        <Navbar/>
        <main className="main">
          {children}
        </main>
    </div>  
  )
}

export default Layout;    