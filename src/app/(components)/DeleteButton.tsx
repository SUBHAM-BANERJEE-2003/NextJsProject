import React from 'react'
import { FaTrash } from "react-icons/fa"

function DeleteButton() {
  return (
    <button className='bg-red-600 flex items-center justify-center rounded-sm h-6 w-6 text-white hover:bg-red-400 hover:scale-125'>
      <FaTrash />
    </button>
  
  )
}

export default DeleteButton