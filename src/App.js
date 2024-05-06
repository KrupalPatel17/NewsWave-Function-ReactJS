import React from 'react';
import Navbar from './components/Navbar';
import News from './components/News';
import Fpage from './components/Fpage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoadingBar from 'react-top-loading-bar'
import { useState } from 'react';
import './App.css';


const App = () => {
  const [mode, setMode] = useState("light");
  const [progress, setProgress] = useState(0);


  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#616161';
      // document.body.style.color = 'white'
    }
    else {
      setMode('light');
      document.body.style.backgroundColor = '#a4d4ff';
      // document.body.style.color = 'black'
      // document.body.style.color = 'black'
    }
  }

  const pageSize = 5;



  const apiKey = process.env.REACT_APP_NEWS_API

  const handleButtonClick = () => {
    setShowNews(true); // Set flag to true when the button is clicked
  }

    return (
      <div>
        <Router>
          <Navbar mode={mode} toggleMode={toggleMode}  isFpageActive={window.location.pathname === '/'}  />
        
          <LoadingBar
            height={2}
            color='linear-gradient(to right, #0074D9, #00BFFF, #00eeff)'
            progress={progress}
          />
          <Routes>
            <Route exact path="/" element={<Fpage setProgress={setProgress} key="Fpage" mode={mode} toggleMode={toggleMode}  />} />
            <Route exact path="/business" element={<News setProgress={setProgress} apiKey={apiKey} key="business" mode={mode} toggleMode={toggleMode} pageSize={pageSize} country="in" category="business" />} />
            <Route exact path="/entertainment" element={<News setProgress={setProgress} apiKey={apiKey} key="entertainment" mode={mode} toggleMode={toggleMode} pageSize={pageSize} country="in" category="entertainment" />} />
            <Route exact path="/general" element={<News setProgress={setProgress} apiKey={apiKey} key="general" mode={mode} toggleMode={toggleMode} pageSize={pageSize} country="in" category="general" />} />
            <Route exact path="/health" element={<News setProgress={setProgress} apiKey={apiKey} key="health" mode={mode} toggleMode={toggleMode} pageSize={pageSize} country="in" category="health" />} />
            <Route exact path="/science" element={<News setProgress={setProgress} apiKey={apiKey} key="science" mode={mode} toggleMode={toggleMode} pageSize={pageSize} country="in" category="science" />} />
            <Route exact path="/sports" element={<News setProgress={setProgress} apiKey={apiKey} key="sports" mode={mode} toggleMode={toggleMode} pageSize={pageSize} country="in" category="sports" />} />
            <Route exact path="/technology" element={<News setProgress={setProgress} apiKey={apiKey} key="technology" mode={mode} toggleMode={toggleMode} pageSize={pageSize} country="in" category="technology" />} />
          </Routes>
        </Router>
      </div>
    );
  
}

export default App;
