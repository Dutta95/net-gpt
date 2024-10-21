import { background_image } from "../utils/constants";
import GptSearchBar from "./GptSearchBar";
import GptSuggestions from "./GptSuggestions";

const GptSearch = () => {
    return (
        <div>
            <div className="absolute">
                <img
                    alt="background_image"
                    src={background_image}
                />

            </div>
            <GptSearchBar />
            <GptSuggestions />
        </div>
    )
}

export default GptSearch;