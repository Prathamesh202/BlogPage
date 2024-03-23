/* eslint-disable react-hooks/exhaustive-deps */
import React, { useContext, useEffect } from 'react'
import Header from './Components/Header'
import Blogs from './Components/Blogs'
import Pagination from './Components/Pagination'
import "./App.css"
import { AppContext } from './Context/AppContext'

const App = () => {

  const {fetchBlogPosts} = useContext(AppContext);

  useEffect(() => {
    fetchBlogPosts();
  },[]);

  return (
    <div className='w-full h-full flex flex-col justify-center items-center gap-y-1'>
      <Header/>
      <Blogs/>
      <Pagination/>
    </div>
  )
}

export default App
