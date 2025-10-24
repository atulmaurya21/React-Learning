import RestuarantCard from "./ResturantCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";

const Body = () => {
  // state variable
  const [listofResturant, setlistofResturant] = useState([]);
  const [filteredlist, setfilteredlist] = useState([]);
  const [searchText, setsearchText] = useState("");
  

  useEffect(() => {
    fetchdata();
  }, []);

  const fetchdata = async () => {
    const data = await fetch(
      "https://corsproxy.io/https://www.swiggy.com/dapi/restaurants/list/v5?lat=19.2201125&lng=72.9748448&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );

    const json = await data.json();
    // console.log(json);

    setlistofResturant(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setfilteredlist(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  return listofResturant.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter">
        <div className="search">
          <input
            type="text"
            className="search-btn"
            value={searchText}
            onChange={(e) => {
              setsearchText(e.target.value);
            }}
          />
          <button
            onClick={() => {
              //filter of search

              const filteredsearch = listofResturant.filter((res) =>
                res.info.name.toLowerCase().includes(searchText.toLowerCase())
              );
              console.log(filteredsearch);

              setfilteredlist(filteredsearch);
            }}
          >
            Search
          </button>
        </div>
        <button
          className="filter-btn"
          onClick={() => {
            const filteredlist = listofResturant.filter(
              (res) => res.info.avgRating > 4.5
            );
            setlistofResturant(filteredlist);
          }}
        >
          Top Rated Restaurant
        </button>
      </div>

      <div className="res-container">
        {filteredlist.map((restuarant) => (
          <Link
            key={restuarant.info.id}
            to={"/resturant/" + restuarant.info.id}
          >
            <RestuarantCard resdata={restuarant} />
          </Link>
          // <RestuarantCard key={restuarant.info.id} resdata={restuarant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
