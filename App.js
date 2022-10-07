import './App.css';
import 'antd/dist/antd.css'; // or 'antd/dist/antd.less
import Login from './components/login';
import { useSelector } from 'react-redux';
import { selectUser } from './components/userSlice'
import Logout from './components/logout';


function App() {
  const user = useSelector(selectUser);
  
  return (
    <div>
    </div>
  );
}

export default App;