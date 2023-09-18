import { useEffect, useState } from "react";
import cart from "../img/card.png";

const Payment = () => {
  const [products, setProducts] = useState([
    {
      id: 1,
      name: "TRÀ TRÁI CÂY NHIỆT ĐỚI",
      img: cart,
      price: 39000,
      quantity: 1,
    },
    {
      id: 2,
      name: "TRÀ TRÁI CÂY NHIỆT ĐỚI ",
      img: cart,
      price: 1000,
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

  const [div1Color, setDiv1Color] = useState(
    "2px solid #A8A8A8"
  );
  const [div1BtnPay, setDiv1BtnPay] = useState("#A8A8A8");
  const [div2BtnPay, setDiv2BtnPay] = useState("#A8A8A8");
  const [div2Color, setDiv2Color] = useState(
    "2px solid #A8A8A8"
  );

  const handleDiv1Click = () => {
    setDiv1Color("2px solid #B26135");
    setDiv2BtnPay("#A8A8A8");
    setDiv1BtnPay("#B26135");
    setDiv2Color("2px solid #A8A8A8");
  };

  const handleDiv2Click = () => {
    setDiv2Color("2px solid #B26135");
    setDiv1Color("2px solid #A8A8A8");
    setDiv1BtnPay("#A8A8A8");
    setDiv2BtnPay("#B26135");
  };

  return (
    <div className="w-[100%] lg:w-[1200px] flex justify-center mt-[118px] sm:mt-[195px] lg:mt-[195px] mx-[auto] ">
      <div className="w-[100%]">
        <div className="flex w-[100%] items-center gap-x-[12px] mb-[16px]  sm:mb-[64px] lg:mb-[64px]">
          <div className="text1FTVRestiany text-[28px] sm:text-[40px] lg:text-[40px]  w-[218px] sm:w-[auto] lg:w-[auto]  leading-[56px] text-mainstream   px-[20px] sm:px-[0px] lg:px-[0px]  sm:whitespace-nowrap lg:whitespace-nowrap">
            Thanh Toán
          </div>
          <div className="hidden sm:block lg:block w-[100%] h-[1px] bg-line"></div>
        </div>
        <div className="mb-[80px]">
          <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-12  lg:gap-[29px] sm:lg:gap-[29px]  rounded-lg  ">
            <div className="w-[100%] md:w-[100%] lg:w-[100%] bg-color rounded-[15px] col-span-7 px-[20px] py-[32px]  lg:p-[40px] mb-[32px] sm:mb-[0px] lg:mb-[0px] ">
              <div className="text-colorBlackbland text-[16px] lg:text-[text-[20px] lg:text-[20px] textSVNGilroy600 mb-[16px]">
                Địa chỉ nhận hàng
              </div>
              <div className="w-[100%] textSVNGilroy400 mb-[16px]">
                <label
                  className="block mb-[8px]  text-[14px] sm:text-[16px] lg:text-[16px] textSVNGilroy400"
                  htmlFor="tenNguoiNhan"
                >
                  Tên người nhận{" "}
                  <span className="text-[#D00]">*</span>
                </label>
                <input
                  type="text"
                  id="tenNguoiNhan"
                  name="tenNguoiNhan"
                  required
                  className="h-[48px] px-[12px] rounded-full w-[100%] bg-color border-solid border-2 border-[rgba(80, 80, 80, 0.50)]"
                ></input>
              </div>
              <div className="w-[100%] textSVNGilroy400 mb-[16px]">
                <label
                  className="block mb-[8px]  text-[14px] sm:text-[16px] lg:text-[16px] textSVNGilroy400"
                  htmlFor="phone"
                >
                  Số điện thoại{" "}
                  <span className="text-[#D00]">*</span>
                </label>
                <input
                  type="text"
                  id="phone"
                  name="phone"
                  required
                  className="h-[48px] px-[12px] rounded-full w-[100%] bg-color border-solid border-2 border-[rgba(80, 80, 80, 0.50)]"
                ></input>
              </div>
              <div className="w-[100%] textSVNGilroy400 mb-[32px]">
                <label
                  className="block mb-[8px] text-[14px] sm:text-[16px] lg:text-[16px] textSVNGilroy400 "
                  htmlFor="Address"
                >
                  Địa chỉ người nhận{" "}
                  <span className="text-[#D00]">*</span>
                </label>
                <input
                  type="text"
                  id="Address"
                  name="Address"
                  required
                  className="h-[48px] px-[12px] rounded-full w-[100%] bg-color border-solid border-2 border-[rgba(80, 80, 80, 0.50)]"
                ></input>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-12  lg:gap-[29px] sm:lg:gap-[29px] mb-[16px] rounded-lg ">
                <div className="col-span-6 flex items-center textSVNGilroy600 mb-[12px] sm:mb-[16px] lg:mb-[16px]">
                  Phương thức thanh toán
                </div>
                <div className="col-span-3">
                  <div
                    style={{ border: div1Color }}
                    onClick={handleDiv1Click}
                    className={`w-[130px] h-[120px] rounded-[12px] flex justify-center items-center`}
                  >
                    <div>
                      <div className="flex justify-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="56"
                          height="56"
                          viewBox="0 0 56 56"
                          fill="none"
                        >
                          <path
                            d="M22.166 32.0834C22.166 34.3467 23.916 36.1667 26.0627 36.1667H30.4493C32.316 36.1667 33.8327 34.58 33.8327 32.5967C33.8327 30.4734 32.8994 29.7034 31.5227 29.2134L24.4993 26.7634C23.1227 26.2734 22.1894 25.5267 22.1894 23.3801C22.1894 21.4201 23.706 19.8101 25.5727 19.8101H29.9593C32.106 19.8101 33.856 21.6301 33.856 23.8934"
                            stroke={div1BtnPay}
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M28 17.5V38.5"
                            stroke={div1BtnPay}
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M51.3327 28C51.3327 40.88 40.8794 51.3333 27.9994 51.3333C15.1193 51.3333 4.66602 40.88 4.66602 28C4.66602 15.12 15.1193 4.66663 27.9994 4.66663"
                            stroke={div1BtnPay}
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M51.3333 14V4.66663H42"
                            stroke={div1BtnPay}
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M39.666 16.3333L51.3327 4.66663"
                            stroke={div1BtnPay}
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </div>
                      <div
                        style={{
                          color: div1BtnPay,
                        }}
                        className={`flex justify-center`}
                      >
                        CK ngân hàng
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-span-3">
                  <div
                    style={{ border: div2Color }}
                    onClick={handleDiv2Click}
                    className="w-[130px] h-[120px] rounded-[12px] flex justify-center items-center "
                  >
                    <div>
                      <div className="flex justify-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="56"
                          height="57"
                          viewBox="0 0 56 57"
                          fill="none"
                        >
                          <path
                            d="M45.0336 18.98V30.9967C45.0336 38.1833 40.9269 41.2633 34.7669 41.2633H14.2569C13.2069 41.2633 12.2036 41.1701 11.2702 40.9601C10.6869 40.8667 10.1269 40.7034 9.61358 40.5167C6.11358 39.2101 3.99023 36.1767 3.99023 30.9967V18.98C3.99023 11.7933 8.09689 8.71338 14.2569 8.71338H34.7669C39.9936 8.71338 43.7502 10.93 44.7536 15.9934C44.9169 16.9267 45.0336 17.8833 45.0336 18.98Z"
                            stroke={div2BtnPay}
                            strokeWidth="2"
                            strokeMiterlimit="10"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M52.0368 25.9802V37.997C52.0368 45.1836 47.9301 48.2635 41.7701 48.2635H21.2601C19.5334 48.2635 17.9701 48.0303 16.6168 47.517C13.8401 46.4903 11.9501 44.367 11.2734 40.9603C12.2068 41.1703 13.2101 41.2635 14.2601 41.2635H34.7701C40.9301 41.2635 45.0368 38.1836 45.0368 30.997V18.9802C45.0368 17.8836 44.9435 16.9037 44.7568 15.9937C49.1901 16.927 52.0368 20.0536 52.0368 25.9802Z"
                            stroke={div2BtnPay}
                            strokeWidth="2"
                            strokeMiterlimit="10"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M24.496 31.1598C27.898 31.1598 30.656 28.4018 30.656 24.9998C30.656 21.5977 27.898 18.8397 24.496 18.8397C21.0939 18.8397 18.3359 21.5977 18.3359 24.9998C18.3359 28.4018 21.0939 31.1598 24.496 31.1598Z"
                            stroke={div2BtnPay}
                            strokeWidth="2"
                            strokeMiterlimit="10"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M11.1543 19.8667V30.1334"
                            stroke={div2BtnPay}
                            strokeWidth="2"
                            strokeMiterlimit="10"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M37.8516 19.8673V30.134"
                            stroke={div2BtnPay}
                            strokeWidth="2"
                            strokeMiterlimit="10"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </div>
                      <div
                        style={{
                          color: div2BtnPay,
                        }}
                        className={`flex justify-center`}
                      >
                        Tiền mặt
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <div className=" text-[14px] sm:text-[16px] lg:text-[16px] textSVNGilroy400">
                  <span className="text-[#D00]">
                    Tiền mặt:
                  </span>
                  Bạn sẽ thanh toán bằng tiền mặt cho nhân
                  viên khi giao hàng. Vui lòng kiểm tra số
                  lượng, tình trạng sản phẩm và số tiền
                  trong đơn hàng khi thanh toán.
                </div>
              </div>
            </div>

            <div className=" w-[100%] md:w-[100%] rounded-[15px]  bg-color lg:w-[100%] col-span-5 px-[20px] py-[32px] lg:p-[40px]">
              <div className="text-colorBlackbland text-[20px] textSVNGilroy600 mb-[16px]">
                Đơn hàng của bạn
              </div>
              <div className=" mb-[24px] w-[100%]">
                <div className="grid grid-cols-12 gap-x-[8px]">
                  <div className="col-span-7 lg:col-span-8">
                    <input
                      type="text"
                      placeholder="Nhập mã Voucher"
                      className="bg-color w-[100%]  h-[48px] px-[12px] rounded-full  border-solid border-2 border-[rgba(80, 80, 80, 0.50)]"
                    />
                  </div>
                  <div className="col-span-5  lg:col-span-4">
                    <div className=" w-[100%] h-[48px] bg-mainstream flex justify-center items-center rounded-full text-color textSVNGilroy600">
                      Áp dụng
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-linepayment w-[100%] h-[1px] mb-[40px]  sm:mb-[41px] lg:mb-[41px]"></div>
              <div className="mb-[44px]">
                <div className="text-colorBlack  mb-[16px]">
                  {products.map((product) => {
                    const formattedPrice =
                      product.price.toLocaleString();
                    return (
                      <div
                        key={product.id}
                        className="w-[285px]  mb-[49px]"
                      >
                        <div className="flex justify-end items-center gap-x-[44px]">
                          <div className="w-[28px] h-[64px]">
                            <img src={product.img} alt="" />
                          </div>
                          <div>
                            <div className="textSVNGilroy600 mb-[18px]">
                              {product.name}
                            </div>
                            <div className="flex">
                              <div className="flex w-[72px] rounded-full justify-between items-center  border-[2px] border-colorBlack mr-[13px] px-[12px]">
                                <div
                                  onClick={() =>
                                    decreaseQuantity(
                                      product.id,
                                      product.price
                                    )
                                  }
                                  className="textSVNGilroy600"
                                >
                                  -
                                </div>
                                <div className="textSVNGilroy600">
                                  {product.quantity}
                                </div>
                                <div
                                  onClick={() =>
                                    increaseQuantity(
                                      product.id,
                                      product.price
                                    )
                                  }
                                  className="textSVNGilroy600"
                                >
                                  +
                                </div>
                              </div>
                              <div className="textSVNGilroy600">
                                {formattedPrice}đ
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              <div className="bg-linepayment w-[100%] h-[1px] mb-[41px]"></div>
              <div className=" w-[100%] mb-[41px]">
                <div className="flex justify-between items-center mb-[12px]">
                  <div className="textSVNGilroy600">
                    Tổng
                  </div>
                  <div className="textSVNGilroy600">
                    {totalPrice.toLocaleString()}đ
                  </div>
                </div>
                <div className="flex justify-between items-center mb-[12px]">
                  <div className="textSVNGilroy600">
                    Giảm KM
                  </div>
                  <div className="text-[#D00] textSVNGilroy400">
                    0đ
                  </div>
                </div>
                <div className="flex justify-between items-center mb-[12px]">
                  <div className="textSVNGilroy600">
                    Giảm Voucher
                  </div>
                  <div className="text-[#D00] textSVNGilroy400">
                    0đ
                  </div>
                </div>
                <div className="flex justify-between items-center mb-[16px]">
                  <div className="textSVNGilroy600">
                    Phí giao hàng
                  </div>
                  <div className="text-[#D00] textSVNGilroy400">
                    0đ
                  </div>
                </div>
                <div className="flex sm:hidden lg:hidden w-[100%] bg-backgroundBtn justify-center items-center mb-[12px] rounded-full">
                  <div className="flex justify-center items-center h-[48px] gap-x-[32px]">
                    <div className="textSVNGilroy600 h-[100%] flex justify-center items-center text-color ">
                      THANH TOÁN
                    </div>
                    <div className="textSVNGilroy600 h-[100%] flex justify-center items-center text-color">
                      {totalPrice}đ
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Payment;
