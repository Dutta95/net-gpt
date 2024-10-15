import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { auth } from "../utils/firebase";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { logo_header } from "../utils/constants";
import { useEffect } from "react";
import { addUser, removeUser } from "../utils/userSlice";
import { removeNowPlayingMovies } from "../utils/moviesSlice";

const Header = () => {
    const dispatch = useDispatch();
    const navigator = useNavigate();
    const signedInUser = useSelector(data => data.user)

    const signOutHandler = () => {
        signOut(auth).then(() => {
            navigator("/Login")
          }).catch((error) => {
            console.log(error)
          });
    }

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                const payload = {
                    uid: user.uid,
                    email: user.auth.currentUser.email, 
                    full_name: user.auth.currentUser.displayName,
                }
                dispatch(addUser(payload))
                navigator("/browse")
            } else {
                navigator("/Login")
                dispatch(removeUser())
                dispatch(removeNowPlayingMovies())
            }
            
        })
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <div className="flex justify-between absolute w-screen px-8 py-2 bg-gradient-to-b from-teal-950 z-10">
            <img
               className="w-44"
               alt="netflix_log"
               src={logo_header}
            />
            {
                signedInUser !== null && (
                    <div>
                        <span className=" text-red-950 font-medium pr-2">
                            Hello, {signedInUser.full_name}
                        </span>
                        <button 
                            className="font-semibold text-red-950 bg-slate-50 my-6 px-1 rounded-full"
                            onClick={signOutHandler}
                        >
                            🚫 Sign Out
                        </button>
                    </div>
                )
            }
        </div>
    )
}

export default Header;