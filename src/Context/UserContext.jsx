import { createContext, useState } from "react";

export const Mystore  = createContext()

export const UserContext = ({children})=>{
      const [userData, setUserData] = useState(JSON.parse(localStorage.getItem("userData")) || []);
        const [toggle, setToggel] = useState(false)
          const [isDark, setIsDark] = useState(false)


    return (
        <Mystore.Provider  value={{userData, setUserData, toggle, setToggel, isDark, setIsDark}}>
            {children}
        </Mystore.Provider>
    )
}