import React from 'react'

const pages =[1,2,3,4,5]

const Pagination = () => {
  return (
    <div className='flex items-center justify-center mt-2 mb-10'>
        <div className='border border-gray-200 text-gray-200 py-1 px-3 font-bold text-xl cursor-pointer hover:bg-gray-700 transition'>
            Prev
        </div>
        {pages.map(page => (
            <div key={page} className='border border-gray-200 text-gray-200 py-1 px-3 font-bold text-xl cursor-pointer hover:bg-gray-700 transition'>
                {page}
            </div>
        ))}
        <div className='border border-gray-200 text-gray-200 py-1 px-3 font-bold text-xl cursor-pointer hover:bg-gray-700 transition'>
            Next
        </div>
    </div>
  )
}

export default Pagination