import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { auth } from "../utils/firebase";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { LAN_SUPPORT, logo_header } from "../utils/constants";
import { useEffect } from "react";
import { addUser, removeUser } from "../utils/userSlice";
import { removeNowPlayingMovies } from "../utils/moviesSlice";
import { toggleSearchStatus } from "../utils/gptSlice";
import { changeLanguage } from "../utils/configSlice";

const Header = () => {
    const dispatch = useDispatch();
    const navigator = useNavigate();
    const store = useSelector(store => store);
    const signedInUser = store.user;
    const search = store.gpt.gptSearchStatus;

    const signOutHandler = () => {
        signOut(auth).then(() => {
            navigator("/Login")
          }).catch((error) => {
          });
    }

    const searchHandler = () => {
        dispatch(toggleSearchStatus())
    }

    const languageChangeHandler = (e) => {
        dispatch(changeLanguage(e.target.value))
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
                        <button 
                            className="bg-green-950 text-white h-8 mt-4 px-48 mr-40 rounded-md"
                            onClick={searchHandler}
                        >
                            {search ? "Home" : "Search"}
                        </button>
                        <select onChange={languageChangeHandler} className="mr-4 px-2 py-1 bg-red-950 rounded-md text-gray-400">
                            {LAN_SUPPORT.map(lang => {
                                return (
                                    <option value={lang.identifier}>{lang.language}</option>
                                )
                            })}
                        </select>
                        <span className=" text-teal-100 font-semibold text-lg pr-2">
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