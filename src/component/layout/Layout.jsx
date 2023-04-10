import React from 'react'
import './_layout.scss';
const Layout = ({children}) => {
  return (
    <div className='layout'>
        <main>{children}</main>
      
    </div>
  )
}

export default Layout
