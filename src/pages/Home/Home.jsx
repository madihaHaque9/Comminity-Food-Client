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
        <Link to="/availableFoods">
          <button className="btn btn-primary mx-auto text-center">
            Show All
          </button>
        </Link>
      </div>
      <div className="flex items-center justify-center bg-gray-800 p-4 md:h-40">
        <div className="flex flex-col md:flex-row">
          <div className="bg-gray-700 flex items-start h-28 md:w-40 w-60 justify-center px-4 mx-0.5 my-0.5">
            <div className="flex-col">
              <div className="text-sm font-medium text-gray-400 my-2">Summary</div>
              <div className="class flex items-center">
                <div className="text-3xl font-bold text-gray-200">15k</div>
                <div className="flex items-center justify-between mx-2 px-0.5 py-0.5 rounded-xl text-red-500 font-medium ">
                  <div>25%</div>
                </div>
              </div>
              <div className="w-full h-0.5 bg-gray-400">
                <div className="w-[25%] h-0.5 bg-red-500"></div>
              </div>
              <div className="text-sm font-medium text-gray-400 ">
                Last week 18.7k
              </div>
            </div>
          </div>
          <div className="bg-gray-700 flex items-start h-28 md:w-40 w-60 justify-center px-4 mx-0.5 my-0.5">
            <div className="flex-col">
              <div className="text-sm font-medium text-gray-400 my-2">
                Engagement
              </div>
              <div className="class flex items-center">
                <div className="text-3xl font-bold text-gray-200">23k</div>
                <div className="flex items-center justify-between mx-2 px-0.5 py-0.5 rounded-xl text-green-500 font-medium ">
                  <div>85%</div>
                </div>
              </div>
              <div className="w-full h-0.5 bg-gray-400">
                <div className="w-[85%] h-0.5 bg-green-500"></div>
              </div>
              <div className="text-sm font-medium text-gray-400 ">
                Last week 10.2k
              </div>
            </div>
          </div>
          <div className="bg-gray-700 flex items-start h-28 md:w-40 w-60 justify-center px-4 mx-0.5 my-0.5">
            <div className="flex-col">
              <div className="text-sm font-medium text-gray-400 my-2">
                Donators
              </div>
              <div className="class flex items-center">
                <div className="text-3xl font-bold text-gray-200">43k</div>
                <div className="flex items-center justify-between mx-2 px-0.5 py-0.5 rounded-xl text-red-500 font-medium ">
                  <div>40%</div>
                </div>
              </div>
              <div className="w-full h-0.5 bg-gray-400">
                <div className="w-[40%] h-0.5 bg-red-500"></div>
              </div>
              <div className="text-sm font-medium text-gray-400 ">
                Last week 44.9k
              </div>
            </div>
          </div>
          <div className="bg-gray-700 flex items-start h-28 md:w-40 w-60 justify-center px-4 mx-0.5 my-0.5">
            <div className="flex-col">
              <div className="text-sm font-medium text-gray-400 my-2">Views</div>
              <div className="class flex items-center">
                <div className="text-3xl font-bold text-gray-200">107k</div>
                <div className="flex items-center justify-between mx-2 px-0.5 py-0.5 rounded-xl text-green-500 font-medium ">
                  <div>35%</div>
                </div>
              </div>
              <div className="w-full h-0.5 bg-gray-400">
                <div className="w-[35%] h-0.5 bg-green-500"></div>
              </div>
              <div className="text-sm font-medium text-gray-400 ">
                Last week 97k
              </div>
            </div>
          </div>
        </div>
      </div>
      <script src="https://cdn.tailwindcss.com"></script>
      <script
        src="https://kit.fontawesome.com/290d4f0eb4.js"
        crossorigin="anonymous"
      ></script>
      <script
        type="module"
        src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js"
      ></script>
      <script
        nomodule
        src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js"
      ></script>
    </div>
  );
};

export default Home;
