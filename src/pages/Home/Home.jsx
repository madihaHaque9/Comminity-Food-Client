import { Link } from "react-router-dom";
import Banner from "../../assets/components/Banner/Banner";
import FoodCard from "../../assets/components/FoodCards/FoodCard";
import FoodCards from "../../assets/components/FoodCards/FoodCards";


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <FoodCards></FoodCards>
           <div className="flex items-center justify-center">
           <Link to='/availableFoods'><button className="btn btn-primary mx-auto text-center">
                Show All</button></Link>
           </div>
        </div>
    );
};

export default Home;