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

export default Home;