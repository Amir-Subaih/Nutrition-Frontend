import React from 'react'
import AddArticaleForm from './AddArticaleForm'

const AdminPage = () => {
  return (
    <div className='flex-height flex items-center justify-center px-5 lg:px-20 py-10'>
      <div className='shadow p-4 bg-purple-200 rounded w-full'>
        <h2 className='text-2xl lg:text-3xl text-gray-700 font-semibold mb-4'>
          Add New Articale
        </h2>
        <AddArticaleForm/>
      </div>
    </div>
  )
}

export default AdminPage;
