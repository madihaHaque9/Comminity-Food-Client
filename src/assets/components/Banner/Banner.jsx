import banner from '../Banner/Bunnner.jpg'
import AnimatedPage from '../../../AnimatedPage';
const Banner = () => {
    return (
//      
<AnimatedPage>
<div className="hero min-h-screen bg-green-100">
  <div className="hero-content flex-col lg:flex-row-reverse ">
    <img src={banner} className="max-w-sm rounded-lg shadow-2xl" />
    <div className='flex-1'>
      <h1 className="text-5xl font-bold">Support Food First!</h1>
      <p className="py-6 mr-10">Food First’s work is made possible by a vast network of donors, <br /> supporters, and partners based  in the US and globally. <br />
       This support has allowed us to maintain the strong, <br /> critical, and independent voice Food First is known for. There are <br /> numerous ways to support Food First and we hope you will consider doing so!</p>
      <button className="btn btn-primary">Support Us!</button>
    </div>
  </div>
</div>
</AnimatedPage>  

    );
};

export default Banner;