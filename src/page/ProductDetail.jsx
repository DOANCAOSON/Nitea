import { useEffect, useState } from "react";
import ProducDetail from "../img/productdetail.png";
import cart from "../img/card.png";
import Monitor from "../component/Monitor";
import Sldier from "./Sldier";
import { FiChevronRight } from "react-icons/fi";

const ProductDetail = () => {
  const [products, setProducts] = useState([
    {
      id: 1,
      name: "TRÀ TRÁI CÂY NHIỆT ĐỚI",
      img: cart,
      price: 39000,
      quantity: 1,
    },
  ]);

  // btn line flow
  const categoriesItem = [
    {
      id: 1,
      category: "Mô Tả",
    },
    {
      id: 2,
      category: "Nguyên liệu",
    },
  ];

  const [lineIndex, setLineIndex] = useState(1);
  const [lineCategoryItem, setLineCategoryItem] =
    useState("Mô Tả");

  const handLineClick = (id, category) => {
    setLineIndex(id);
    setLineCategoryItem(category);
  };

  const categoriesItemdesc = [
    {
      id: 1,
      category: "Mô Tả",
      description:
        "Được chiết xuất từ những lá trà olong thơm ngon hòa quyện cùng những hương vị chua ngọt từ trái cây được nhà Nitea tuyển chọn, trà trái cây nhiệt đới chắc chắn sẽ là thức uống giải khát cho những ngày nóng bức của bạn thêm tươi mát",
    },
    {
      id: 2,
      category: "Nguyên liệu",
      description:
        "Trà oolong tứ quý: Là loại trà oolong cao cấp được chế biến tinh tế từ lá trà có chất lượng tốt. Trà oolong tứ quý thường có hương thơm phức hợp và vị đậm đà.",
    },
  ];

  const nguyenlieuProducts = categoriesItemdesc.filter(
    (product) => product.category === lineCategoryItem
  );

  const [totalPrice, setTotalPrice] = useState(0);

  const increaseQuantity = (id, price) => {
    const updatedProducts = products.map((product) =>
      product.id === id
        ? { ...product, quantity: product.quantity + 1 }
        : product
    );
    setProducts(updatedProducts);
    setTotalPrice(totalPrice + price);
  };

  const decreaseQuantity = (id, price) => {
    const updatedProducts = products.map((product) =>
      product.id === id && product.quantity > 1
        ? { ...product, quantity: product.quantity - 1 }
        : product
    );
    setProducts(updatedProducts);
    const updatedTotalPrice =
      totalPrice > price ? totalPrice - price : 1;
    setTotalPrice(updatedTotalPrice);
  };

  useEffect(() => {
    const newTotalPrice = products.reduce(
      (total, product) => {
        return total + product.quantity * product.price;
      },
      0
    );
    setTotalPrice(newTotalPrice);
  }, [products]);

  return (
    <div className="w-[100%] mt-[118px]  sm:mt-[195px] lg:mt-[195px]">
      <div className="w-[100%] sm:w-[100%] lg:w-[1200px] mx-[auto]">
        <div className="payment-address-form  px-[20px]">
          <div className="flex items-center h-[20px]  gap-x-[8px] mb-[84px] lg:mb-[8px] ">
            <div className="text-[#909090] textSVNGilroy400 mb-[2px] text-[16px]">
              Nitea
            </div>
            <div className="textSVNGilroy400">
              <FiChevronRight />
            </div>
            <div className="text-[#909090]  textSVNGilroy400  text-[16px] ">
              Sản phẩm
            </div>
            <div className="textSVNGilroy400">
              <FiChevronRight />
            </div>
            <div className="text-[#000] textSVNGilroy400  text-[16px] ">
              Trà trái cây nhiệt đới
            </div>
          </div>

          <div className="mb-[100px] w-[100%] flex justify-center">
            <div className="w-[183px] lg:w-[293px] lg:h-[390px]">
              <img src={ProducDetail} alt="" />
            </div>
          </div>

          <div className="mb-[32px]  sm:mb-[64px] lg:mb-[100px]">
            <div className="textSVNGilroy600  text-colorBlack text-[28px] lg:text-[40px] font-semibold mb-[16px]">
              Oolong Tứ Quý
            </div>
            <div>
              <p className="textSVNGilroy500 text-colorBlack text-[32px] font-normal mb-[24px]">
                39.000đ
              </p>
            </div>
            <div className="mb-[64px]">
              <div className="flex gap-x-[24px] mb-[16px] ">
                {categoriesItem.map((item) => {
                  return (
                    <div
                      key={item.id}
                      onClick={() => {
                        handLineClick(
                          item.id,
                          item.category
                        );
                      }}
                      className={`${
                        lineIndex === item.id
                          ? "lineborder"
                          : ""
                      } relative textSVNGilroy400 text-[16px] lg:text-[20px]`}
                    >
                      {item.category}
                    </div>
                  );
                })}
              </div>
              <div>
                {nguyenlieuProducts.map((item, index) => {
                  return (
                    <div
                      key={item.id}
                      className="h-[120px] lg:h-[100px]"
                    >
                      <p className=" text-[14px] lg:text-[16px] textSVNGilroy400 leading-[22.4px] ">
                        {item.description}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>
            <div>
              <div className="grid lg:flex lg:items-center lg:w-[100%] grid-cols-1 md:grid-cols-1 lg:grid-cols-12 gap-x-[16px]   items-center  mb-[16px] ">
                <div className="textSVNGilroy400 text-[20px]  ">
                  <div>
                    {products.map((product) => {
                      const formattedPrice =
                        product.price.toLocaleString();
                      return (
                        <div key={product.id} className=" ">
                          <div className="flex items-center mb-[16px] lg:mb-[0px] ">
                            <div>
                              <div className="flex">
                                <div className="flex w-[104px] h-[60px] rounded-full justify-between items-center  border-[1px] border-colorBlack px-[12px]">
                                  <div
                                    onClick={() =>
                                      decreaseQuantity(
                                        product.id,
                                        product.price
                                      )
                                    }
                                    className="text-[16px] textSVNGilroy500"
                                  >
                                    -
                                  </div>
                                  <div className="text-[16px] textSVNGilroy500">
                                    {product.quantity}
                                  </div>
                                  <div
                                    onClick={() =>
                                      increaseQuantity(
                                        product.id,
                                        product.price
                                      )
                                    }
                                    className=" text-[16px] textSVNGilroy500"
                                  >
                                    +
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
                <div className="textSVNGilroy400 text-[20px]">
                  <div>
                    <button className="bg-[#A1AB62] w-[100%]  lg:w-[465px] lg:h-[60px] h-[54px] text-[16px] lg:text-[20px] textSVNGilroy500 text-color rounded-full  ">
                      MUA NGAY
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-12 mb-[32px]">
          <div className="col-span-12 text-center">
            <h1 className="text-[28px] sm:text-[40px] lg:text-[40px] text1FTVRestiany text-colorBlack">
              Sản phẩm liên quan
            </h1>
          </div>
        </div>
        <div className="px-[20px] lg:p-0">
          <Sldier />
        </div>
        <Monitor />
      </div>
    </div>
  );
};

export default ProductDetail;
