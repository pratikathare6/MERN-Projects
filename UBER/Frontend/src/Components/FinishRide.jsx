import { Link } from "react-router-dom";
const FinishRide = (props) => {
  return (
    <div>
      <i
        onClick={() => {props.setfinishridepanel(false)}}
        className="ri-arrow-down-wide-line text-2xl font-bold"
      ></i>
      <h3 className="text-2xl font-semibold mb-5 ">Finish this ride</h3>
      <div className="flex items-center justify-between mt-5 mb-3 border border-yellow-400 rounded p-3">
        <div className=" flex items-center justify-between gap-3">
          <img
            className="h-10 w-10 rounded-full object-cover "
            src="https://www.ait.org.tw/wp-content/uploads/sites/68/2023/07/image006-1.jpg"
            alt="img"
          />
          <h2 className="text-xl font-medium">John Dow</h2>
        </div>
        <h5 className="text-lg font-semibold">2.2 Km</h5>
      </div>

      <div className="flex justify-between items-center flex-col">
        <div className="w-full flex flex-col gap-5">
          <div className="flex gap-5 items-center  border-b-2 border-gray-100">
            <i className=" text-lg ri-map-pin-2-line"></i>
            <div>
              <h3 className="text-lg font-medium">562/11-A</h3>
              <p className="text-sm -mt-1 text-gray-600">sa veton, New York</p>
            </div>
          </div>

          <div className="flex gap-5 items-center border-b-2 border-gray-100">
            <i className="text-lg ri-map-pin-2-fill"></i>
            <div>
              <h3 className="text-lg font-medium">562/11-A</h3>
              <p className="text-sm -mt-1 text-gray-600">sa veton, New York</p>
            </div>
          </div>
          <div className="flex gap-3 items-center justify-end mb-3">
            <i className="text-2xl ri-money-rupee-circle-line"></i>
            <div>
              <h3 className="text-lg font-medium">562.00</h3>
            </div>
          </div>
        </div>

       
      </div>
      <div className="w-full mt-5 flex flex-col items-center justify-center">
         <Link to={'/captain-home'} className="text-center   border p-3 rounded-sm bg-green-600 text-white w-[80%] active:scale-95 text-md font-semibold">
          Finish Ride
        </Link>
        <p className="text-sm mt-8">Click on finish ride button if the payment is completed.</p>
      </div>
    </div>
  );
};

export default FinishRide;
