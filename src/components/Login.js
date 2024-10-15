import { useRef, useState } from "react";
import Home from "./Home";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import { formValidator } from "../utils/validator";

const Login = () => {
    const [isSignIn, setIsSignIn] = useState(true);
    const [errMsg, setErrMsg] = useState(null);
    const [authErrMsg, setAuthErrMsg] = useState(null);
    const email = useRef(null);
    const password = useRef(null);
    const full_name = useRef(null);
    const dispatch = useDispatch();

    const submitHandler = () => {
        const message = formValidator(email.current.value, password.current.value);
        setErrMsg(message);
        if (message) return;

        if(!isSignIn) {
            // Sign up Logic
            createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
            .then((userCredential) => {
                const user = userCredential.user;
                updateProfile(auth.currentUser, {
                    displayName: full_name.current.value
                  }).then(() => {
                    // Profile updated!
                    const payload = {
                        uid: user.uid, 
                        email: user.email, 
                        full_name: user.displayName,
                    }
                    dispatch(addUser(payload))
                  }).catch((error) => {
                    console.log(error)
                  });
            })
            .catch((error) => {
                const errorCode = error.code;
                setAuthErrMsg(errorCode+ " ❌")
            });
        } else {
            // Sign in Logic
            signInWithEmailAndPassword(auth, email.current.value, password.current.value)
            .then((userCredential) => {
                // const user = userCredential.user;
            })
            .catch((error) => {
                const errorCode = error.code;
                setAuthErrMsg(errorCode+" ❌")
            })
        }

    }


    return (
        <div>
            <Home />
            <form onSubmit={(e) => e.preventDefault()} className="absolute bg-black p-10 w-3/12 my-32 mx-auto right-0 left-0 text-white bg-opacity-85 rounded-sm">
                {authErrMsg && <p className="text-white mb-20">{authErrMsg}</p>}
                <h1 className="font-bold text-2xl pb-14">{isSignIn ? "Sign In" : "Sign Up"}</h1>
                {!isSignIn && (
                    <input ref={full_name} type="text" placeholder="Full Name" className="py-2 pl-1 my-2 w-full bg-gray-700"/>
                )}
                <input ref={email} type="text" placeholder="Email" className="py-2 pl-1 my-2 w-full bg-gray-700"/>
                {errMsg?.includes("email") && <p>{errMsg}</p>}
                <input ref={password} type="password" placeholder="Password" className="py-2 pl-1 my-2 w-full bg-gray-700"/>
                {errMsg?.includes("password") && <p>{errMsg}</p>}
                <button className="py-4 mt-8 bg-red-500 w-full rounded-md" onClick={submitHandler}>Sign {isSignIn ? "In" : "Up"}</button>
                <p className="mt-8 cursor-pointer" onClick={() => setIsSignIn(!isSignIn)}>
                    {
                        isSignIn ? "New here? Sign up now." : "Already have an account? Sign in."
                    }
                </p>
            </form>
        </div>
    )
}

export default Login;