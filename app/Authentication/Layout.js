import React from 'react'

const Layout = ({ children }) => {
  return (
    <div className="flex items-center justify-center w-full h-[100vh] bg-auth bg-center bg-cover">
        {children}
    </div>
  )
}

export default Layout