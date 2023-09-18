import { useState } from "react";
import { Link } from "react-router-dom";
import logorps from "../img/logorps.png";


const apifake = [
  {
    id: 1,
    name: "Nitea là...",
  },
  {
    id: 2,
    name: "Món ngon Nitea",
  },
  {
    id: 3,
    name: "Trạm tin tức",
  },
  {
    id: 4,
    name: "Nitea tìm người thân",
  },
];


export default function App() {

  const [categories, setCategories] = useState(apifake);


  return (
    
<div></div>
  );
}
