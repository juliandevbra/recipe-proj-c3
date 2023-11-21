import { createContext, useContext, useState } from "react";

export const SalarioStates = createContext()

const SalarioContext = ({children}) => {
    const [salario, setSalario] = useState(250000)
    
    return(
        <SalarioStates.Provider value={{salario, setSalario}}>
            {children}
        </SalarioStates.Provider>
    )
}

export default SalarioContext

export const useSalarioStates = () => useContext(SalarioStates)