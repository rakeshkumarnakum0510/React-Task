
import './App.css';
import { Link, Outlet } from 'react-router-dom';

function App() {


  return (
    <div className="App">
      <nav
        style={{
          borderBottom: "solid 1px",
          paddingBottom: "1rem",
          color:"blue"
        }}
      >
        <Link to="/forms">Sign In</Link>
      </nav>
      <Outlet />
    </div>
  );
}

export default App;
