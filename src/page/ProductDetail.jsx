import { useEffect, useState } from "react";
import ProducDetail from "../img/productdetail.png";
import cart from "../img/card.png";
import Monitor from "../component/Monitor";
import Sldier from "./Sldier";

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
    <div className="w-[100%]">
      <div className="w-[100%] sm:w-[100%] lg:w-[1200px] mx-[auto]">
        <div className="grid grid-cols-1 md:grid-cols-1  lg:grid-cols-12 gap-x-[30px] px-[20px] lg:p-[0px] mt-[104px] lg:mb-[100px]">
          <div className="flex justify-center items-center col-span-1 w-[100%]  lg:col-span-6  mb-[24px]  ">
            <div className="w-[293px] h-[390px]">
              <img src={ProducDetail} alt="" />
            </div>
          </div>
          <div className="col-span-1  text-left  lg:col-span-6">
            <div className="flex items-center h-[20px]  gap-x-[8px] mb-[8px]">
              <div className="text-[#909090] textSVNGilroy400 mb-[2px] text-[16px]">
                Nitea
              </div>
              <div className="textSVNGilroy400">></div>
              <div className="text-[#909090]  textSVNGilroy400  text-[16px] ">
                Sản phẩm
              </div>
              <div className="textSVNGilroy400">></div>
              <div className="text-[#000] textSVNGilroy400  text-[16px] ">
                Trà trái cây nhiệt đới
              </div>
            </div>
            <div>
              <div className="textSVNGilroy600  text-colorBlack text-[18px] lg:text-[40px] font-semibold mb-[16px]">
                Oolong Tứ Quý
              </div>
              <div>
                <p className="textSVNGilroy500 text-colorBlack text-[32px] font-normal mb-[24px]">
                  39.000đ
                </p>
              </div>
              <div className="mb-[64px]">
                <div className="flex gap-x-[24px] mb-[16px] ">
                  <div className="textSVNGilroy400 text-[16px] lg:text-[20px]">
                    Mô tả
                  </div>
                  <div className="textSVNGilroy400  text-[16px] lg:text-[20px]">
                    Nguyên liệu
                  </div>
                </div>
                <div>
                  <div>
                    <p className=" text-[14px] lg:text-[16px] textSVNGilroy400 leading-[22.4px] ">
                      Sự kết hợp tinh tế giữa hương trà
                      oolong tứ quý tinh tế, đậm đà cùng vị
                      sữa ngọt ngào. Ăn kèm với những viên
                      trân châu mềm mại để làm tăng thêm
                      phần độc đáo cho thức uống này.
                    </p>
                  </div>
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
                          <div
                            key={product.id}
                            className=" "
                          >
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
        </div>
        <div className="grid grid-cols-1 md:grid-cols-1  lg:grid-cols-12 mb-[32px]">
          <div className="col-span-12 text-center">
            <h1 className="text-[40px] text1FTVRestiany text-colorBlack">
              Sản phẩm liên quan
            </h1>
          </div>
        </div>
        <div className="px-[20px] lg:p-0">
          <Sldier/>
        </div>
        <Monitor />
      </div>
    </div>
  );
};

export default ProductDetail;
