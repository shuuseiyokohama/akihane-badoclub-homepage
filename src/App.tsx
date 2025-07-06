import React from 'react';
import './App.css';

import { Header } from "./components/sidebar";
import { Main1 } from "./components/mainHome";
import { Main2 } from "./components/Main2";
import { Main3 } from "./components/Main3"
import {Footer } from "./components/futter";
function App() {
  return (
    <div className="App">
      <Header />
      <Main1 />
      <Main2 />
      <Main3 />
      <Footer />
    </div>
  );
}

export default App;
