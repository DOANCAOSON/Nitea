const Login = () => {
  return (
    <div className="w-[100%] lg:w-[1095px] flex justify-center mt-[118px] sm:mt-[195px] lg:mt-[195px] mx-[auto] ">
      <div className="w-[100%]">
        <div className="mb-[80px]">
          <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-12 px-[20px] py-[32px]   lg:p-[40px]  rounded-lg bg-color  ">
            <div className="w-[100%] md:w-[100%] lg:w-[100%]  rounded-[15px] col-span-6 lg:col-span-5 ">
              <div className="text-mainstream text-[20px] lg:text-[28px] textSVNGilroy600 mb-[32px]">
                ĐĂNG NHẬP
              </div>
              <div className="w-[100%] textSVNGilroy400 mb-[16px]">
                <label
                  className="block mb-[8px] text-[16px] textSVNGilroy400"
                  htmlFor="email"
                >
                  Email
                </label>
                <input
                  type="text"
                  id="email"
                  name="email"
                  required
                  className="h-[48px] px-[12px] rounded-full w-[100%]  border-solid border-2 border-[rgba(80, 80, 80, 0.50)]"
                ></input>
              </div>
              <div className="w-[100%] textSVNGilroy400 mb-[24px]">
                <label
                  className="block mb-[8px] text-[16px] textSVNGilroy400"
                  htmlFor="password"
                >
                  Mật khẩu
                </label>
                <input
                  type="text"
                  id="password"
                  name="password"
                  required
                  className="h-[48px] px-[12px] rounded-full w-[100%] bg-color border-solid border-2 border-[rgba(80, 80, 80, 0.50)]"
                ></input>
              </div>
              <div className="flex justify-between mb-[32px]">
                <div className="flex items-center  ">
                  <input
                    type="checkbox"
                    id="savepassword"
                    name="savepassword"
                    required
                    className="h-[24px] px-[12px] rounded-full mr-[12px] bg-color border-solid border-2 border-[rgba(80, 80, 80, 0.50)]"
                  ></input>
                  <label
                    className="text-[14px] textSVNGilroy400 block  "
                    htmlFor="savepassword"
                  >
                    Nhớ mật khẩu
                  </label>
                </div>
                <div>
                  <div className="text-[14px] textSVNGilroy500 underline italic  ">
                    Quên mật khẩu ?
                  </div>
                </div>
              </div>
              <div>
                <div className="flex justify-end mb-[34px]">
                  <div className="bg-mainstream w-[185px] h-[56px] rounded-full flex justify-center items-center">
                    <span className="mr-[10px] text-color text-[16px] textSVNGilroy600">
                      Đăng nhập{" "}
                    </span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="25"
                      height="24"
                      viewBox="0 0 25 24"
                      fill="none"
                    >
                      <path
                        d="M20.25 11.7256L5.25 11.7256"
                        stroke="#4D4D4D"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M14.2012 5.70124L20.2512 11.7252L14.2012 17.7502"
                        stroke="#4D4D4D"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M20.25 11.7257H5.25M20.25 11.7257L14.2002 5.70129M20.25 11.7257L14.2002 17.7503"
                        stroke="white"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
            <div className="hidden sm:flex lg:flex col-span-1  justify-center items-center ">
              <div className="w-[1px] h-[100%] bg-loginline"></div>
            </div>

            <div className=" w-[100%] md:w-[100%] lg:w-[100%] col-span-6  bg-color rounded-[15px]">
              <h1 className=" text-[20px] sm:text-[28px] lg:text-[28px] text-mainstream textSVNGilroy500 mb-[8px]">
                Chưa phải là thành viên?
              </h1>
              <p className="textSVNGilroy400  text-[14px] sm:text-[16px] lg:text-[16px] text-[#505050] mb-[32px] sm:mb-[48px] lg:mb-[48px]">
                Tham gia NiteaMembership ngay để tham gia
                nhiều chương trình ưu đãi hấp dẫn.
              </p>
              <ul className="px-[32px] mb-[34px] text-[14px] sm:text-[16px] lg:text-[16px] textSVNGilroy400 ">
                <li className="list-disc">
                  Với tài khoản Nitea Membership, bạn có thể
                  nhận Thẻ NiteaMembership, quản lý tài
                  khoản và tham gia các chương trình đặc
                  biệt của NiteaMembership.
                </li>
                <li className="list-disc">
                  Thanh toán với thẻ NiteaMembership tại
                  quán để nhân được sao.
                </li>
                <li className="list-disc">
                  Nhận một sao cho mỗi 20,000VND bạn sử dụng
                  .
                </li>
                <li className="list-disc">
                  Nhận sao và nâng cấp hạng thành viên để
                  được nhiều ưu đãi hơn.
                </li>
              </ul>

              <div className="grid grid-cols-12 md:grid-cols-12  lg:grid-cols-12 gap-x-[30px] mb-[50px] ">
                <div className="col-span-6 lg:col-span-4 mb-[28px] flex ">
                  <div className="">
                    <div className="w-[44px] h-[44px] textSVNGilroy600  rounded-full text-center text-[24px] bg-[#FAE3D7]">
                      1.
                    </div>
                  </div>
                  <div>
                    <p className="text-[14px] textSVNGilroy600">
                      Thanh toán với NiteaMembershipF
                    </p>
                  </div>
                </div>
                <div className=" col-span-6 lg:col-span-4 mb-[28px] flex">
                  <div className="">
                    <div className="w-[44px] h-[44px]  textSVNGilroy600 rounded-full text-center text-[24px] bg-[#FAE3D7]">
                      2.
                    </div>
                  </div>
                  <div>
                    <p className="text-[14px] textSVNGilroy600">
                      Nhận nước và bánh miễn phí
                    </p>
                  </div>
                </div>
                <div className=" col-span-6 lg:col-span-4 mb-[28px] flex ">
                  <div className="">
                    <div className="w-[44px] h-[44px] textSVNGilroy600  rounded-full text-center text-[24px] bg-[#FAE3D7]">
                      3.
                    </div>
                  </div>
                  <div>
                    <p className="text-[14px] textSVNGilroy600">
                      Nhận ưu đãi độc quyền
                    </p>
                  </div>
                </div>
              </div>
              <div>
                <div className="flex justify-end mb-[34px]">
                  <div className="w-[185px] h-[56px] border  border-textmainstream  rounded-full flex justify-center items-center">
                    <span className="mr-[10px]  text-backgroundBtn text-[16px] textSVNGilroy600">
                      Đăng nhập{" "}
                    </span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="25"
                      height="24"
                      viewBox="0 0 25 24"
                      fill="none"
                    >
                      <path
                        d="M20.25 11.7256L5.25 11.7256"
                        stroke="#4D4D4D"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M14.2012 5.70124L20.2512 11.7252L14.2012 17.7502"
                        stroke="#4D4D4D"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M20.25 11.7257H5.25M20.25 11.7257L14.2002 5.70129M20.25 11.7257L14.2002 17.7503"
                        stroke="#B26135"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
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

export default Login;
