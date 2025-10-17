import {useNavigate} from 'react-router-dom';
export const Revenuecard = ({ title, orderCount, amount }) => {

    const navigate = useNavigate();
    const handlelogout = ()=>{

      localStorage.removeItem("isLoggedIn");
      localStorage.removeItem("useremail");
       
      navigate("/");

    }

  return (
    <div className="bg-white rounded shadow-md p-5 m-5">

        <button className="bg-red-500  text-white py-1 px-2 rounded hover:bg-red-600 mb-2 align-middle"
        
        onClick={handlelogout}>Logout</button>



      <div className="text-gray-500 font-bold mb-2 flex gap-2">
        {title}{" "}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="size-6"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 5.25h.008v.008H12v-.008Z"
          />
        </svg>
      </div>

      <div className="flex justify-between">
        <div>$ {amount}</div>
        {orderCount ? (
          <div className="flex">
            <div className="text-blue-700 underline font-medium"> {orderCount} order(s) </div>

            <svg
              className="fill-blue-700"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="size-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="m8.25 4.5 7.5 7.5-7.5 7.5"
              />
            </svg>
          </div>
        ) : null}
      </div>
    </div>
  );
};
