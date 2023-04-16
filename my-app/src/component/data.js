import React, { useEffect, useState } from 'react'

const Data = () => {
    const [isAdd,setIsAdd] = useState(false)
    const [isEdit,setIsEdit] = useState(false)
    const [isDelete,setIsDelete] = useState(false)
    const [pesan,setPesan] = useState()
    // useEffect(()=>{
    //     alert('Menampilkan data')
    // }) //tanpa depedence[] selalu muncul saat kita melakukan perubahan
    // useEffect(()=>{
    //     alert('Menampilkan data')
    // },[]) //dengan depedence[] kosong hanya sekali muncul
    useEffect(()=>{
        alert('Menambahkan data')
    },[isAdd]) //dengan depedence[] terisi muncul saat klik perintah pada isi di dependence
    useEffect(()=>{
        alert('Menghapus data')
    },[isDelete])
    useEffect(()=>{
        alert('Mengubah data')
    },[isEdit])
  return (
    <div>
        <button onClick={()=>setIsAdd(!isAdd)}>Add</button>
        <button onClick={()=>setIsEdit(!isEdit)}>Edit</button>
        <button onClick={()=>setIsDelete(!isDelete)}>Delete</button>
        <div>
            <input type="text" value={pesan} onChange={(e)=>setPesan(e.target.value)}/>
        </div>
        <div>
            {pesan}
        </div>
    
    </div>
  )
}

export default Data