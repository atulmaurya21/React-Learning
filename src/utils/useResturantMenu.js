import { useEffect ,useState} from "react";
import menudata from "./menumockdata";

const useResturantMenu = (resId) => {

const [resinfo, setresinfo] = useState([]);
  useEffect(() => {
    fetchData();
  }, []);
    
    
    const fetchData = async () => { 
      setresinfo(menudata);
    }

    console.log(resinfo);
    
  return resinfo;
};

export default useResturantMenu;
