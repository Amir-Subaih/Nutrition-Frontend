'use client'
import React,{ useState } from 'react'
import { toast } from 'react-toastify';

const AddArticaleForm = () => {
    const[title, setTitle] = useState('')
    const[description, setDescription] = useState('')

    const formSubmitHandler = (e:React.FormEvent) => {
        e.preventDefault();
        if(title=== "")
            return toast.error("Title is required")
        if(description === "")
            return toast.error("Description is required")
        console.log({title, description})
    }

  return (
    <form className='flex flex-col' onSubmit={formSubmitHandler}>
          <input 
            className="mb-4 border rounded p-2 text -xl" 
            type="title" 
            placeholder="Enter Tour Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            />
            <textarea
                className='mb-4 resize-none rounded p-2 lg:text-xl'
                rows={5}
                placeholder='Enter Articale Description'
                value={description}
                onChange={(e) => setDescription(e.target.value)}

            ></textarea>
          <button className="bg-blue-700 hover:bg-blue-900 text-white p-2 rounded w-full text-2xl font-bold" type="submit">
            Add
          </button>
    </form>
  )
}

export default AddArticaleForm