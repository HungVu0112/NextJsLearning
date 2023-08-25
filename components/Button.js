import React from 'react'

const Button = ({ title }) => {
  return (
    <div className="mx-2">
        <button className="bg-gray-800 px-4 py-2 w-[100px] h-[40px] rounded-md hover:opacity-80">{title}</button>
    </div>
  )
}

export default Button