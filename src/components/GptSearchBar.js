import { useSelector } from "react-redux";
import lang from "../utils/languageConstants";

const GptSearchBar = () => {
    const language = useSelector(store => store.config.language);

    return (
        <div className="mt-40 ml-96 absolute">
            <form className=" bg-black ml-20 pl-1 pr-3 pb-2">
                <input 
                    className=" p-2 m-2 w-96"
                    placeholder={lang[language].searchPlaceHolder}
                />
                <button className="bg-red-900 text-white mt-4 p-2 px-8 rounded-md">
                    {lang[language].search}
                </button>
            </form>
        </div>
    )
}

export default GptSearchBar;