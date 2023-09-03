import React, { ReactNode } from 'react'

const SecondPage = ({ children }: { children: ReactNode }) => {
  return (
    <main className="mt-6 text-center">
      <p>Layout 2</p>
      {children}
    </main>
  )
}

export default SecondPage
