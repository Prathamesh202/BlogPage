import React, { useContext } from 'react';
import { AppContext } from '../Context/AppContext';

const Pagination = () => {
  
  const {page,handlePageChange,totalPages} = useContext(AppContext);

  return (
    <div className='fixed bottom-0 inset-x-0 bg-white py-2 border-t-2 border-t-gray-300 w-full'>
      <div className='flex justify-between w-11/12 max-w-[670px] mx-auto'>
        <div className='flex gap-x-2'>
        {
          (page > 1) && (<button onClick={() => {handlePageChange(page-1)}} className='border-2 border-gray-300 py-1 px-4 rounded-md'>Previous</button>)
        }
      
        {
          (page < totalPages) && (<button onClick={() => {handlePageChange(page+1)}} className='border-2 border-gray-300 py-1 px-4 rounded-md'>Next</button>)
        }
        </div>

        <p className='text-sm font-semibold ml-auto'>
          Page {page} of {totalPages}
        </p>
      </div>
    </div>
  )
}

export default Pagination
