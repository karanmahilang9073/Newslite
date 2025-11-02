import './App.css';
import React from 'react';
import Navbar from './components/Navbar.jsx';
import News from './components/News.jsx';
import {BrowserRouter as Router,   Route, Routes} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar';

const App = () => {
  const pageSize = 6;
  // Vite exposes env vars under import.meta.env and they must be prefixed with VITE_
  // Create a .env file with VITE_NEWS_API=your_key or set it in your environment.
  const apiKey = import.meta.env.VITE_NEWS_API;
  const [progress, setProgress] = React.useState(0);
  
    return (
      <div>
        <Router>
          <Navbar />
          <LoadingBar height={3} color='#f11946' progress={progress} />
          <Routes>
            {/* Define your routes here */}
            <Route exact path="/" element={<News setProgress={setProgress} apiKey={apiKey} key="general" pageSize={pageSize} country="us" category="general" />} />
            <Route exact path="/business" element={<News setProgress={setProgress} apiKey={apiKey} key="business" pageSize={pageSize} country="us" category="business" />} />
            <Route exact path="/entertainment" element={<News setProgress={setProgress} apiKey={apiKey} key="entertainment" pageSize={pageSize} country="in" category="entertainment" />} />
            <Route exact path="/health" element={<News setProgress={setProgress} apiKey={apiKey} key="health" pageSize={pageSize} country="us" category="health" />} />
            <Route exact path="/science" element={<News setProgress={setProgress} apiKey={apiKey} key="sports" pageSize={pageSize} country="us" category="science" />} />
            <Route exact path="/sports" element={<News setProgress={setProgress} apiKey={apiKey} key="sports" pageSize={pageSize} country="us" category="sports" />} />
            <Route exact path="/technology" element={<News setProgress={setProgress} apiKey={apiKey} key="technology" pageSize={pageSize} country="us" category="technology" />} />
          </Routes>
        </Router>
      </div>
    );
}

export default App;
