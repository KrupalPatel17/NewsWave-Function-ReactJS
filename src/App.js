import React, { Component } from 'react';
import Navbar from './components/Navbar';
import News from './components/News';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mode: 'dark', // Initial state
    };
    document.body.style.backgroundColor = '#616161';
  }

  toggleMode = () => {
    const newMode = this.state.mode === 'light' ? 'dark' : 'light';
    this.setState({ mode: newMode });
    document.body.style.backgroundColor = newMode === 'dark' ? '#616161' : '#a4d4ff';
  };

  render() {
    return (
      <div>
        <Router>
          <Navbar mode={this.state.mode} toggleMode={this.toggleMode} />
          <Routes>
            <Route exact path="/" element={<News key="general" mode={this.state.mode} toggleMode={this.toggleMode} pageSize={15} country="in" category="general" />} />
            <Route exact path="/business" element={<News key="business" mode={this.state.mode} toggleMode={this.toggleMode} pageSize={15} country="in" category="business" />} />
            <Route exact path="/entertainment" element={<News key="entertainment" mode={this.state.mode} toggleMode={this.toggleMode} pageSize={15} country="in" category="entertainment" />} />
            <Route exact path="/general" element={<News key="general" mode={this.state.mode} toggleMode={this.toggleMode} pageSize={15} country="in" category="general" />} />
            <Route exact path="/health" element={<News key="health" mode={this.state.mode} toggleMode={this.toggleMode} pageSize={15} country="in" category="health" />} />
            <Route exact path="/science" element={<News key="science" mode={this.state.mode} toggleMode={this.toggleMode} pageSize={15} country="in" category="science" />} />
            <Route exact path="/sports" element={<News key="sports" mode={this.state.mode} toggleMode={this.toggleMode} pageSize={15} country="in" category="sports" />} />
            <Route exact path="/technology" element={<News key="technology" mode={this.state.mode} toggleMode={this.toggleMode} pageSize={15} country="in" category="technology" />} />
          </Routes>
        </Router>
      </div>
    );
  }
}

export default App;
