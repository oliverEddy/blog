import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
// Import Footer if you have created the Footer component
// import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          {/* Add more routes here if needed */}
        </Routes>
        {/* Uncomment the Footer once you're ready to include it */}
        {/* <Footer /> */}
      </div>
    </Router>
  );
}

export default App;
