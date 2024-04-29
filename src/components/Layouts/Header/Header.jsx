import React, { Children } from 'react'

export const Header = ({children}) => {
  return (
    <header className='w-full h-40  bg-blue-800 flex justify-center items-center  '>{children}</header>
  )
}
