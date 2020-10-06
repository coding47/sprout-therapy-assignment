import React, { useState } from 'react';
import calcOutput from '../utils/calcOutput';
import DisplayResult from './DisplayResult';

export default (props) => {
    const [A, setA ] = useState("false");
    const [B, setB ] = useState("false");
    const [C, setC ] = useState("false");
    const [D, setD ] = useState(0);
    const [E, setE ] = useState(0);
    const [F, setF ] = useState(0);
    const [result, setResult] = useState({});

    const handleSubmit = (event) => {
      console.log(props)
      event.preventDefault();
      setResult(calcOutput(A, B, C, D, E, F, props.SetRules));
    }
    
    return (
        <>
            <form onSubmit={handleSubmit}>
            <fieldset>
                <label htmlFor="A">A</label>
                <select id="A" value={A} onChange={(event) => setA(event.target.value)}>
                    <option value="true">true</option>
                    <option value="false">false</option>
                </select>
                <label htmlFor="B">B</label>
                <select id="B" value={B} onChange={(event) => setB(event.target.value)}>
                    <option value="true">true</option>
                    <option value="false">false</option>
                </select>
                <label htmlFor="C">C</label>
                <select id="C" value={C} onChange={(event) => setC(event.target.value)}>
                    <option value="true">true</option>
                    <option value="false">false</option>
                </select>
            </fieldset>
            <fieldset>
                <label htmlFor="D">D</label>
                <input id="D" type="number" step="0.1" value={D} onChange={(event) => setD(event.target.value)}/>
                <label htmlFor="E">E</label>
                <input id="E" type="number" value={E} onChange={(event) => setE(event.target.value)} />
                <label htmlFor="F">F</label>
                <input id="F" type="number" value={F} onChange={(event) => setF(event.target.value)}/>
            </fieldset>
            <input type="submit"/>
        </form>
        <DisplayResult Result={result} />
    </>
    )
}