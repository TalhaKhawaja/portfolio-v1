import './App.css';
import React from 'react';
import Header from './components/header.component';
import Footer from './components/footer.component';
import Body from './components/body.component';
class App extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <Body />
        <Footer />
      </div>
    )
  };
}

export default App;
