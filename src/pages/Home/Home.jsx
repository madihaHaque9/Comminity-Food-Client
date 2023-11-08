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
      <br />
      <div className="flex items-center justify-center bg-gray-800 p-4 md:h-40">
        <div className="flex flex-col md:flex-row">
          <div className="bg-gray-700 flex items-start h-28 md:w-40 w-60 justify-center px-4 mx-0.5 my-0.5">
            <div className="flex-col">
              <div className="text-sm font-medium text-gray-400 my-2">
                Summary
              </div>
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
              <div className="text-sm font-medium text-gray-400 my-2">
                Views
              </div>
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
      <div className="mt-4">
        <div className="flex justify-center  p-4">
          <div className="flex flex-col justify-center items-center ">
            <div className="text-stone-600  font-medium">Testimonials</div>
            <div className="text-green-500 text-3xl md:text-5xl font-medium">
              What Our Donator's Say
            </div>
            <div className="text-stone-600 my-4 md:font-medium text-center w-3/4 md:w-1/2">
              We place huge value on our relationships and have seen the benefit
              they bring to our . Customer feedback is vital in helping
              Food First.
            </div>
            <div className="flex flex-col md:flex-row max-w-7xl justify-center items-center ">
              <div className="overflow-hidden w-full m-4 flex justify-center rounded-lg  md:w-[33%] px-8">
                <div className="flex flex-col md:flex-row items-center justify-center  ">
                  <div className="  items-center justify-center flex py-2">
                    <div className="flex flex-col  items-center justify-center text-center">
                      <img
                        src="https://source.unsplash.com/100x100/?man,boy"
                        alt=""
                        className="rounded-full"
                      />
                      <div className="text-stone-500  m-2">
                        {" "}
                        Food first provides best donations Components and
                        Customer satisfaction is the degree to which a guest is happy with a product or service. In the restaurant industry, customer satisfaction can be affected by everything from the quality of the food to the speed of service. Creating a culture of guest satisfaction starts with your employees.
                      </div>
                      <div className="font-bold text-green-500">John Doe</div>
                      <div className="text-sm font-medium text-stone-500 hover:text-green-500">
                        <a href="#">Board Director of Food First</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="overflow-hidden w-full m-4 flex justify-center rounded-lg  md:w-[33%] px-8">
                <div className="flex flex-col md:flex-row items-center justify-center  ">
                  <div className="  items-center justify-center flex py-2">
                    <div className="flex flex-col  items-center justify-center text-center">
                      <img
                        src="https://source.unsplash.com/100x100/?girl"
                        alt=""
                        className="rounded-full"
                      />
                      <div className="text-stone-500  m-2">
                        {" "}
                        The difference between households with and without children was significant, and 11.7% of households with children indicated that “food didn't last and [there was] no money to get more” sometimes or often, compared to 7.3% of households without children;
                      </div>
                      <div className="font-bold text-green-500">Emily Watson</div>
                      <div className="text-sm font-medium text-stone-500 hover:text-green-500">
                        <a href="#">Secretary</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="overflow-hidden w-full m-4 flex justify-center rounded-lg  md:w-[33%] px-8">
                <div className="flex flex-col md:flex-row items-center justify-center  ">
                  <div className="  items-center justify-center flex py-2">
                    <div className="flex flex-col  items-center justify-center text-center">
                      <img
                        src="https://source.unsplash.com/100x100/?boy"
                        alt=""
                        className="rounded-full"
                      />
                      <div className="text-stone-500  m-2">
                        {" "}
                        It is known that urban food environments, within which people make their daily food choices, are essential in influencing eating behaviours and health outcomes, based on factors such as food availability, ease of geographic accessibility and socio-demographic variations
                      </div>
                      <div className="font-bold text-green-500">Paul Wesley</div>
                      <div className="text-sm font-medium text-stone-500 hover:text-green-500">
                        <a href="#">Sales Manager, food first</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
