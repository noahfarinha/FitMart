import {createContext} from "react";

const AuthContext = createContext(null);

export default function AuthProvider({children}){
    const [user, setUser] = useState(null);

    function signUp(email, password){

    }

    function login(){

    }
    return <AuthContext.Provider>{children}</AuthContext.Provider>;
}