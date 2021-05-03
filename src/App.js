import './App.css';
import React from 'react';
import Header from './components/header.component';
import About from './sections/about.section';
import Experience from './sections/experience.section';
import Projects from './sections/projects.section';
import Contact from './sections/contact.section';
class App extends React.Component {
  render() {
    return (
      <div className="App-header">
        <Header />
        <About />
        <Experience />
        <Projects />
        <Contact />
        {/* <Switch>
          <Route exact path='/' render={() => <HomePage />}></Route>
          <Route path='/portfolio' render={() => <Portfolio />}></Route>
          <Route path='/contact' render={() => <Contact />}></Route>
        </Switch> */}
      </div>
    )
  };
}

export default App;
