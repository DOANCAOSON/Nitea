import { useState } from "react";
import { Link } from "react-router-dom";

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

const HeaderMobile = () => {
  const [categories, setCategories] = useState(apifake);

  return (
    <div className="items-center fixed top-0 left-0  w-[80%] px-[20px] bottom-0 z-10 bg-bgmobileheader lg:hidden  justify-end gap-[32px] text-[18px] font-medium  text-color ">
      {categories.map((category) => (
        <div className="mb-[16px]" key={category.id}>
          <Link
            className="  text-color text-[14px] textSVNGilroy400  "
            to={`/tramtintuc`}
          >
            {category.name}
          </Link>
        </div>
      ))}
      <div className="textSVNGilroy400 w-[150px] text-[16px] px-[28px] py-[12px] rounded-full  bg-backgroundBtn text-color cursor-pointer   ">
        <Link to="/login"> Đăng nhập</Link>
      </div>
    </div>
  );
};

export default HeaderMobile;
