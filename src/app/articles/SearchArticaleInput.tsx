'use client'
import React,{ useState } from 'react'
import { toast } from 'react-toastify';

const SearchArticaleInput  = () => {
    const[searchText, setSearchText] = useState('')

    const formSubmitHandler = (e:React.FormEvent) => {
        e.preventDefault();
        console.log({searchText})
    }

  return (
    <form className='my-5 w-full md:w-2/3 m-auto' onSubmit={formSubmitHandler}>
          <input 
            className="w-full p-3 rounded text-xl border-none text-gray-900" 
            type="search" 
            placeholder="Search for articles"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
            />
          
    </form>
  )
}

export default SearchArticaleInput ;