import {
    ClockIcon,
    LocationMarkerIcon,
    PhoneIcon,
} from "@heroicons/react/solid";

function Info() {
    return (
        <div className="px-6 py-20">
            <div className="flex justify-evenly mx-auto max-w-screen-lg flex-wrap sm:gap-8 gap-10 sm:flex-row flex-col">
                <div className="flex flex-col  items-center gap-2">
                    <div>
                        <ClockIcon className="lg:w-12 w-10 text-green-600 mx-auto " />
                    </div>
                    <h3 className="font-semibold">Today 10am - 7pm</h3>
                    <h4><a className="py-1 px-5 mr-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700" href="">Working Hours</a></h4>
                </div>
                <div className="flex flex-col items-center gap-2">
                    <div>
                        <LocationMarkerIcon className="lg:w-12 w-10 text-green-600 mx-auto" />
                    </div>
                    <h3 className="font-semibold">Qutub Vihar,Goyla Dairy</h3>
                    <h4><a className="py-1 px-5 mr-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700" href="https://goo.gl/maps/WFgzKZ9ip7mgDcGf9">Get Directions</a></h4>
                </div>
                <div className="flex flex-col items-center gap-2">
                    <div>
                        <PhoneIcon className="lg:w-12 w-10 text-green-600 mx-auto" />
                    </div>
                    <h3 className="font-semibold">+91 8178540300</h3>
                    <h4><a className="py-1 px-5 mr-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700" href="tel:+918178540300">Call Now</a></h4>
                </div>
            </div>
        </div>
    );
}

export default Info;
