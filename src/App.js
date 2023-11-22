import logo from './logo.svg';
import './App.css';
import Dropdown from './components/Dropdown';
import HorizontalNav from './components/HorizontalNav';
import TopBar from './components/TopBar';
import SecondRow from './components/SecondRow';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

function App() {
  return (
    <>
      <TopBar />
      <SecondRow />
      <h1>Test</h1>
    </>
  );
}

export default App;
