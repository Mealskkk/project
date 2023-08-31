import './App.css';
import Background from './components/Background';
import Modal from './components/Modal';

function App() {
  const getData = async () => {
    await fetch('https://cat-fact.herokuapp.com/facts/')
      .then((res) => res.json())
      .then((data) => console.log(data))
      .catch((err) => console.log(err));
  };
  getData();
  return (
    <div className="App">
      <Background />
      <Modal />
    </div>
  );
}

export default App;
