import { useState } from "react";
import ly from "../img/productlist.png";
import banh from "../img/banh.png";
import bankem from "../img/bankem.png";
import cart2 from "../img/card2.png";
import cart3 from "../img/card3.png";
import Monitor from "../component/Monitor";
import Sliderlist from "../component/Sliderlist";
import MenuMobile from "../component/MenuMobile";

// Tạo danh sách sản phẩm giả
const fakeapiproductcatentrylist = [
  { id: 1, category: "Đồ uống", icon: ly },
  { id: 2, category: "Bánh", icon: banh },
  { id: 3, category: "S.phẩm bán kèm", icon: bankem },
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

const fakeapiproductlistitem = [
  {
    id: 1,
    name: "TRÀ TRÁI CÂY NHIỆT ĐỚI",
    price: "39000",
    image: cart2,
  },
  {
    id: 2,
    name: "TRÀ ĐÀO CAM SẢ",
    price: "39000",
    image: cart3,
  },
  {
    id: 3,
    name: "TRÀ XOÀI MACHIATO",
    price: "42000",
    image: cart2,
  },
  {
    id: 4,
    name: "TRÀ VẢI Ô-LONG",
    price: "42000",
    image: cart3,
  },
  {
    id: 5,
    name: "TRÀ ỔI HỒNG",
    price: "39000",
    image: cart2,
  },
];

const ProductList = () => {
  const [activeIndex, setActiveIndex] = useState(1);

  const handleItemClick = (index) => {
    setActiveIndex(index);
    console.log(activeIndex);
  };

  // const doUongProducts = fakeapiproductlist.filter(product => product.category === category);

  // const [white, setWither] = useState(0);
  // const slder_wrapper = useRef(null);

  // const moveSlider = (direction) => {
  //   const slider = slder_wrapper.current;
  //   if (slider) {
  //     const currentX = slider.scrollLeft;
  //     const cardWidth = slider.offsetWidth;
  //     const offset =
  //       direction === "left" ? -cardWidth : cardWidth;
  //     slider.scrollTo({
  //       left: currentX + offset,
  //       behavior: "smooth",
  //     });
  //   }
  // };

  // // Tạo một mảng mới để lưu các phần tử có category giống nhau

  // useEffect(() => {
  //   setWither(
  //     slder_wrapper.current.scrollWidth -
  //     slder_wrapper.current.offsetWidth
  //   );
  // });

  return (
    <div className="mt-[118px]  sm:mt-[195px] lg:mt-[195px] lg:w-[1200px] mx-[auto]">
      <div className="relative  h-[557px] lg:w-[1300px]  overflow-hidden  lg:mb-[100px] ">
        <div className=" flex w-[100%] flex-wrap lg:flex-nowrap gap-[20px]  m-[auto] mb-[100px] absolute left-0">
          <div className="">
            <div className=" w-[100%] px-[20px] lg:w-[278px] mt-[32px]">
              <div className="text-[28px] lg:text-[40px] w-[100%] mb-[18px] text1FTVRestiany lg:px-[0px]">
                Sản phẩm <br className="hidden  " />
                <span className="text-[#A0AA62]">MỚI</span>
              </div>
              <div className="hidden sm:block lg:block">
                <span>
                  Thức uống mới toanh của Trạm Nitea, bạn đã
                  thử chưa?
                </span>
              </div>
            </div>
          </div>
          <div className="w-[100%] px-[20px]  lg:p-[0px] lg:w-[1200px]">
            <Sliderlist />
          </div>
        </div>
      </div>
      <div className="mb-[53px] flex justify-center ">
        <div className=" w-[100%] lg:w-[1200px]">
          <div className="mb-[53px]">
            <div className="text-[36px] mb-[26px] flex items-center px-[20px] lg:p-0">
              <div className=" flex-1 h-[1px] bg-[#A1AB62]"></div>
              <div className="text-[32px]  lg:text-[64px] text1FTVRestiany mx-[26px] text-[#A1AB62]">
                Thực đơn
              </div>
              <div className="flex-1 h-[1px] bg-[#A1AB62]"></div>
            </div>

            <div className="grid grid-cols-12 gap-[30px]  ">
              <div className="col-span-12 flex justify-center">
                <MenuMobile />
              </div>
              <div className=" w-[100%] lg:col-span-4 hidden lg:block">
                <div className="w-[308px] ">
                  <div>
                    {fakeapiproductcatentrylist.map(
                      (category) => {
                        return (
                          <div
                            id="accordion-open"
                            data-accordion="open"
                            key={category.id}
                          >
                            <h2
                              key={category.id}
                              id={`accordion-open-heading-${category.id}`}
                            >
                              <div
                                className="flex items-center justify-between w-full pb-[12px] border-b-[1px] border-[#505050] mb-[33px]  "
                                data-accordion-target={`#accordion-open-body-${category.id}`}
                                aria-expanded={`${
                                  category.id === 1
                                    ? true
                                    : false
                                }  `}
                                aria-controls={`accordion-open-body-${category.id}`}
                              >
                                <span className="flex items-center">
                                  <div className="mr-[12px]">
                                    <img
                                      src={category.icon}
                                      alt={category.icon}
                                    />
                                  </div>
                                  <div className="text-[24px] textSVNGilroy500 text-colorBlack">
                                    {category.category}
                                  </div>
                                </span>
                                <svg
                                  data-accordion-icon
                                  className="w-3 h-3 rotate-180 shrink-0"
                                  aria-hidden="true"
                                  xmlns="http://www.w3.org/2000/svg"
                                  fill="none"
                                  viewBox="0 0 10 6"
                                >
                                  <path
                                    stroke="currentColor"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M9 5 5 1 1 5"
                                  />
                                </svg>
                              </div>
                            </h2>
                            <div
                              id={`accordion-open-body-${category.id}`}
                              className={`${
                                category.id === 1
                                  ? ""
                                  : "hidden"
                              }`}
                              aria-labelledby={`accordion-open-heading-${category.id}`}
                            >
                              <div className="">
                                {fakeapiproductlist.map(
                                  (product) => {
                                    if (
                                      product.categoryId ===
                                      category.id
                                    )
                                      return (
                                        <p
                                          key={
                                            product.categoryId
                                          }
                                          className={`${
                                            activeIndex ===
                                            product.id
                                              ? "text-[#A1AB62]"
                                              : ""
                                          } text-[20px] text-[#505050] textSVNGilroy400 mb-[16px]`}
                                          onClick={() => {
                                            handleItemClick(
                                              product.categoryId
                                            );
                                          }}
                                        >
                                          {product.name}
                                        </p>
                                      );
                                  }
                                )}
                              </div>
                            </div>
                          </div>
                        );
                      }
                    )}
                  </div>
                </div>
              </div>
              <div className="col-span-12 lg:col-span-8 ">
                <div className="mb-[81px] px-[20px] lg:px-[0px]">
                  <div className="text-[28px] lg:text-[40px]">
                    Trà trái cây
                  </div>
                </div>
                <div className="grid w-[100%] grid-cols-12 md:grid-cols-12  lg:grid-cols-12 gap-[20px]  lg:gap-[32px] px-[20px] lg:p-0">
                  {fakeapiproductlistitem.map((item) => {
                    return (
                      <div
                        key={item.id}
                        className="flex  justify-center items-center col-span-6 p-[16px]  lg:p-[32px] rounded-[15px] bg-[#ededed]"
                      >
                        <div className="w-[100%]">
                          <div className="flex justify-center w-[100%] mb-[50px]">
                            <div className="w-[59px] h-[141px] lg:w-[123px] lg:h-[279px] ">
                              <img
                                src={item.image}
                                alt={item.image}
                              />
                            </div>
                          </div>
                          <div className="mb-[40px] w-[100%]">
                            <div className="h-[44px] lg:h-[auto] text-[16px] lg:text-[20px] textSVNGilroy600 mb-[8px] text-center w-[100%]">
                              {item.name}
                            </div>
                            <div className="text-[16px] lg:text-[24px] leading-[33px] text-center w-[100%]">
                              {item.price}đ
                            </div>
                          </div>
                          <div className="w-[100%]">
                            <div className="w-[100%]">
                              <button className="bg-[#A1AB62] w-[100%]  h-[51px] text-[16px] lg:text-[16px] textSVNGilroy600 text-color rounded-full  ">
                                MUA NGAY
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-[100%]  lg:w-[1200px] mx-[auto] px-[20px] lg:px-[0px]">
        <Monitor />
      </div>
    </div>
  );
};

export default ProductList;
