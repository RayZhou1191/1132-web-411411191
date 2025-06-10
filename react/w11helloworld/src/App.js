import logo from './logo.svg';
import './App.scss';

function App() {
  return (
    <div className='back'>
      <Earth/>
    </div>
  );
}

const Earth=()=>{
  return (
    <div className='earth'>
      <h2>Hello world</h2>
      <div className='logo-container'>
         <img className='logo' src='https://i.ytimg.com/vi/XFp6EZ5-B-k/hqdefault.jpg?sqp=-oaymwEmCOADEOgC8quKqQMa8AEB-AHUBoAC4AOKAgwIABABGEwgTihlMA8=&rs=AOn4CLBDWLe25MfunZEmfHX5Mv_G37IOXw'/>
      </div>
      <p>This is my frist code</p>
    </div>
  );
}

export default App;

