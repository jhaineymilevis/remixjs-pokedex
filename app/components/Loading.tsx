import React from 'react'
import { AiOutlineReload } from "react-icons/ai";
export default function Loading() {
  return (
    <div className='w-full h-24 flex items-center justify-center'>
      <AiOutlineReload className='animate-spin h-7 w-7'/>
    </div>
  )
}
