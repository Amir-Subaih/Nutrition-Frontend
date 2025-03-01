import React from 'react'
import { FaEdit,FaTrash } from 'react-icons/fa'

const CommentItem = () => {
  return (
    <div className='bg-gray-200 p-3 rounded-lg mb-5 border-2 border-gray-300'>
        <div className='flex justify-between items-center mb-2'>
            <strong className='text-gray-800 uppercase'>
                John Doe
            </strong>
            <span className='bg-yellow-700 px-1 rounded-lg text-white'>
                01.01.2024
            </span>
        </div>
        <p className='mb-2 text-gray-800'>
                Thanks for sharing this article
        </p>
        <div className='flex items-center justify-end'>
            <FaEdit className='text-green-600 text-xl cursor-pointer me-3'/>
            <FaTrash className='text-red-600 text-xl cursor-pointer'/>
        </div>
    </div>
  )
}

export default CommentItem