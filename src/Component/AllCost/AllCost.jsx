import React, { useEffect, useState } from 'react'
import './AllCost.css'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const AllCost = () => {
  const navi = useNavigate()
  
  // const [data,setdata] = useState([])
  const [form,setform] = useState([])

  // const getdata = async() => {
    
  //   axios.get('https://mainshop-production.up.railway.app/shop').then((res) => setdata(res.data)).catch((err) =>
  //   console.log(err))
  //   }

    useEffect(() => {
     
      
      }, [])


      const change = async (e) => {
        if(e.target.name === 'file')
        {
            setform({
                ...form,
                [e.target.name]: e.target.files[0]
            })
        }else{
            setform({
                ...form,
                [e.target.name]: e.target.value
            })
        }
    }
    const onsubmit = (e) => {
      e.preventDefault()
      const formsubmitImagedata = new FormData()
  
      for(const key in form){
          formsubmitImagedata.append(key,form[key])
          
      }
  
      axios.post('https://mainshop-production.up.railway.app/shop ',formsubmitImagedata)
      .then(res => {
        console.log(res.data)
        navi('/')
      })
      .catch(err => {console.log(err)})
  }
  
//   const remove = async (id) => {
//     axios.delete('https://mainshop-production.up.railway.app/shop/' + id).then((res) => {
//         console.log(res)
//     }).then((err) => {
//         console.log(err)
//     })
//     getdata()

// }
  return (
    <div>
    <form encType="multipart/form-data" onSubmit={onsubmit}>
        <input type="text" name="shopname" placeholder="ชื่อร้าน" onChange={ e=> change(e)}></input>
        <br />
        <input type="text" name="local_at" placeholder="ที่อยู่" onChange={ e=> change(e)} ></input>
        <br />
        <input type="text" name="connect" placeholder="ติดต่อ" onChange={ e=> change(e)} ></input>
        <br />
        <input type="file" name="file" placeholder="รูปร้าน" onChange={ e=> change(e)} ></input>
       
        <button>ส่งข้อมูล</button>
    </form>
    
</div>
  )
}

export default AllCost