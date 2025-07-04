import { useEffect, useState } from 'react';
function App() {
  const [name, setName] = useState('');
  const [list, setList] = useState([]);
  const [alert, setAlert] = useState({
    show: false,
    msg: '',
    type: '',
  });
  const showAlert = (
    show = false,
    msg = 'please enter something',
    type = 'no'
  ) => {
    setAlert({ show, msg, type });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (name) {
      showAlert(true, 'value add', 'success');
      const newitem = {
        id: new Date().getTime().toString(),
        title: name,
      };
      console.log([...list, newitem]);
      setList([...list, newitem]);
      setName('');
      window.alert(' we did it ye');
    } else {
      showAlert();
    }
    console.log(alert);
  };
  return (
    <section className='section-center'>
      <form className='gerocery' onSubmit={handleSubmit}>
        <h3>菜籃</h3>
        <div className='form-contorl'>
          <input
            type='text'
            className='gerocery'
            placeholder='exempli gratia'
            value={name}
            onChange={(e) => setName(e.target.value)}
          ></input>
          <button type='submit' className='submit-btn'>
            submit
          </button>
        </div>
      </form>
    </section>
  );
}

export default App;
