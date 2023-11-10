import React from 'react'
import axios from "axios"
import { useEffect, useState } from "react"
import { useNavigate } from 'react-router-dom'

const AddMinPath = () => {
    const navi = useNavigate()
    const [data,setdata] = useState([])
    const getdata = async() => {
    
        axios.get('https://mainshop-production.up.railway.app/shop').then((res) => setdata(res.data)).catch((err) =>
        console.log(err))
        }
        useEffect(() => {
            getdata()
            
            }, [])


            const remove = async (id) => {
                axios.delete('https://mainshop-production.up.railway.app/shop/' + id).then((res) => {
                    console.log(res)
                    navi('/')
                }).then((err) => {
                    console.log(err)
                })
                
            
            }
  return (
    <div>
        <table className="table">
                <thead>
                    <tr>
                        <th scope="col">ID</th>
                        <th scope="col">shopname</th>
                        <th scope="col">local_at</th>
                        <th scope="col">connect</th>
                        <th scope="col">file</th>
                        <th scope="col">delete</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        data ? data.map((item, index) =>
                            <tr key={index}>
                                <td>{index + 1}</td>
                                <td>{item.shopname}</td>
                                <td>{item.local_at}</td>
                                <td>{item.connect}</td>
                                <td>{item.file}</td>
                                <td onClick={() => remove(item._id)}>
                                    delete
                                </td>
                            </tr>
                        )
                            : null
                    }
                </tbody>
            </table>
    </div>
  )
}

export default AddMinPath