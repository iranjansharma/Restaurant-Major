import Image from "next/image";
import Fade from "react-reveal/Fade";

function Banner() {
  const orderNow = () => {
    window.scrollTo({ top: document.getElementById("menu").offsetTop - 90, behavior: 'smooth' });
    //window.location.href='#products-feed'
  };

  const viewMore = () => {
    window.scrollTo({ top: document.getElementById("about").offsetTop - 90, behavior: 'smooth' });
    //window.location.href='#products-feed'
  }
  return (
    <div className=" px-6 relative heightFix mb-24">
      <div className="absolute lg:-bottom-60 -bottom-72 lg:-left-44 -left-80  object-contain overflow-hidden">
        <Fade left>
          <Image src="/img/circle.svg" alt="" width={400} height={400} />
        </Fade>
      </div>

      <div className="absolute top-16 lg:left-72 left-60 lg:w-auto sm:w-10 w-8 object-contain overflow-hidden">
        <Fade top>
          <Image src="/img/circle.svg" alt="" width={80} height={80} />
        </Fade>
      </div>
      <div className="max-w-screen-xl mx-auto lg:py-10  sm:pt-32 pt-20">
        <div className="flex lg:justify-between lg:items-center overflow-hidden p-0.5 lg:flex-row flex-col lg:gap-4 gap-8">
          <Fade left>
            <div className="main_heading">
              <h3 className="font-medium sm:text-xl mt-12 mb-3 text-base ">Are you hungry?</h3>
              <h1 className="font-semibold xl:text-7xl sm:text-6xl xxs:text-5xl text-4xl">
                Fastest Delivery In  <span className="font-bold text-orange-600">your City</span>
              </h1>
              <div className="flex items-center xl:mt-12 lg:mt-10  sm:mt-8 mt-6 gap-4 flex-wrap">
                <button className="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-12 py-2.5 text-center mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" onClick={orderNow}>
                  Order Now
                </button>
                <button className="text-white bg-purple-700 hover:bg-purple-800 focus:outline-none focus:ring-4 focus:ring-purple-300 font-medium rounded-full text-sm px-8 py-2.5 text-center mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900" onClick={viewMore}>
                  View More
                </button>
              </div>
            </div>
          </Fade>
          <Fade right>
            <div className="lg:w-1/2 lg:m-0 lg:max-w-none sm:max-w-lg  max-w-xs  mx-auto">
              <Image
                src="/img/front.png"
                alt=""
                width={1000}
                height={1000}
                objectFit="contain"
              />
            </div>
          </Fade>
        </div>
      </div>
    </div>
  );
}

export default Banner;
