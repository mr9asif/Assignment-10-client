import { createContext } from "react";

 export const AuthContext = createContext(null);
const Provider = ({children}) => {



    const info = {

    }

    return (
        <AuthContext.Provider value={info}>
            {children}
        </AuthContext.Provider>
    );
};

export default Provider;