import UsersComponent from './component/UsersComponent';
import UserComponent from './component/UserComponent';
import './App.css';
import {
  Routes,
  Route,
} from "react-router-dom";


function App() {
  return (
    <div className="flex justify-center bg-red-50">
      <Routes>
        <Route path="/" element={<UsersComponent />} />
        <Route path="user/:id" element={<UserComponent />} />
      </Routes>
    </div>
  );
}

export default App;