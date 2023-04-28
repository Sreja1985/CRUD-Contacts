import './App.css';
import {Routes, Route} from 'react-router-dom';
import Home from './Pages/Home';
import NewContact from './Pages/NewContact';
import UpdateContact from './Pages/UpdateContact';

function App() {

  
  return (
    <main className="App">
      <Routes>
        <Route path='/' exact element={<Home />} />
        <Route path='/new-contact' exact element={<NewContact />} />
        <Route path='/edit-contact/:id' exact element={<UpdateContact />} />
      </Routes>
      
      
      
    </main>
  );
}

export default App;
