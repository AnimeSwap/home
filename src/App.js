import React, { Component } from "react";
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Main from './pages/main/main';

export default class App extends Component {

  render() {
    return (
      <div className="App">
        <BrowserRouter>
            <Routes>
              <Route path='/' element={<Main />} />
            </Routes>
        </BrowserRouter>
      </div>
    );
  }
}
