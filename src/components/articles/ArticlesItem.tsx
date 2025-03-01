import React from 'react'
import Link from 'next/link'
import { Articles } from '@/components/utils/types'

interface ArticlesItemProps {
    article: Articles
}

const ArticlesItem = ({article}:ArticlesItemProps) => {
  return (
        <div className='p-5 rounded-lg shadow-lg border-2 border-gray-400 hover:bg-slate-200 w-full md:w-2/5 lg:w-1/4'>
                <h1 className='text-xl font-bold text-gray-900 line-clamp-1'>{article.title}</h1>
                <p className='my-2 text-xl text-gray-700 p-1 line-clamp-1'>{article.body}</p>
                <Link className='text-xl bg-purple-700 hover:bg-purple-900 w-full block text-center p-1 text-white rounded-lg' href={`/articles/${article.id}`}>
                    Read More
                </Link>
        </div>
  )
}

export default ArticlesItem