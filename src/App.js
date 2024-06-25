import './App.css'
import React, { useState } from 'react'
import Navbar from './components/Navbar'
import News from './components/News'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import LoadingBar from 'react-top-loading-bar'

const App = () => {
  const pageSize = 15;
  // const apiKey = process.env.REACT_APP_NEWS_API;
  const apiKey = "d144c7494b0c408d85d281c703496454";
  const country = "in";
  const [progress, setProgress] = useState(0)
  
    return (
      <div>
        <Router>
          <Navbar />
          <LoadingBar color='#f11946' progress={progress}/>
          <Routes>
            <Route path="/" element={<News setProgress={setProgress} apiKey={apiKey} key="general" pageSize={pageSize} country={country} category="general" />} />
            <Route path="/business" element={<News setProgress={setProgress} apiKey={apiKey} key="business" pageSize={pageSize} country={country} category="business" />} />
            <Route path="/entertainment" element={<News setProgress={setProgress} apiKey={apiKey} key="entertainment" pageSize={pageSize} country={country} category="entertainment" />} />
            <Route path="/general" element={<News setProgress={setProgress} apiKey={apiKey} key="general" pageSize={pageSize} country={country} category="general" />} />
            <Route path="/health" element={<News setProgress={setProgress} apiKey={apiKey} key="health" pageSize={pageSize} country={country} category="health" />} />
            <Route path="/science" element={<News setProgress={setProgress} apiKey={apiKey} key="science" pageSize={pageSize} country={country} category="science" />} />
            <Route path="/sports" element={<News setProgress={setProgress} apiKey={apiKey} key="sports" pageSize={pageSize} country={country} category="sports" />} />
            <Route path="/technology" element={<News setProgress={setProgress} apiKey={apiKey} key="technology" pageSize={pageSize} country={country} category="technology" />} />
          </Routes>
        </Router>
      </div>
    );
}

export default App;