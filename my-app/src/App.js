import logo from './logo.svg';
import './App.css';
import AppProvider from './context/AppProvider';
import Example from './components/Example';

function App() {
  return (
    <AppProvider>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <Example />
        </header>
      </div>
    </AppProvider>
  );
}

export default App;
