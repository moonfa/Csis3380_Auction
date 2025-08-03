import 'bootstrap/dist/css/bootstrap.min.css';
import AppControl from './AppControl'
import AppRoles from './AppRoles'
import AppManage from './AppManage'
import AppUsers from './AppUsers'


export default function App() {
  return (
    <div className="App">
      <h2>Control Panel</h2>
      <AppControl /> 
      <AppManage />
      <AppRoles />
      <AppUsers />
    </div>
  );
}