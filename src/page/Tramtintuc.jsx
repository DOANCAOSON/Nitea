import { Link } from "react-router-dom";
import banner from "../img/tramtintuc.png";
import banner1 from "../img/tramtintuc1.png";
import Monitor from "../component/Monitor";

const Tramtintuc = () => {
  return (
    <div className="w-[100%] lg:w-[1200px] flex justify-center mt-[118px] sm:mt-[195px] lg:mt-[195px] mx-[auto] ">
      <div className="w-[100%]">
        <div className="flex w-[100%] items-center gap-x-[12px] mb-[32px]  sm:mb-[64px] lg:mb-[64px]">
          <div className="text1FTVRestiany text-[28px] sm:text-[40px] lg:text-[40px]  w-[218px] sm:w-[auto] lg:w-[auto]  leading-[56px] text-mainstream   px-[20px] sm:px-[0px] lg:px-[0px]  sm:whitespace-nowrap lg:whitespace-nowrap">
            Bản tin nóng hổi nhà Nitea
          </div>
          <div className="hidden sm:block lg:block w-[100%] h-[1px] bg-line"></div>
        </div>
        <div className="mb-[64px]">
          <div className="leading-[56px] text-colorBlack mb-[32px] px-[20px] lg:p-[0px]">
            <div className="text-[40px] textSVNGilroy600">
              Tin nổi bật
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-1  lg:grid-cols-12 gap-x-[28px] px-[20px] lg:p-[0px]">
            <div className="col-span-1 w-[100%] h-[auto] lg:col-span-8  mb-[24px]  ">
              <img src={banner} alt="" />
            </div>
            <div className="col-span-1  text-left  lg:col-span-4">
              <div className="flex items-center h-[20px]  gap-x-[8px] mb-[8px]">
                <div className="text-colorBlackbland textSVNGilroy400 mb-[2px] text-[16px]">
                  7/9/2023
                </div>
                <div className="h-[100%] w-[1px] bg-colorBlack textSVNGilroy400"></div>
                <div className="text-textmainstream textSVNGilroy400  text-[16px] ">
                  Sự kiện
                </div>
              </div>
              <div>
                <div className="textSVNGilroy600  text-colorBlack text-2xl font-semibold mb-[16px]">
                  GRAND OPENING - Free 100 ly Ô-long nhài
                  hạnh nhân
                </div>
                <div>
                  <p className="textSVNGilroy400 text-colorBlack text-base font-normal mb-[16px]">
                    Thông tin chi nhánh mới của thương hiệu
                    trà sữa Nitea toạ lạc ngay tại trung tâm
                    Đà Nẵng đã khiến giới trẻ háo hức săn
                    đón. Càng háo hức hơn khi Nitea quyết
                    định dành tặng 100 ly trà sữa miễn phí
                    vào ngày khai trương. Ngay từ 9h sáng,
                    hàng dài các tín đồ trà sữa đã xếp hàng
                    ...
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mb-[80px]">
          <div className="text-[40px] leading-[56px] text-colorBlack  mb-[32px] px-[20px]">
            <div className="textSVNGilroy600">
              Tin nổi bật
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2  lg:gap-[29px] sm:lg:gap-[29px] gap-y-[40px]  rounded-lg  px-[20px] ">
            <Link
              to="/detail"
              className=" w-[100%] md:w-[100%] lg:w-[100%]"
            >
              <div className="rounded-lg overflow-hidden mb-[32px] ">
                <img src={banner} />
              </div>
              <div className="flex items-center h-[20px] text-base gap-x-[8px] mb-[8px]">
                <div className="text-colorBlackbland text-[16px] textSVNGilroy400">
                  7/9/2023
                </div>
                <div className="h-[100%] w-[1px] bg-colorBlack"></div>
                <div className="text-textmainstream text-[16px] textSVNGilroy400 ">
                  Sự kiện
                </div>
              </div>
              <div>
                <div className="text-colorBlack text-2xl textSVNGilroy600 mb-[16px]">
                  GRAND OPENING - Free 100 ly Ô-long nhài
                  hạnh nhân
                </div>
                <div>
                  <p className=" text-colorBlack text-base textSVNGilroy400 mb-[16px]">
                    Thông tin chi nhánh mới của thương hiệu
                    trà sữa Nitea toạ lạc ngay tại trung tâm
                    Đà Nẵng đã khiến giới trẻ háo hức săn
                    đón. Càng háo hức hơn khi Nitea quyết
                    định dành tặng 100 ly trà sữa miễn phí
                    vào ngày khai trương. Ngay từ 9h sáng,
                    hàng dài các tín đồ trà sữa đã xếp hàng
                    ...
                  </p>
                </div>
              </div>
            </Link>

            <Link className=" w-[100%] md:w-[100%] lg:w-[100%]   ">
              <div className="rounded-s overflow-hidden mb-[20px] ">
                <img src={banner1} />
              </div>
              <div className="flex items-center h-[20px] gap-x-[8px] mb-[8px]">
                <div className="text-colorBlackbland textSVNGilroy400 text-[16px]">
                  7/9/2023
                </div>
                <div className="h-[100%] w-[1px] bg-colorBlack"></div>
                <div className="text-textmainstream textSVNGilroy400 text-[16px]">
                  Sự kiện
                </div>
              </div>
              <div>
                <div className="text-colorBlack text-2xl textSVNGilroy600 mb-[16px]">
                  GRAND OPENING - Free 100 ly Ô-long nhài
                  hạnh nhân
                </div>
                <div>
                  <p className="text-colorBlack text-base textSVNGilroy400 mb-[16px]">
                    Thông tin chi nhánh mới của thương hiệu
                    trà sữa Nitea toạ lạc ngay tại trung tâm
                    Đà Nẵng đã khiến giới trẻ háo hức săn
                    đón. Càng háo hức hơn khi Nitea quyết
                    định dành tặng 100 ly trà sữa miễn phí
                    vào ngày khai trương. Ngay từ 9h sáng,
                    hàng dài các tín đồ trà sữa đã xếp hàng
                    ...
                  </p>
                </div>
              </div>
            </Link>
            <Link
              to="/detail"
              className=" w-[100%] md:w-[100%] lg:w-[100%]"
            >
              <div className="rounded-lg overflow-hidden mb-[32px] ">
                <img src={banner} />
              </div>
              <div className="flex items-center h-[20px] text-base gap-x-[8px] mb-[8px]">
                <div className="text-colorBlackbland text-[16px] textSVNGilroy400">
                  7/9/2023
                </div>
                <div className="h-[100%] w-[1px] bg-colorBlack"></div>
                <div className="text-textmainstream text-[16px] textSVNGilroy400 ">
                  Sự kiện
                </div>
              </div>
              <div>
                <div className="text-colorBlack text-2xl textSVNGilroy600 mb-[16px]">
                  GRAND OPENING - Free 100 ly Ô-long nhài
                  hạnh nhân
                </div>
                <div>
                  <p className=" text-colorBlack text-base textSVNGilroy400 mb-[16px]">
                    Thông tin chi nhánh mới của thương hiệu
                    trà sữa Nitea toạ lạc ngay tại trung tâm
                    Đà Nẵng đã khiến giới trẻ háo hức săn
                    đón. Càng háo hức hơn khi Nitea quyết
                    định dành tặng 100 ly trà sữa miễn phí
                    vào ngày khai trương. Ngay từ 9h sáng,
                    hàng dài các tín đồ trà sữa đã xếp hàng
                    ...
                  </p>
                </div>
              </div>
            </Link>

            <Link className=" w-[100%] md:w-[100%] lg:w-[100%]   ">
              <div className="rounded-s overflow-hidden mb-[20px] ">
                <img src={banner1} />
              </div>
              <div className="flex items-center h-[20px] gap-x-[8px] mb-[8px]">
                <div className="text-colorBlackbland textSVNGilroy400 text-[16px]">
                  7/9/2023
                </div>
                <div className="h-[100%] w-[1px] bg-colorBlack"></div>
                <div className="text-textmainstream textSVNGilroy400 text-[16px]">
                  Sự kiện
                </div>
              </div>
              <div>
                <div className="text-colorBlack text-2xl textSVNGilroy600 mb-[16px]">
                  GRAND OPENING - Free 100 ly Ô-long nhài
                  hạnh nhân
                </div>
                <div>
                  <p className="text-colorBlack text-base textSVNGilroy400 mb-[16px]">
                    Thông tin chi nhánh mới của thương hiệu
                    trà sữa Nitea toạ lạc ngay tại trung tâm
                    Đà Nẵng đã khiến giới trẻ háo hức săn
                    đón. Càng háo hức hơn khi Nitea quyết
                    định dành tặng 100 ly trà sữa miễn phí
                    vào ngày khai trương. Ngay từ 9h sáng,
                    hàng dài các tín đồ trà sữa đã xếp hàng
                    ...
                  </p>
                </div>
              </div>
            </Link>
            <Link
              to="/detail"
              className=" w-[100%] md:w-[100%] lg:w-[100%]"
            >
              <div className="rounded-lg overflow-hidden mb-[32px] ">
                <img src={banner} />
              </div>
              <div className="flex items-center h-[20px] text-base gap-x-[8px] mb-[8px]">
                <div className="text-colorBlackbland text-[16px] textSVNGilroy400">
                  7/9/2023
                </div>
                <div className="h-[100%] w-[1px] bg-colorBlack"></div>
                <div className="text-textmainstream text-[16px] textSVNGilroy400 ">
                  Sự kiện
                </div>
              </div>
              <div>
                <div className="text-colorBlack text-2xl textSVNGilroy600 mb-[16px]">
                  GRAND OPENING - Free 100 ly Ô-long nhài
                  hạnh nhân
                </div>
                <div>
                  <p className=" text-colorBlack text-base textSVNGilroy400 mb-[16px]">
                    Thông tin chi nhánh mới của thương hiệu
                    trà sữa Nitea toạ lạc ngay tại trung tâm
                    Đà Nẵng đã khiến giới trẻ háo hức săn
                    đón. Càng háo hức hơn khi Nitea quyết
                    định dành tặng 100 ly trà sữa miễn phí
                    vào ngày khai trương. Ngay từ 9h sáng,
                    hàng dài các tín đồ trà sữa đã xếp hàng
                    ...
                  </p>
                </div>
              </div>
            </Link>

            <Link className=" w-[100%] md:w-[100%] lg:w-[100%]   ">
              <div className="rounded-s overflow-hidden mb-[20px] ">
                <img src={banner1} />
              </div>
              <div className="flex items-center h-[20px] gap-x-[8px] mb-[8px]">
                <div className="text-colorBlackbland textSVNGilroy400 text-[16px]">
                  7/9/2023
                </div>
                <div className="h-[100%] w-[1px] bg-colorBlack"></div>
                <div className="text-textmainstream textSVNGilroy400 text-[16px]">
                  Sự kiện
                </div>
              </div>
              <div>
                <div className="text-colorBlack text-2xl textSVNGilroy600 mb-[16px]">
                  GRAND OPENING - Free 100 ly Ô-long nhài
                  hạnh nhân
                </div>
                <div>
                  <p className="text-colorBlack text-base textSVNGilroy400 mb-[16px]">
                    Thông tin chi nhánh mới của thương hiệu
                    trà sữa Nitea toạ lạc ngay tại trung tâm
                    Đà Nẵng đã khiến giới trẻ háo hức săn
                    đón. Càng háo hức hơn khi Nitea quyết
                    định dành tặng 100 ly trà sữa miễn phí
                    vào ngày khai trương. Ngay từ 9h sáng,
                    hàng dài các tín đồ trà sữa đã xếp hàng
                    ...
                  </p>
                </div>
              </div>
            </Link>
          </div>
        </div>

        <div className="flex justify-center items-center space-x-2 mb-[100px]">
          <li>
            <a
              className="relative block rounded bg-transparent px-3 py-1.5 text-sm text-neutral-600 transition-all duration-300 hover:bg-neutral-100 dark:text-white dark:hover:bg-neutral-700 dark:hover:text-white"
              href="#"
              aria-label="Previous"
            >
              <span aria-hidden="true">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="13"
                  height="12"
                  viewBox="0 0 13 12"
                  fill="none"
                >
                  <path
                    d="M9.33986 2.06621V1.03094C9.33986 0.941211 9.23674 0.891658 9.1671 0.946568L3.1296 5.66219C3.0783 5.70209 3.03679 5.75317 3.00824 5.81154C2.97969 5.86992 2.96484 5.93404 2.96484 5.99902C2.96484 6.06401 2.97969 6.12813 3.00824 6.18651C3.03679 6.24488 3.0783 6.29596 3.1296 6.33585L9.1671 11.0515C9.23808 11.1064 9.33986 11.0568 9.33986 10.9671V9.93184C9.33986 9.86621 9.30906 9.80327 9.25817 9.76309L4.43674 5.99969L9.25817 2.23496C9.30906 2.19478 9.33986 2.13184 9.33986 2.06621Z"
                    fill="black"
                  />
                </svg>
              </span>
            </a>
          </li>
          <li className="px-[12px] py-[5px]  leading-[22px] bg-backgroundBtn text-white rounded-md hover:bg-backgroundBtn">
            1
          </li>
          <li className="px-[12px] py-[5px] leading-[22px] rounded-md hover:bg-backgroundBtn hover:text-white">
            2
          </li>
          <li className="px-[12px] py-[5px] leading-[22px] rounded-md hover:bg-backgroundBtn hover:text-white">
            3
          </li>
          <li className="px-[12px] py-[5px] leading-[22px] rounded-md hover:bg-backgroundBtn hover:text-white">
            ...
          </li>
          <li className="px-[12px] py-[5px] leading-[22px] rounded-md hover:bg-backgroundBtn hover:text-white">
            8
          </li>
          <li className="px-[12px] py-[5px] leading-[22px] rounded-md hover:bg-backgroundBtn hover:text-white">
            9
          </li>
          <li className="px-[12px] py-[5px] leading-[22px] rounded-md hover:bg-backgroundBtn hover:text-white">
            10
          </li>
          <li>
            <a
              className="relative block rounded bg-transparent px-3 py-1.5 text-sm text-neutral-600 transition-all duration-300 hover:bg-neutral-100 dark:text-white dark:hover:bg-neutral-700 dark:hover:text-white"
              href="#"
              aria-label="Next"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="13"
                height="12"
                viewBox="0 0 13 12"
                fill="none"
              >
                <path
                  d="M9.89777 5.66281L3.86027 0.947189C3.84449 0.934768 3.82553 0.92705 3.80557 0.924919C3.7856 0.922788 3.76544 0.926332 3.7474 0.935143C3.72936 0.943955 3.71417 0.957676 3.70357 0.974732C3.69298 0.991787 3.68741 1.01149 3.6875 1.03156V2.06683C3.6875 2.13246 3.7183 2.1954 3.7692 2.23558L8.59063 6.00031L3.7692 9.76505C3.71697 9.80522 3.6875 9.86817 3.6875 9.9338V10.9691C3.6875 11.0588 3.79063 11.1083 3.86027 11.0534L9.89777 6.33781C9.94908 6.29779 9.9906 6.24658 10.0191 6.1881C10.0477 6.12962 10.0625 6.06539 10.0625 6.00031C10.0625 5.93523 10.0477 5.87101 10.0191 5.81253C9.9906 5.75404 9.94908 5.70284 9.89777 5.66281Z"
                  fill="black"
                />
              </svg>
            </a>
          </li>
        </div>

        <Monitor />
      </div>
    </div>
  );
};

export default Tramtintuc;
