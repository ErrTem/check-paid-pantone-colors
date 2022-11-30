import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import Navbar from './components/Navbar/Navbar';
import Info from './components/Info/Info';
import HomeContainer from './components/Home/HomeContainer';
import store from './redux/store';

function App() {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <div>
          <Navbar />
          <Routes>
            <Route path="/" element={<HomeContainer />} />
            <Route path="/info/*" element={<Info />} />
          </Routes>
        </div>
      </Provider>
    </BrowserRouter>
  );
}

export default App;
