import React from 'react'
import ArticlesItem from '../../components/articles/ArticlesItem'
import { Articles } from '@/components/utils/types'
import SearchArticaleInput from './SearchArticaleInput';
import Pagination from './Pagination';

const ArticlesPage = async () => {
  
  // delay 10s
  new Promise ((resolve)=> setTimeout(resolve,30000));

  const response = await fetch(
    'https://jsonplaceholder.typicode.com/posts'
    //,{cache: `no-store`}// is not saved in the cache
    //,{next:{revaildate: 50}}//re-fetch every 50 seconds
  );

  if(!response.ok){
    throw new Error("Failed to fetch data from server");
  }

  const articles:Articles[] = await response.json();

  return (
    <div>
        <section className="container m-auto p-5">
               <SearchArticaleInput />
               <div className='flex items-center justify-center flex-wrap gap-7'>
                  {articles.slice(0,6).map(item => 
                    <ArticlesItem article={item} key={item.id} />
                  )}
               </div>
               <Pagination />
        </section>
    </div>
  )
}

export default ArticlesPage