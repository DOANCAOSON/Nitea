import Slider from "react-slick";
import cart2 from "../img/card2.png";
import cart3 from "../img/card3.png";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {
  FiChevronLeft,
  FiChevronRight,
} from "react-icons/fi";

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

const Sliderlist = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    autoplay: true,
    autoplaySpeed: 5000,
    slidesToScroll: 1,
    slidesToShow: 3, // Hiển thị 3 mục trên mọi màn hình mặc định
    responsive: [
      {
        breakpoint: 1024, // Kích thước màn hình PC
        settings: {
          slidesToShow: 3, // Hiển thị 3 mục trên PC
        },
      },
      {
        breakpoint: 768, // Kích thước màn hình điện thoại
        settings: {
          slidesToShow: 2, // Hiển thị 2 mục trên điện thoại
          nextArrow: <FiChevronRight />,
        },
      },
    ],
    // prevArrow: <FiChevronLeft className="sliderleft"/>,
    // prevArrow: null, // Tắt mũi tên trước
    // nextArrow: null,
  };
  return (
    <div className="mobiledow">
      <Slider {...settings}>
        {fakeapiproductlistitem.map((item) => {
          return (
            <div key={item.id}>
              <div className="rounded-[25px] bg-[#ededed] w-[157px] overflow-hidden  lg:w-[380px] lg:h-[557px] py-[16px] lg:p-[32px] ">
                <div className="flex justify-center w-[100%] mb-[30px] lg:mb-[50px]">
                  <div className="w-[59px] h-[141px] lg:w-[123px] lg:h-[279px] ">
                    <img
                      src={item.image}
                      alt={item.image}
                    />
                  </div>
                </div>
                <div className="mb-[24px] lg:mb-[40px] w-[100%]">
                  <div className=" h-[44px] lg:h-[auto] text-[16px] lg:text-[20px] textSVNGilroy600 mb-[8px] text-center w-[100%]">
                    {item.name}
                  </div>
                  <div className="text-[16px] lg:text-[24px] leading-[33px] text-center w-[100%]">
                    {item.price}đ
                  </div>
                </div>
                <div className="w-[100%]">
                  <div className="w-[100%] px-[10px]">
                    <button className="bg-[#A1AB62] w-[100%]  h-[51px] text-[16px] lg:text-[16px] textSVNGilroy600 text-color rounded-full  ">
                      MUA NGAY
                    </button>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </Slider>
    </div>
  );
};

export default Sliderlist;
