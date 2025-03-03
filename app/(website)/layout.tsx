'use client'
import React from 'react'

const layout = ({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) => {
  return (
    <div className="h-full flex">
    <div>SideBar</div>
   <main className="flex-1">
   {children}
   </main>
    </div>
  )
}

export default layout