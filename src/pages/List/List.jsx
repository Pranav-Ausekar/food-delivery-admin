import React, { useEffect, useState } from 'react'
import './List.css'
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify';

const List = ({ url }) => {

    // const url = 'http://localhost:3000';
    const [list, setList] = useState([]);

    const fetchList = async () => {
        const response = await axios.get(`${url}/api/food/list`)
        // console.log(response.data.data)
        if (response.data.success) {
            setList(response.data.data)
        } else {
            toast.error("Error")
        }
    }

    const removeFood = async (foodId) => {
        // console.log(foodId)
        try {
            const response = await axios.post(`${url}/api/food/remove`, {
                id: foodId
            })
            // console.log(response.data.data)
            await fetchList();
            if (response.data.success) {
                toast.success(response.data.message)
            }
        } catch (error) {
            // console.log(error)
            toast.error("Error")
        }
    }

    useEffect(() => {
        fetchList();
    }, [])

    return (
        <div className='list add flex-col'>
            <p>All Food List</p>
            <div className='list-table'>
                <div className="list-table-format title">
                    <p>Image</p>
                    <p>Name</p>
                    <p>Category</p>
                    <p>Price</p>
                    <p>Action</p>
                </div>
                {
                    list.map((item, index) => {
                        return (
                            <div key={index} className='list-table-format'>
                                <img src={`${url}/images/` + item.image} alt="" />
                                <p>{item.name}</p>
                                <p>{item.category}</p>
                                <p>Rs.{item.price}/-</p>
                                <p onClick={() => removeFood(item._id)} className='cursor'>X</p>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default List