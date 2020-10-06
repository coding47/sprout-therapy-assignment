import React, {useState} from 'react';
import HandleExp from './components/HandleExp';
import './App.css';

function App() {
  const [rules, setRules] = useState(0)
  const isRules = rules > 0 ? `(Set of Rules ${rules})` : null;

  return (
    <div className="App">
      <main>
          <h1>Sprout Therapy Assignment {isRules}</h1>
          <p>Apply custom set of rules:</p>
          <button onClick={setRules.bind(null, 1)}>Custom 1</button>
          <button onClick={setRules.bind(null, 2)}>Custom 2</button>
          <button onClick={setRules.bind(null, 0)}>Base rules</button>
          <HandleExp SetRules={rules} />
      </main>
    </div>
  );
}

export default App;
