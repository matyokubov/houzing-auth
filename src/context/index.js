import { createContext } from "react"
import { useState } from "react"

export const ContextAPI = createContext()
export const Context = ({children}) => {
    const [show, setShow] = useState(true)
    return (
        <ContextAPI.Provider value={{show, setShow}}>
            {children}
        </ContextAPI.Provider>
    )
}