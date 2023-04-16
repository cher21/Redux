import React from 'react'

const Child = (props) => {
  return (
    <div>
        {/* <div>
        <h1>Warna sekarang adalah : {props.color}</h1>
        <button onClick={()=>props.fungsi('Merah')}>Merah</button>
        <button onClick={()=>props.fungsi('Kuning')}>Kuning</button>
        </div> */}
        <div>
        <button onClick={()=>props.tambah()}>+</button>
        <button onClick={()=>props.kurang()}>-</button>
        <button onClick={()=>props.kali()}>x</button>
        <button onClick={()=>props.bagi()}>:</button>
        <h2>Result : {props.result}</h2>

        </div>
    </div>
  )
}

export default Child