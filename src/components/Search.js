import React, { useState } from "react";
import { Link } from "gatsby";

export default function Serach({ homeDestination, featured, topDestinations }) {
  const [filterData, setFilterData] = useState([]);

  const handleFilter = (e) => {
    const searchBlog = e.target.value;
    const data = homeDestination.concat(featured, topDestinations);
    const newFilter = data.filter((value) => {
      return value.title.toLowerCase().includes(searchBlog.toLowerCase());
    });
    setFilterData(newFilter);
  };
  // console.log(filterData);'

  return (
    <>
      <div>
        <div className="relative w-full">
          <div className="flex absolute inset-y-0 right-4 items-center pl-3 pointer-events-none">
            <svg
              aria-hidden="true"
              className="w-5 h-5"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                clipRule="evenodd"
              ></path>
            </svg>
          </div>
          <form>
            <input
              type="text"
              id="simple-search"
              name="search"
              className="bg-gray-50/0 border border-main/40 text-gray-900 text-sm rounded-full block w-56 pl-8 p-2.5 z-20"
              placeholder=""
              required
              onChange={handleFilter}
            />
          </form>
        </div>
        {filterData.length !== 0 && (
          <div className="absolute py-4 z-20 bg-cream rounded-lg shadow-2xl mt-2 w-56 h-48 overflow-y-scroll">
            {filterData.map((destination, idx) => {
              return (
                <Link to={`/${destination.slug}`} key={idx}>
                  <div
                    className="w-full flex flex-row justify-between items-center px-6 py-4 bg-cream hover:bg-creambg"
                    key={idx}
                  >
                    <h3 className="text-xs pr-3">{destination.title}</h3>
                    {destination.featurePhoto ? (
                      <img
                        src={destination.featurePhoto.url}
                        alt="thumbnail"
                        className="object-cover w-8 h-8"
                      />
                    ) : (
                      <img
                        src={destination.previewPhoto.url}
                        alt="thumbnail"
                        className="object-cover w-8 h-8"
                      />
                    )}
                  </div>
                </Link>
              );
            })}
          </div>
        )}
      </div>
    </>
  );
}
