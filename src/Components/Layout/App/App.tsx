import React from 'react';
import './App.css';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Home from '../../Home/Home';

function App(): JSX.Element {
    return (
        <div className="App">
            <header><Header></Header></header>
            <main><Home></Home></main>
            <footer><Footer></Footer></footer>
        </div>
    );
}

export default App;
