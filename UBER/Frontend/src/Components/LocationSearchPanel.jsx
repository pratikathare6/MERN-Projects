import React from "react";

const LocationSearchPanel = (props) => {
  const locations = [
    {
      name: "Cafe Bliss",
      address: "21B, Near Cafe Bliss, Sita Sadan, Nashik, Maharashtra, India",
    },
    {
      name: "City Mart",
      address: "14, Sharanpur Road, Nashik, Maharashtra, India",
    },
    {
      name: "Green Valley Apartments",
      address: "88, College Road, Nashik, Maharashtra, India",
    },
    {
      name: "Sunrise Clinic",
      address: "5, Canada Corner, Nashik, Maharashtra, India",
    },
    {
      name: "Riverside Plaza",
      address: "102, Gangapur Road, Nashik, Maharashtra, India",
    },
    {
      name: "Blue Pearl Restaurant",
      address: "11, Tidke Colony, Nashik, Maharashtra, India",
    },
    {
      name: "Om Arcade",
      address: "56, Mumbai Naka, Nashik, Maharashtra, India",
    },
    {
      name: "Parkview Residency",
      address: "19, Ashok Stambh, Nashik, Maharashtra, India",
    },
  ];

  return (
    <div>
      {locations.map((elem, idx) => {
        return (
          <div
            onClick={() => {
              props.setvehiclepanel(true);
              props.setpannel(false);
            }}
            key={idx}
            className="flex justify-start items-center gap-4 my-4 p-3 mx-4 active:border-2 rounded-xl"
          >
            <h2 className="bg-[#eee] h-8 flex items-center justify-center w-12 rounded-full">
              <i className="ri-map-pin-fill"></i>
            </h2>
            <h4 className="font-medium">
              {elem.name},{elem.address}
            </h4>
          </div>
        );
      })}
    </div>
  );
};

export default LocationSearchPanel;
