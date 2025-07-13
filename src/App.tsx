import React from 'react';
import './App.css';

import { Header } from "./components/sidebar";
import { Poster } from "./components/poster";
import { Main2 } from "./components/Main2";
import { Footer } from "./components/futter";
import { Inquiry } from "./components/inquiry";
function App() {
  return (
    <div className="App">
      <Header />
      <Poster />
      <Main2 />
      <Inquiry />
      <Footer />
    </div>
  );
}

export default App;
