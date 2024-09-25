import { Link } from "react-router-dom";
import { background_image } from "../utils/constants";
import Header from "./Header";

const Home = () => {
    return (
        <div>
            <Header />
            <div className="absolute">
                <img
                  alt="background_image"
                  src={background_image}
                />
            </div>
        </div>
    )
}

export const RootHome = () => {
    return () => {
        return (
            <div className="relative">
                <Home />
                <div>
                    <Link to="/Login">
                        <button className="absolute font-bold text-3xl hover:bg-red-900 bg-red-600 text-orange-200 z-10 w-80 p-10 mx-auto right-0 left-0 mt-80 bg-opacity-90 rounded-full">
                            Get Started
                        </button>
                    </Link>
                </div>
            </ div>
        )
    }
}

export default Home;