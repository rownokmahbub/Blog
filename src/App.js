import logo from './logo.svg';
import './App.css';
import NavBar from './components/Home/NavBar';
import Blog from './components/Home/Blog';
import Login from './components/Login';
import SIgnUp from './components/SIgnUp';

function App() {
  return (
   <>
   <NavBar/>
   <Blog/>
   <Login/>
   <SIgnUp/>
   </>
  );
}

export default App;
