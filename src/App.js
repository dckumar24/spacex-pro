import './App.css';
import MissionList from './pages/MissionList';
import {Route,Routes} from 'react-router-dom';
import Launch from './pages/Launch';

function App() {
  return (
    <div className="App">
      <h1 style={{color:"white"}}>SpaceX Missions</h1>
      <Routes>
        <Route path="/" element={<MissionList/>}></Route>
        <Route path="/:id" element={<Launch/>}></Route>
      </Routes>
     
    </div>
  );
}

export default App;
