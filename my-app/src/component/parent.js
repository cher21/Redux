import React, { useState } from 'react'
import Child from './child'

const Parent = (props) => {
    // const [warna,setWarna]=useState('')
    // const UbahWarnaButton =(warna)=>{
    //     setWarna(warna)
    // }

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
        {/* <div>
        <input type="text" value={warna} onChange={(e)=>{setWarna(e.target.value)}}/>
        <Child color={warna} fungsi={UbahWarnaButton}/>
        </div> */}
        <div>
        <input type="number" value={value1} onChange={handleValue1change}/>
        <input type="number" value={value2} onChange={handleValue2change}/>
        <Child angka1={value1} angka2={value2} tambah={handleTambah} kurang={handleKurang} kali={handleKali} bagi={handleBagi}/>
        {result}
        </div>
    </div>
  )
}

export default Parent