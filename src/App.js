import './App.css';
import {useState} from 'react';

function App() {
  const [height, setHeight] = useState(null);
  const [weight, setWeight] = useState(null);
  const [bmi, setBMI] = useState(null);

  function handleSubmit(e) {
    e.preventDefault();
    const conversion = ((weight / (height * height))*10000).toFixed(1);
    setBMI(conversion);
  }


  return (
    <div className="container">
      <h3>Calculating BMI</h3>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Height</label>
          <input type="number" value={height} onChange={e => setHeight(e.target.value)}></input>
        </div>
        <div>
          <label>Weight</label>
          <input type="number" value={weight} onChange={e => setWeight(e.target.value)}></input>
        </div>
        <div>
          <label></label>
          <output>{bmi}</output>
        </div>
        <button>Calculate</button>
      </form>
    </div>
  );
}



export default App;
