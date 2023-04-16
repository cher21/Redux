import React, { useState } from 'react'

const Count = (props) => {
    const [count,setCount] = useState(0);
    const [nama,setNama] = useState('Budi');
    const [person,setPerson] = useState({
        nama: 'Jhon',
        alamat: 'Jakarta',
        usia:20
    })

    const changeHandler=(e)=>{
        setPerson(prev=>{
            return {...prev,[e.target.name]:e.target.value}
        })
    }

  return (
    <div>
        <h1>ini latihan hook</h1>
        <h3>Counter : {count}</h3>
        <button onClick={()=>setCount(count+1)}>+</button>
        <button onClick={()=>setCount(count-1)}>-</button>
        <div>
            <label><h3>Selamat datang {nama}</h3></label>
            <div>
                <input type="text" value={nama} onChange={(e)=>setNama(e.target.value)}/>
            </div>
        </div>
        <div>
            <p>Nama : {person.nama}</p>
            <p>alamat : {person.alamat}</p>
            <p>usia : {person.usia}</p>
        </div>
        <div>
            <input type="text" name="nama" value={person.nama} onChange={changeHandler}/>
        </div>
        <div>
            <input type="text" name="alamat" value={person.alamat} onChange={changeHandler}/>
        </div>
        <div>
            <input type="text" name="usia" value={person.usia} onChange={changeHandler}/>
        </div>
    </div>
  )
}

export default Count