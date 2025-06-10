import './App.css';
import menu from './data'; 
import Menulist from './Menu';
import Category_xx from './Category';
import { useState } from 'react';

function App() {
  const [newmenu, setMenu] = useState(menu);

  const categoryFilter = (choose) => {
    if (choose === 'all') {
      setMenu(menu);
    } else {
      setMenu(menu.filter((value) => value.category === choose));
    }
  };

  return (
    <div className="App">
      <section className="menu">
        {/* title */}
        <div className="title">
          <h2>our menu</h2>
          <div className="underline"></div>
        </div>

        {/* filter buttons */}
        <Category_xx categoryFilter={categoryFilter} />

        {/* menu items */}
        <Menulist items={newmenu} />
      </section>

      {/* 若有外部 script 可放這裡 */}
      <script src="appcopy.js"></script>
    </div>
  );
}

export default App;

