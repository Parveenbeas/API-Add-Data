import React, { useState, useEffect } from "react";
import axios from "axios";

const ApiTask = () => {
  const [userData, setUserData] = useState([]);
  const [newData, setNewData] = useState([]);
  const [value, setValue] = useState("");
  const [jungle, setJungle] = useState(false);
  // const [loading,setLoading]=useState(true)

  useEffect(() => {
    axios.get("https://dummyjson.com/products").then((resolve) => {
      const gta = resolve.data.products;
      setUserData(gta);
      // setLoading(false)
    }).catch(error=>{ 
       console.log('Error fetching data',error)
      //  setLoading(false)
    })
  }, []);

  const submitted = () => {
    axios
      .get(`https://dummyjson.com/products/search?q=${value}`)
      .then((carbon) => {
        const hydrogen = carbon.data.products;
        setNewData(hydrogen);
        setJungle(true);
      })
      .catch((cheema) => {
        console.log("some erroe", cheema);
      });
  };
  return (
    <div className="container mx-auto p-4">
      <div className="flex items-center mb-4">
        <input
          type="text"
          className="bg-black text-white border border-gray-800 px-4 py-2 rounded-l mr-2 focus:outline-none"
          onChange={(e) => {
            setValue(e.target.value);
          }}
        />
        <button
          onClick={submitted}
          className="bg-blue-500 text-white px-4 py-2 rounded-r hover:bg-blue-600 focus:outline-none"
        >
          Click here
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {jungle
          ? newData.map((justice) => (
              <div
                key={justice.id}
                className="bg-white shadow-md rounded-md transition-transform transform hover:scale-105 overflow-hidden"
              >
                <img
                  src={justice.thumbnail}
                  alt={justice.title}
                  className="w-full h-32 object-cover mb-2"
                />
                <div className="p-4">
                  <p className="text-xl font-bold mb-1">{justice.title}</p>
                  <p className="text-gray-600 mb-1">{justice.brand}</p>
                  <p className="text-blue-500 mb-1">{justice.category}</p>
                  <p className="text-gray-800 mb-2">{justice.description}</p>
                  <p className="text-red-500 mb-1">{justice.price}</p>
                  <p className="text-green-500">{justice.rating}</p>
                </div>
              </div>
            ))
          : userData.map((parveen) => (
              <div
                key={parveen.id}
                className="bg-white shadow-md rounded-md transition-transform transform hover:scale-105 overflow-hidden"
              >
                <img
                  src={parveen.thumbnail}
                  alt={parveen.title}
                  className="w-full h-32 object-cover mb-2"
                />
                <div className="p-4">
                  <p className="text-xl font-bold mb-1">{parveen.title}</p>
                  <p className="text-gray-600 mb-1">{parveen.brand}</p>
                  <p className="text-blue-500 mb-1">{parveen.category}</p>
                  <p className="text-gray-800 mb-2">{parveen.description}</p>
                  <p className="text-red-500 mb-1">{parveen.price}</p>
                  <p className="text-green-500">{parveen.rating}</p>
                </div>
              </div>
            ))}
      </div>
    </div>
  );
};

export default ApiTask;
