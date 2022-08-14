
import './App.css';
import Balance from './components/Balance';
import Header from './components/Header';
import History from './components/History';
import Income from './components/Income';
import Transaction from './components/Transaction';
import { GlobalProvider } from './context/GlobalState';
function App() {
  return (
    <GlobalProvider>
    <Header/>
    <div className="container">
      <Balance/>
      <Income/>
      <History/>
      <Transaction/>
    </div>
    </GlobalProvider>
  );
}

export default App;
