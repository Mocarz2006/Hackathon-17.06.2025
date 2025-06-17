import { Routes, Route, Link } from 'react-router-dom';
import MainPage from './MainPage';
import Board from './components/Board';
import CreateNote from './components/CreateNote';
import './App.css'

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/board/:id" element={<Board />} />
        <Route path="/board/:id/createnote" element={<CreateNote />} />
      </Routes>
    </div>
  );
}

export default App;
