import { useState } from 'react';
import { Footer, Loader, Navbar, Services, Transactions, Welcome } from './components';

const App = () => {

  return (
    <div className="min-h-screen">
      
      <div className="gradient-bg-welcome">
        <div><Navbar /></div>
        <div><Welcome /></div>
      </div>
      
      <div><Services /></div>
      <div><Transactions /></div>
      <div><Footer /></div>
      
    </div>
  );

}

export default App
