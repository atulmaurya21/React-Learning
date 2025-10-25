import Shimmer from "./Shimmer";

import { useParams } from "react-router-dom";

import useResturantMenu from "../utils/useResturantMenu";
const ResturantMenu = () => {
  // const [resinfo, setresinfo] = useState([]);
  const { resId } = useParams();
  console.log(resId);

  // useEffect(() => {
  //   fetchMenu();
  // }, []);

  // const fetchMenu = async () => {
  //   // const data = await fetch(
  //   //   "https://corsproxy.io/https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=19.2201125&lng=72.9748448&restaurantId=9871&catalog_qa=undefined&submitAction=ENTER"
  //   // );
  //   // const json = await data.json();
  //   // console.log(json);

  //   setresinfo(menudata);

  // };

  //I will fetch only fetch the data Using custom hook no call here for api jsut display the menu

  const resinfo = useResturantMenu(resId);

  if (resinfo.length === 0) {
    <Shimmer />;
  }

  return (
    <div className="menu">
      {/* their is an issue the mock data  i used API CALLED IS NOT   */}
      <h1>CHines Wok</h1>
      <h2>Menu</h2>
      <ul>
        {resinfo.map((item) => (
          <li key={item.card.info.id}>
            {item.card.info.name} - {item.card.info.price}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ResturantMenu;
