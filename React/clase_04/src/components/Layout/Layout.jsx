import React from 'react'
import { LayoutWrapper } from './LayoutStyles'

const Layout = ({children}) => {
  return (
    <LayoutWrapper>
        {children}
    </LayoutWrapper>
  )
}

export default Layout