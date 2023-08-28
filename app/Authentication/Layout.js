import React from 'react'

const Layout = ({ children }) => {
  return (
    <div className="h-screen flex bg-blue-400">
      <div className="m-auto bg-slate-50 rounded-md w-3/5 h-[90%] grid lg:grid-cols-2">
        <div>
          Images
        </div>
        <div className="right flex flex-col justify-evenly">
          <div className="text-center py-10">
            { children }
          </div>
        </div>
      </div>
    </div>
  )
}

export default Layout