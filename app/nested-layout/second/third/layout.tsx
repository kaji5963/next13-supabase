import React, { ReactNode } from 'react'

const ThirdPage = ({ children }: { children: ReactNode }) => {
  return (
    <main className="mt-6 text-center">
      <p>Layout 3</p>
      {children}
    </main>
  )
}

export default ThirdPage
