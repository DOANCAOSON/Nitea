import { motion } from "framer-motion";
import { useEffect, useState, useRef } from "react";
import ly from "../img/productlist.png";
import cart2 from "../img/card2.png";
import cart3 from "../img/card3.png";
import Monitor from "../component/Monitor";

// Tạo danh sách sản phẩm giả
const fakeapiproductcatentrylist = [
  { id: 1, category: "Đồ uống" },
  { id: 2, category: "Bánh" },
  { id: 3, category: "kẹo" },
];

const fakeapiproductlist = [
  { id: 1, category: "Đồ uống", name: "Cà phê" },
  { id: 2, category: "Đồ uống", name: "Trà sữa" },
  { id: 3, category: "Đồ uống", name: "Trà trái cây" },
  { id: 4, category: "Đồ uống", name: "Macchiato" },
  { id: 5, category: "Đồ uống", name: "Đá xay" },
  { id: 6, category: "Đồ uống", name: "Sữa chua" },
  { id: 7, category: "Đồ uống", name: "Nước trái cây" },
  { id: 8, category: "Đồ uống", name: "Topping" },
  { id: 9, category: "Bánh", name: "Bánh mì" },
  { id: 10, category: "Bánh", name: "Bánh bao" },
  { id: 11, category: "Bánh", name: "Bánh gạo" },
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
  const [activeIndex, setActiveIndex] = useState(0);
  const handleItemClick = (index) => {
    setActiveIndex(index);
  };

  const [white, setWither] = useState(0);
  const slder_wrapper = useRef(null);

  const moveSlider = (direction) => {
    const slider = slder_wrapper.current;
    if (slider) {
      const currentX = slider.scrollLeft;
      const cardWidth = slider.offsetWidth;
      const offset =
        direction === "left" ? -cardWidth : cardWidth;
      slider.scrollTo({
        left: currentX + offset,
        behavior: "smooth",
      });
    }
  };

  // Tạo một mảng mới để lưu các phần tử có category giống nhau

  useEffect(() => {
    setWither(
      slder_wrapper.current.scrollWidth -
        slder_wrapper.current.offsetWidth
    );
  });
  return (
    <div className="mt-[102px]">
      <div className="flex  w-[100%] lg:w-[1200px] gap-[16px]  m-[auto] mb-[100px] ">
        <div className="w-[308px] mt-[32px]">
          <div className="text-[28px] lg:text-[40px] w-[308px] mb-[18px] text1FTVRestiany px-[20px] lg:px-[0px]">
            Sản phẩm <br className="hidden " />
            <span className="text-[#A0AA62]">MỚI</span>
          </div>
          <div className="hidden sm:block lg:block">
            <span>
              Thức uống mới toanh của Trạm Nitea, bạn đã thử
              chưa?
            </span>
          </div>
        </div>
        <div className="container flex justify-center items-center w-[100%] flex-col relative ">
          <motion.div
            ref={slder_wrapper}
            whileTap={{ cursor: "grabbing" }}
            className="slider_wraper w-[100%] overflow-hidden flex "
          >
            <motion.div
              drag="x"
              dragConstraints={{ right: 0, left: -white }}
              className="inner_crousel inline-flex gap-[14px]"
            >
              <div className="card  w-[282px]  h-[375px] bg-[#D9D9D9] "></div>
              <div className="card  w-[282px]  h-[375px] bg-[#D9D9D9] "></div>
              <div className="card  w-[282px]  h-[375px] bg-[#D9D9D9] "></div>
              <div className="card  w-[282px]  h-[375px] bg-[#D9D9D9] "></div>
              <div className="card  w-[282px]  h-[375px] bg-[#D9D9D9] "></div>
              <div className="card  w-[282px]  h-[375px] bg-[#D9D9D9] "></div>
              <div className="card  w-[282px]  h-[375px] bg-[#D9D9D9] "></div>
              <div className="card  w-[282px]  h-[375px] bg-[#D9D9D9] "></div>
            </motion.div>
          </motion.div>
        </div>
      </div>
      <div className="mb-[53px] flex justify-center ">
        <div className=" w-[100%] lg:w-[1200px]">
          <div className="mb-[53px]">
            <div className="text-[36px] mb-[26px] flex items-center">
              <div className=" flex-1 h-[1px] bg-[#A1AB62]"></div>
              <div className="text-[32px]  lg:text-[64px] text1FTVRestiany mx-[26px] text-[#A1AB62]">
                Thực đơn
              </div>
              <div className="flex-1 h-[1px] bg-[#A1AB62]"></div>
            </div>

            <div className="grid grid-cols-12 gap-[30px]">
              <div className="bg-[#fff] w-[100%] lg:col-span-4">
                <div className="w-[308px] ">
                  <div className="hidden lg:block">
                    <div>
                      {fakeapiproductcatentrylist.map(
                        (product, indexlist) => {
                          return (
                            <div key={product.id}>
                              <div className="flex items-center  pb-[12px] gap-x-[12px] mb-[24px] border-solid border-b-2  border-[#505050]">
                                <div className="h-[36px] w-[36px]">
                                  <img src={ly} alt={ly} />
                                </div>
                                <div>
                                  <p className="text-[24px] SVNGilroy500">
                                    {product.category}
                                  </p>
                                </div>
                                <div className="flex justify-end flex-1">
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="11"
                                    height="3"
                                    viewBox="0 0 11 3"
                                    fill="none"
                                  >
                                    <path
                                      d="M10.32 2.58H0.1V0.228H10.32V2.58Z"
                                      fill="black"
                                    />
                                  </svg>
                                </div>
                              </div>
                              <div>
                                {fakeapiproductlist.map(
                                  (product, index) => {
                                    return (
                                      <div key={product.id}>
                                        <div className="flex items-center  pb-[12px] gap-x-[12px] ">
                                          <div>
                                            <p className="text-[20px] SVNGilroy400 ">
                                              {product.name}
                                            </p>
                                          </div>
                                        </div>
                                        <div></div>
                                      </div>
                                    );
                                  }
                                )}
                              </div>
                            </div>
                          );
                        }
                      )}
                    </div>
                  </div>
                  <div>
                    <div>
                      <ul>
                        {/* {fakeapiproductlist.map(
                          (product, index) => (
                            <li
                              key={product.id}
                              style={{
                                color:
                                  activeIndex === index
                                    ? "#A1AB62"
                                    : "#000",
                                cursor: "pointer",
                              }}
                              className="mb-[16px] text-[20px] SVNGilroy400 leading-[28px]"
                              onClick={() =>
                                handleItemClick(index)
                              }
                            >
                              {product.name}
                            </li>
                          )
                        )} */}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-span-12 lg:col-span-8 ">
                <div className="mb-[81px] px-[20px] lg:px-[0px]">
                  <div className="text-[28px] lg:text-[40px]">
                    Trà trái cây
                  </div>
                </div>
                <div className="grid w-[100%] grid-cols-12 md:grid-cols-12  lg:grid-cols-12 gap-[20px]  lg:gap-[32px]">
                  {fakeapiproductlistitem.map(
                    (item, index) => {
                      return (
                        <div
                          key={item.id}
                          className="flex  justify-center items-center col-span-6 p-[16px]  lg:p-[32px] rounded-[15px] bg-[#F6F6F6]"
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
                    }
                  )}
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
