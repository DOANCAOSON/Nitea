import { Link } from "react-router-dom";
import banner from "../img/tramtintuc.png";
import banner1 from "../img/tramtintuc1.png";
import Image from "../img/Image.png";
import Monitor from "../component/Monitor";

const Detail = () => {
  return (
    <div className="w-[100%] lg:w-[1200px] flex justify-center mt-[118px] sm:mt-[195px] lg:mt-[195px] mx-[auto] ">
      <div className="w-[100%]">
        <div className="mb-[64px]">
          <div className="text-[40px] leading-[56px] text-colorBlack font-semibold mb-[32px] px-[20px] lg:p-[0px]"></div>
          <div className=" gap-x-[28px] px-[20px] lg:p-[0px]">
            <div className="text-left  lg:col-span-4">
              <div className="flex items-center justify-center h-[20px] gap-x-[8px] mb-[8px]">
                <div className="text-colorBlackbland mb-[3px] text-center">
                  7/9/2023
                </div>
                <div className="h-[100%] w-[1px] bg-colorBlack"></div>
                <div className="text-textmainstream">
                  Sự kiện
                </div>
              </div>
              <div>
                <div className="textSVNGilroy600 text-colorBlack text-2xl font-semibold mb-[64px] text-[28px] leading-[39px] lg:text-[40px] sm:text-[40px]  text-center">
                  GRAND OPENING - Free 100 ly Ô-long nhài
                  hạnh nhân
                </div>
              </div>
            </div>
            <div className="w-[100%] ">
              <img src={banner} alt="" />
            </div>
          </div>
        </div>

        <div className="px-[20px]">
          <div className="mb-[80px] w-[100%] lg:w-[790px] mx-auto">
            <div className="textSVNGilroy600 text-[40px] leading-[56px] text-colorBlack font-semibold mb-[24px]  lg:px-[0px] sm:px-[20px]">
              Giới thiệu
            </div>
            <div className="mb-[48px]">
              <div>
                <p className="textSVNGilroy400">
                  Thông tin chi nhánh mới của thương hiệu
                  trà sữa Nitea toạ lạc ngay tại trung tâm
                  Đà Nẵng đã khiến giới trẻ háo hức săn đón.
                  Càng háo hức hơn khi Nitea quyết định dành
                  tặng 100 ly trà sữa miễn phí vào ngày khai
                  trương. Ngay từ 9h sáng, hàng dài các tín
                  đồ trà sữa đã xếp hàng ...F
                </p>
              </div>
            </div>

            <div className="mb-[68px]">
              <div>
                <img src={Image} alt="" />
              </div>
            </div>

            <div className="mb-[16px]">
              <div>
                <p className="textSVNGilroy600">
                  Dolor enim eu tortor urna sed duis nulla.
                  Aliquam vestibulum, nulla odio nisl vitae.
                  In aliquet pellentesque aenean hac
                  vestibulum turpis mi bibendum diam. Tempor
                  integer aliquam in vitae malesuada
                  fringilla.
                </p>
              </div>
            </div>
            <div className="mb-[36px]">
              <div>
                <p className="textSVNGilroy400">
                  Elit nisi in eleifend sed nisi. Pulvinar
                  at orci, proin imperdiet commodo
                  consectetur convallis risus. Sed
                  condimentum enim dignissim adipiscing
                  faucibus consequat, urna. Viverra purus et
                  erat auctor aliquam. Risus, volutpat
                  vulputate posuere purus sit congue
                  convallis aliquet. Arcu id augue ut
                  feugiat donec porttitor neque. Mauris,
                  neque ultricies eu vestibulum, bibendum
                  quam lorem id. Dolor lacus, eget nunc
                  lectus in tellus, pharetra, porttitor.
                </p>
              </div>
            </div>

            <div className="mb-[32px]">
              <div className="border-l-4 border-colorBlack pl-[24px]">
                <p className="textSVNGilroy400">
                  "Ipsum sit mattis nulla quam nulla.
                  Gravida id gravida ac enim mauris id. Non
                  pellentesque congue eget consectetur
                  turpis. Sapien, dictum molestie sem
                  tempor. Diam elit, orci, tincidunt aenean
                  tempus."
                </p>
              </div>
            </div>
            <div className="mb-[40px]">
              <div>
                <p className="textSVNGilroy400">
                  Tristique odio senectus nam posuere ornare
                  leo metus, ultricies. Blandit duis
                  ultricies vulputate morbi feugiat cras
                  placerat elit. Aliquam tellus lorem sed
                  ac. Montes, sed mattis pellentesque
                  suscipit accumsan. Cursus viverra aenean
                  magna risus elementum faucibus molestie
                  pellentesque. Arcu ultricies sed mauris
                  vestibulum.
                </p>
              </div>
            </div>
            <div className="textSVNGilroy600 text-[40px] leading-[56px] text-colorBlack font-semibold mb-[20px]  lg:px-[0px] sm:px-[20px]">
              Kết bài
            </div>

            <div className="mb-[16px]">
              <div>
                <p className="textSVNGilroy400">
                  Morbi sed imperdiet in ipsum, adipiscing
                  elit dui lectus. Tellus id scelerisque est
                  ultricies ultricies. Duis est sit sed leo
                  nisl, blandit elit sagittis. Quisque
                  tristique consequat quam sed. Nisl at
                  scelerisque amet nulla purus habitasse.
                </p>
              </div>
            </div>
            <div className="mb-[16px]">
              <div>
                <p className="textSVNGilroy400">
                  Nunc sed faucibus bibendum feugiat sed
                  interdum. Ipsum egestas condimentum mi
                  massa. In tincidunt pharetra consectetur
                  sed duis facilisis metus. Etiam egestas in
                  nec sed et. Quis lobortis at sit dictum
                  eget nibh tortor commodo cursus.
                </p>
              </div>
            </div>

            <div className="mb-[48px]">
              <div>
                <p className="textSVNGilroy400">
                  Odio felis sagittis, morbi feugiat tortor
                  vitae feugiat fusce aliquet. Nam elementum
                  urna nisi aliquet erat dolor enim. Ornare
                  id morbi eget ipsum. Aliquam senectus
                  neque ut id eget consectetur dictum. Donec
                  posuere pharetra odio consequat
                  scelerisque et, nunc tortor. Nulla
                  adipiscing erat a erat. Condimentum lorem
                  posuere gravida enim posuere cursus diam.
                </p>
              </div>
            </div>
            <div className="mb-[20px]">
              <div>
                <p className="textSVNGilroy600 text-center font-semibold text-[20px] ">
                  Chia sẻ bài
                </p>
              </div>
            </div>
            <div className="mb-[104px]">
              <div className="flex justify-center gap-x-[16px]">
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M20.9999 7.66008V8.00008C21.0007 9.06616 20.576 10.0885 19.8199 10.84L16.9999 13.67C16.4738 14.1911 15.6261 14.1911 15.1 13.67L15 13.56C14.8094 13.3656 14.8094 13.0544 15 12.86L18.4399 9.42006C18.807 9.03938 19.0083 8.52883 18.9999 8.00008V7.66008C19.0003 7.12705 18.788 6.61589 18.4099 6.2401L17.7599 5.59011C17.3841 5.21207 16.873 4.99969 16.3399 5.00011H15.9999C15.4669 4.99969 14.9558 5.21207 14.58 5.59011L11.14 9.00007C10.9456 9.19064 10.6344 9.19064 10.44 9.00007L10.33 8.89007C9.8089 8.36394 9.8089 7.51623 10.33 6.99009L13.16 4.15012C13.9165 3.40505 14.9382 2.99133 15.9999 3.00014H16.3399C17.4011 2.9993 18.4191 3.42018 19.1699 4.17012L19.8299 4.83012C20.5798 5.5809 21.0007 6.59891 20.9999 7.66008ZM8.64993 13.94L13.9399 8.65008C14.0338 8.55543 14.1616 8.50218 14.2949 8.50218C14.4282 8.50218 14.556 8.55543 14.6499 8.65008L15.3499 9.35007C15.4445 9.44395 15.4978 9.57175 15.4978 9.70507C15.4978 9.83839 15.4445 9.96618 15.3499 10.0601L10.0599 15.35C9.96604 15.4447 9.83824 15.4979 9.70492 15.4979C9.57161 15.4979 9.44381 15.4447 9.34993 15.35L8.64993 14.65C8.55528 14.5561 8.50204 14.4283 8.50204 14.295C8.50204 14.1617 8.55528 14.0339 8.64993 13.94ZM13.5599 15C13.3655 14.8094 13.0543 14.8094 12.8599 15L9.42993 18.41C9.0517 18.7905 8.53645 19.003 7.99995 18.9999H7.65995C7.12691 19.0004 6.61576 18.788 6.23997 18.41L5.58997 17.76C5.21194 17.3842 4.99956 16.873 4.99998 16.34V16C4.99956 15.4669 5.21194 14.9558 5.58997 14.58L9.00993 11.14C9.2005 10.9456 9.2005 10.6345 9.00993 10.44L8.89993 10.33C8.3738 9.80894 7.52609 9.80894 6.99996 10.33L4.17999 13.16C3.42392 13.9116 2.99916 14.9339 3 16V16.35C3.00182 17.4077 3.42249 18.4216 4.16999 19.1699L4.82998 19.8299C5.58076 20.5799 6.59878 21.0008 7.65995 20.9999H7.99995C9.05338 21.0061 10.0667 20.5964 10.8199 19.8599L13.6699 17.01C14.191 16.4838 14.191 15.6361 13.6699 15.11L13.5599 15Z"
                      fill="black"
                    />
                  </svg>
                </div>
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <path
                      d="M22 12.3038C22 6.74719 17.5229 2.24268 12 2.24268C6.47715 2.24268 2 6.74719 2 12.3038C2 17.3255 5.65684 21.4879 10.4375 22.2427V15.2121H7.89844V12.3038H10.4375V10.0872C10.4375 7.56564 11.9305 6.1728 14.2146 6.1728C15.3088 6.1728 16.4531 6.36931 16.4531 6.36931V8.84529H15.1922C13.95 8.84529 13.5625 9.6209 13.5625 10.4166V12.3038H16.3359L15.8926 15.2121H13.5625V22.2427C18.3432 21.4879 22 17.3257 22 12.3038Z"
                      fill="black"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mb-[116px]">
          <div className="text-[40px] text-center mb-[64px] text-textmainstream font-normal">
            Tin tức liên quan
          </div>
          <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2  lg:gap-[29px] sm:lg:gap-[29px] gap-y-[40px]  rounded-lg  px-[20px] ">
            <Link
              to="/detail"
              className=" w-[100%] md:w-[100%] lg:w-[100%]   "
            >
              <div className="rounded-lg overflow-hidden mb-[32px] ">
                <img
                  src={banner}
                  className="hoverbgscaleitem hover:ease-in transition duration-500"
                />
              </div>
              <div className="flex items-center h-[20px] text-base gap-x-[8px] mb-[8px]">
                <div className="text-colorBlackbland textSVNGilroy400">
                  7/9/2023
                </div>
                <div className="h-[100%] w-[1px] bg-colorBlack"></div>
                <div className="text-textmainstream textSVNGilroy400  ">
                  Sự kiện
                </div>
              </div>
              <div>
                <div className="textSVNGilroy600 text-colorBlack text-2xl font-semibold mb-[16px]">
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
                <div>
                  <p className="underline textSVNGilroy500">
                    Xem thêm
                  </p>
                </div>
              </div>
            </Link>

            <Link className=" w-[100%] md:w-[100%] lg:w-[100%]   ">
              <div className="rounded-s overflow-hidden mb-[20px] ">
                <img
                  src={banner1}
                  className="hoverbgscaleitem hover:ease-in transition duration-500"
                />
              </div>
              <div className="flex items-center h-[20px] gap-x-[8px] mb-[8px]">
                <div className="text-colorBlackbland textSVNGilroy400">
                  7/9/2023
                </div>
                <div className="h-[100%] w-[1px] bg-colorBlack textSVNGilroy400"></div>
                <div className="text-textmainstream">
                  Sự kiện
                </div>
              </div>
              <div>
                <div className="textSVNGilroy600 text-colorBlack text-2xl font-semibold mb-[16px]">
                  Món mới cùng Nitea – Ưu đãi đặc chỉ có tại
                  ngày mở bán món mới !!!
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
                <div>
                  <p className="underline textSVNGilroy500">
                    Xem thêm
                  </p>
                </div>
              </div>
            </Link>
          </div>
        </div>

        <Monitor />
      </div>
    </div>
  );
};

export default Detail;
