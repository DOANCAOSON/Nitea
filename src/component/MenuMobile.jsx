import { useState } from "react";

const fakeapiproductcatentrylist = [
  { id: 1, category: "Đồ uống" },
  { id: 2, category: "Bánh" },
  { id: 3, category: "kẹo" },
];

const fakeapiproductlist = [
  {
    id: 1,
    category: "Đồ uống",
    name: "Cà phê",
    categoryId: 1,
  },
  {
    id: 2,
    category: "Đồ uống",
    name: "Trà sữa",
    categoryId: 1,
  },
  {
    id: 3,
    category: "Đồ uống",
    name: "Trà trái cây",
    categoryId: 1,
  },
  {
    id: 4,
    category: "Đồ uống",
    name: "Macchiato",
    categoryId: 1,
  },
  {
    id: 5,
    category: "Đồ uống",
    name: "Đá xay",
    categoryId: 1,
  },
  {
    id: 6,
    category: "Đồ uống",
    name: "Sữa chua",
    categoryId: 1,
  },
  {
    id: 7,
    category: "Đồ uống",
    name: "Nước trái cây",
    categoryId: 1,
  },
  {
    id: 8,
    category: "Đồ uống",
    name: "Topping",
    categoryId: 1,
  },
  {
    id: 9,
    category: "Bánh",
    name: "Bánh mì",
    categoryId: 2,
  },
  {
    id: 10,
    category: "Bánh",
    name: "Bánh bao",
    categoryId: 2,
  },
  {
    id: 11,
    category: "Bánh",
    name: "Bánh gạo",
    categoryId: 2,
  },
  {
    id: 12,
    category: "Kẹo",
    name: "Kẹo dâu",
    categoryId: 3,
  },
  {
    id: 13,
    category: "Kẹo",
    name: "Kẹo não",
    categoryId: 3,
  },
];
const MenuMobile = () => {
  const [category, setCategory] = useState("Đồ uống");

  const handleChange = (event) => {
    const selectedCategory = event.target.value;
    setCategory(selectedCategory);
  };

  const doUongProducts = fakeapiproductlist.filter(
    (product) => product.category === category
  );

  return (
    <div className="flex items-center  lg:hidden">
      <select
        style={{ borderBottom: "1px solid #505050" }}
        className="border-0 bg-[#f6f6f6] text-left text-[16px] textSVNGilroy500"
        id="pet-name"
        onChange={handleChange}
      >
        {fakeapiproductcatentrylist.map((category) => {
          return (
            <option
              key={category.id}
              value={category.category}
            >
              {category.category}
            </option>
          );
        })}
      </select>
      <div className="w-[1px] h-[100%] bg-[#505050] mx-[16px]"></div>
      <select
        style={{ borderBottom: "1px solid #505050" }}
        className="block  border-0 relative w-[170px] bg-[#f6f6f6] text-left text-[16px] textSVNGilroy500"
        id="pet-item"
      >
        {doUongProducts.map((item) => {
          return (
            <option key={item.id} value={item.name}>
              {item.name}
            </option>
          );
        })}
      </select>
    </div>
  );
};

export default MenuMobile;
