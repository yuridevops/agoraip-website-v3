import React, { createContext, useState } from 'react'

export const PageContext = createContext()

const PageContextProvider = ({children}) => {
  const [selected, setSelected] = useState(0)

  return(
    <PageContext.Provider value={{selected, setSelected}}>
      {children}
    </PageContext.Provider>
  )


}
export default PageContextProvider