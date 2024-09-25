import { useState } from "react";
import Home from "./Home";

const Login = () => {
    const [isSignIn, setIsSignIn] = useState(true);
    return (
        <div>
            <Home />
            <form className="absolute bg-black p-10 w-3/12 my-32 mx-auto right-0 left-0 text-white bg-opacity-85 rounded-sm">
                <h1 className="font-bold text-2xl pb-14">{isSignIn ? "Sign In" : "Sign Up"}</h1>
                {!isSignIn && (
                    <input type="text" placeholder="Full Name" className="py-2 pl-1 my-2 w-full bg-gray-700"/>
                )}
                <input type="text" placeholder="Email" className="py-2 pl-1 my-2 w-full bg-gray-700"/>
                <input type="password" placeholder="Password" className="py-2 pl-1 my-2 w-full bg-gray-700"/>
                <button className="py-4 mt-8 bg-red-500 w-full rounded-md">Sign {isSignIn ? "In" : "Up"}</button>
                <p className="mt-8 cursor-pointer" onClick={() => setIsSignIn(!isSignIn)}>
                    {
                        isSignIn ? "New here? Sign up now." : "Already registered? Sign in."
                    }
                </p>
            </form>
        </div>
    )
}

export default Login;