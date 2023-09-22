// import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar.js';
import TextForm from './components/TextForm.js';

function App() {
  return (
    <>
      <Navbar title="Text App" />
      <TextForm heading="Welcome to react coding" />
    </>
  )
}

export default App;