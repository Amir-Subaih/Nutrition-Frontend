'use client'
import React,{ useState } from 'react'
import { toast } from 'react-toastify';

const AddCommentForm  = () => {
    const[text, setText] = useState('')

    const formSubmitHandler = (e:React.FormEvent) => {
        e.preventDefault();
        if(text === '') return toast.error('Please enter a comment')
        console.log({text})
    }

  return (
    <form onSubmit={formSubmitHandler}>
          <input 
            className="rounded-lg text-xl w-full p-2 bg-white focus:shadow-md" 
            type="text" 
            placeholder="Add a comment ..."
            value={text}
            onChange={(e) => setText(e.target.value)}
            />
          <button className="bg-green-700 text-white mt-2 p-1 rounded-lg w-min text-xl hover:bg-green-900 transition" type="submit">
            Comment
          </button>
          
    </form>
  )
}

export default AddCommentForm ;