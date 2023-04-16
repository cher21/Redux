import React, { useState } from 'react'

const Kalkulator = (props) => {
    const [value1, setValue1] = useState(0);
    const [value2, setValue2] = useState(0);
    const [result, setResult] = useState(0);

    const handleValue1change = (e) => {
        setValue1(parseFloat(e.target.value));
    }
    const handleValue2change = (e) => {
      setValue2(parseFloat(e.target.value));
    }
    const handleTambah = () => {
        setResult(value1+value2)
    }
    const handleKurang = () => {
      setResult(value1-value2)
    }
    const handleKali = () => {
      setResult(value1*value2)
    }
    const handleBagi = () => {
      setResult(value1/value2)
    }
   

  return (
    <div>
      <div>
        <p></p>
        <div>Kalkulator</div>
        <input type="number" value={value1} onChange={handleValue1change}/>
      </div>
      <div>
        <input type="number" value={value2} onChange={handleValue2change}/>
      </div>
      <div>
        <button onClick={handleTambah}>+</button>
        <button onClick={handleKurang}>-</button>
        <button onClick={handleKali}>x</button>
        <button onClick={handleBagi}>:</button>
        <h2>{result}</h2>
      </div>
    </div>
  )
}

export default Kalkulator