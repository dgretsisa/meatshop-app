import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import LandingIndex from './components/pages/landing';
import StoreIndex from './components/pages/store';
import ContactsIndex from './components/pages/contacts';
import MyOrdersIndex from './components/pages/myorders';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<LandingIndex/>} />
          <Route exact path="/store" element={<StoreIndex/>} />
          <Route exact path="/contacts" element={<ContactsIndex/>} />
          <Route exact path="/myorders" element={<MyOrdersIndex/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
