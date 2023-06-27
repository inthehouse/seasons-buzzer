import { Route, Routes } from 'react-router-dom';
import './App.css';
import ReactionTest from './pages';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<ReactionTest />} />
      </Routes>
    </div>
  );
}

export default App;
