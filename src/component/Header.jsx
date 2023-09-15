import { Link } from "react-router-dom";
import { useState } from "react";
import logorps from "../img/logorps.png";

const Header = () => {
  const apifake = [
    {
      id: 1,
      name: "Nitea là...",
    },
    {
      id: 2,
      name: "Món ngon Nitea",
    },
    {
      id: 3,
      name: "Trạm tin tức",
    },
    {
      id: 4,
      name: "Nitea tìm người thân",
    },
  ];

  const [categories, setCategories] = useState(apifake);

  console.log(categories);
  return (
    <div className=" w-[100%] h-[auto]">
      <div className="w-[100%] bg-colorBlack sm:bg-headerbackgrou lg:bg-headerbackgrou py-4 px-[20px] sm:px-[0px] lg:px-[0px]">
        <div>
          <div className="flex items-center text-center justify-between w-[100%] md:w-[100%] lg:w-[1200px]  sm:pt-[12px]  lg:pt-[12px] m-auto text-[#333333] ">
            <div className="flex w-[100%] md:w-[100%] lg:w-[10%]">
              <div>
                <div className="w-[100%] h-[100%] rounded-full text-[32px] ">
                  <Link to="/">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="56"
                      height="69"
                      viewBox="0 0 56 69"
                      fill="none"
                      className="hidden lg:block sm:block"
                    >
                      <g clipPath="url(#clip0_443_408)">
                        <path
                          d="M41.2464 7.35936C41.2464 7.35936 35.6464 5.76295 30.4369 6.92548C30.4369 6.92548 31.3146 3.73597 27.2231 0.304688C27.2231 0.304688 25.4476 6.21008 25.0872 9.54531L20.8889 30.971C20.8889 30.971 16.2099 46.5641 20.8889 52.1582C20.8889 52.1582 22.6877 54.5396 23.7689 54.6588L23.8791 67.8904C23.8791 67.8904 29.9063 70.3943 30.7306 67.8904C30.7306 67.8904 30.0097 64.5155 26.6624 66.4596L27.0228 55.3179C27.0228 55.3179 33.5105 58.8949 39.8981 56.2883C39.9682 57.9212 40.0383 59.5507 40.1051 61.1835C40.1751 62.8329 39.9248 64.4856 40.1351 66.1317C40.2319 66.8836 40.3253 67.6189 40.9794 68.0428C41.6669 68.4899 47.1835 69.3113 47.1601 67.8408C47.1601 67.8408 47.1101 64.7738 43.1954 65.9496C43.1954 65.9496 43.0919 56.3347 43.0919 56.2883C43.0919 56.2353 43.5925 55.7783 43.6426 55.712C44.1565 55.0397 44.3601 54.2415 44.557 53.4433C45.3914 50.0418 45.8052 46.5741 45.7885 43.0765C45.7718 39.1286 45.0343 35.2733 44.8474 31.3519L44.4068 22.0715C44.4068 22.0715 50.7945 22.4988 55.2598 20.6374C55.2598 20.6374 46.8297 16.5602 46.0355 12.9865L43.4424 1.25856C43.4424 1.25525 40.4254 3.52069 41.2464 7.35936Z"
                          fill="#BA5B31"
                        />
                        <path
                          d="M40.7728 13.5298C40.7862 13.4205 41.0465 10.8768 39.5814 10.645C39.4779 10.6085 39.221 10.5489 38.9373 10.7211C38.4334 11.0258 38.1597 11.9069 38.1263 13.341L38.6336 13.3509C38.6736 11.6717 39.0341 11.2577 39.1909 11.1583C39.3044 11.0822 39.3978 11.1186 39.4112 11.1219L39.4813 11.1418C40.4791 11.2742 40.2689 13.4536 40.2655 13.4768L40.7728 13.5298Z"
                          fill="black"
                        />
                        <path
                          d="M34.8217 13.5363C34.835 13.4535 35.1087 11.5061 34.3544 10.6383C34.1108 10.3568 33.7904 10.2144 33.4033 10.2144C33.3833 10.2144 32.906 10.221 32.5289 10.6681C32.0751 11.2047 31.9583 12.1188 32.1819 13.384L32.6824 13.2979C32.4388 11.9267 32.6724 11.2941 32.9094 11.0059C33.133 10.7343 33.3966 10.7211 33.41 10.7211C33.6403 10.7211 33.8238 10.8006 33.9706 10.9695C34.4712 11.5425 34.3912 12.9634 34.3211 13.4635L34.8217 13.5363Z"
                          fill="black"
                        />
                        <path
                          d="M54.6751 22.0549C53.9434 22.0549 53.3502 21.4662 53.3502 20.7401C53.3502 20.0139 53.9434 19.4252 54.6751 19.4252C55.4068 19.4252 56 20.0139 56 20.7401C56 21.4662 55.4068 22.0549 54.6751 22.0549Z"
                          fill="#050505"
                        />
                        <path
                          d="M22.6876 28.4406C21.5029 27.9372 20.3215 27.4338 19.1367 26.927C17.5315 26.2447 15.2521 25.9798 14.5479 24.2608C14.2476 23.5288 14.2342 22.7207 14.2743 21.9391C14.3277 20.8328 14.4712 19.7266 14.7248 18.6436C14.7548 18.521 14.7882 18.3918 14.8883 18.309C15.0619 18.1633 15.3489 18.2296 15.5324 18.362C15.9329 18.6502 16.043 19.1371 16.2466 19.5444C16.4135 19.8756 16.6771 20.2002 17.0576 20.2897C17.4247 20.3758 17.8385 20.2102 18.0421 19.9121C18.2457 19.6173 18.239 19.2166 18.0554 18.9118C17.9253 18.6966 17.665 18.5111 17.4047 18.5707C17.3012 18.5939 17.2111 18.6535 17.111 18.6833C16.864 18.7562 16.587 18.6303 16.4402 18.4349C16.2933 18.2395 16.2566 17.9911 16.2666 17.7526C16.2833 17.3585 16.4268 16.9577 16.7305 16.6795C17.0342 16.4013 17.5115 16.2721 17.9119 16.4146C18.3124 16.557 18.5727 17.0041 18.4259 17.3717C18.3291 17.6135 18.0888 17.7924 18.0054 18.0408C17.8819 18.4183 18.219 18.8423 18.6428 18.9152C19.0666 18.988 19.5038 18.7628 19.7441 18.4349C19.9844 18.107 20.0511 17.693 20.0278 17.2956C19.971 16.2986 19.3169 15.3183 18.3191 14.9274C17.3212 14.5366 16.0264 14.8347 15.439 15.6727C15.0252 14.7022 15.1787 13.543 15.8261 12.6885C15.9663 12.503 16.1298 12.3308 16.2199 12.1221C16.31 11.9135 16.3167 11.6518 16.1565 11.4829C16.0564 11.3769 15.9062 11.3206 15.756 11.2941C15.1186 11.1848 14.4712 11.579 14.1675 12.1056C13.8638 12.6322 13.8371 13.2582 13.8938 13.8543C13.9506 14.4505 14.084 15.0401 14.0674 15.6395C13.6402 15.3944 13.3732 14.9573 13.2597 14.5035C13.1463 14.0497 13.1763 13.5761 13.2297 13.1157C13.2731 12.7349 13.2898 12.2579 12.926 12.0691C12.5956 11.8969 12.1618 12.1155 12.0116 12.4037C11.9048 12.609 11.8948 12.8408 11.8981 13.0661C11.9115 13.9405 12.115 14.9241 12.649 15.666C12.7458 15.8018 12.8559 15.931 12.9126 16.0867C12.9827 16.2854 12.9494 16.504 12.916 16.7126C12.5856 18.8456 12.5289 21.0117 12.6557 23.1678C12.6957 23.8733 12.7591 24.592 13.0595 25.2412C13.4767 26.1454 14.3076 26.831 15.1854 27.3874C17.6149 28.9242 20.0945 30.3152 22.8945 31.2128"
                          fill="#BA5B31"
                        />
                        <path
                          d="M1.92929 34.9919C3.07064 36.8532 5.18984 38.506 6.88185 39.8208C10.4428 42.593 14.6945 44.567 19.3066 44.3882V42.3976C13.9236 41.3709 11.5441 36.0352 10.1157 31.3519C9.46492 29.219 8.73739 26.98 7.80295 24.8272C6.29782 21.3561 4.26874 18.1236 1.19174 15.9509C1.19174 15.9509 0.921421 17.4214 1.19174 20.0247C1.40533 22.0881 0.837988 24.0091 0.407475 25.9731C0.267307 26.6024 0.143827 27.235 0.0637321 27.8809C-0.246637 30.3583 0.651096 32.9053 1.92929 34.9919Z"
                          fill="#BA5B31"
                        />
                        <path
                          d="M27.9129 37.8236C27.9163 37.8899 27.9163 37.9561 27.9196 38.0224C27.983 40.2514 28.0531 42.54 28.6371 44.7061C28.6839 44.8783 28.7139 45.1035 28.8073 45.2559C29.0443 45.6599 29.3814 45.5838 29.8719 45.6103C30.7096 45.6633 31.5439 45.7162 32.3816 45.7726C33.0023 45.8123 33.6197 45.8587 34.2371 45.905H34.2638C34.9513 45.9547 35.5887 45.554 35.819 44.9214C36.0893 44.1728 36.3497 43.421 36.61 42.6625C36.62 42.6294 36.63 42.5996 36.64 42.5698C37.184 40.9568 37.6846 39.324 38.1051 37.6812C38.1518 37.5024 38.1985 37.3202 38.2419 37.1413C38.6257 35.6079 38.9361 34.0678 39.153 32.5177C39.163 32.4515 39.1697 32.3819 39.1797 32.3157V32.3024L36.5032 31.9083L34.6943 31.6433L27.9764 30.653L27.9563 30.6497C27.953 30.7391 27.953 30.8352 27.9463 30.9246C27.8295 33.2199 27.8495 35.5251 27.9129 37.8236Z"
                          fill="#F4BD5D"
                        />
                        <path
                          d="M33.4225 33.6478C30.2525 33.2146 27.7943 32.0599 27.9318 31.0687C28.0693 30.0774 30.7505 29.6249 33.9205 30.0581C37.0904 30.4912 39.5487 31.6459 39.4112 32.6372C39.2736 33.6285 36.5924 34.0809 33.4225 33.6478Z"
                          fill="#D89E52"
                        />
                        <path
                          d="M35.4078 25.0623L34.6702 24.9166C34.3832 24.8603 34.1162 25.0756 34.1096 25.3637L33.9761 33.6438L34.9372 33.9154L35.7849 25.5657C35.8083 25.3273 35.6447 25.1087 35.4078 25.0623Z"
                          fill="#FFD28A"
                        />
                        <path
                          d="M36.6938 34.1109C37.0409 34.1109 37.388 34.0877 37.7284 34.0347C38.249 33.9552 38.9165 33.6604 39.1568 33.2C39.2869 32.9549 39.2836 32.68 39.1468 32.4085C39.0934 32.2992 39.0166 32.1866 38.9198 32.0739C38.2857 31.342 37.3513 30.981 36.5303 30.6597C36.3801 30.6001 36.23 30.5438 36.0865 30.4842C34.7415 29.9344 33.3499 29.6528 31.9415 29.6528C31.3975 29.6528 28.7844 29.8681 28.2938 30.2159C28.0969 30.355 27.9968 30.5438 28.0035 30.7624C28.0202 31.3883 28.8645 32.0508 29.0881 32.1932C30.0025 32.7728 31.1339 33.051 32.1351 33.2961C32.3286 33.3425 32.5222 33.3921 32.7091 33.4385C33.8905 33.7465 35.3055 34.1109 36.6938 34.1109ZM31.9282 29.9079C33.2965 29.9045 34.6714 30.1794 35.9897 30.7193C36.1332 30.7789 36.2834 30.8385 36.4369 30.8949C37.2312 31.2029 38.1356 31.5539 38.7263 32.2395C38.8097 32.3356 38.8731 32.4283 38.9165 32.5211C39.0166 32.7231 39.0199 32.9086 38.9265 33.0841C38.7363 33.4484 38.1556 33.7134 37.685 33.7863C36.0397 34.0413 34.2276 33.5743 32.7725 33.1967C32.5856 33.147 32.3921 33.1007 32.1952 33.0543C31.1673 32.8026 30.1027 32.5409 29.225 31.9845C28.9046 31.7792 28.2671 31.1929 28.2571 30.7591C28.2538 30.6233 28.3139 30.514 28.4407 30.4245C28.8345 30.1463 31.2707 29.9079 31.9282 29.9079Z"
                          fill="black"
                        />
                        <path
                          d="M37.5103 33.9717C36.8947 33.9717 36.3957 33.4765 36.3957 32.8655C36.3957 32.2546 36.8947 31.7593 37.5103 31.7593C38.1259 31.7593 38.625 32.2546 38.625 32.8655C38.625 33.4765 38.1259 33.9717 37.5103 33.9717Z"
                          fill="black"
                        />
                        <path
                          d="M36.3931 32.1104C35.8346 32.1104 35.3819 31.6611 35.3819 31.1068C35.3819 30.5526 35.8346 30.1033 36.3931 30.1033C36.9516 30.1033 37.4043 30.5526 37.4043 31.1068C37.4043 31.6611 36.9516 32.1104 36.3931 32.1104Z"
                          fill="black"
                        />
                        <path
                          d="M34.3863 31.9746C33.8371 31.9746 33.3918 31.5327 33.3918 30.9876C33.3918 30.4425 33.8371 30.0006 34.3863 30.0006C34.9356 30.0006 35.3809 30.4425 35.3809 30.9876C35.3809 31.5327 34.9356 31.9746 34.3863 31.9746Z"
                          fill="black"
                        />
                        <path
                          d="M32.6559 31.3188C32.1066 31.3188 31.6614 30.8769 31.6614 30.3318C31.6614 29.7867 32.1066 29.3448 32.6559 29.3448C33.2051 29.3448 33.6504 29.7867 33.6504 30.3318C33.6504 30.8769 33.2051 31.3188 32.6559 31.3188Z"
                          fill="black"
                        />
                        <path
                          d="M30.8531 30.9876C30.3039 30.9876 29.8586 30.5457 29.8586 30.0006C29.8586 29.4555 30.3039 29.0136 30.8531 29.0136C31.4024 29.0136 31.8477 29.4555 31.8477 30.0006C31.8477 30.5457 31.4024 30.9876 30.8531 30.9876Z"
                          fill="black"
                        />
                        <path
                          d="M35.2779 33.9717C34.6623 33.9717 34.1633 33.4765 34.1633 32.8655C34.1633 32.2546 34.6623 31.7593 35.2779 31.7593C35.8935 31.7593 36.3926 32.2546 36.3926 32.8655C36.3926 33.4765 35.8935 33.9717 35.2779 33.9717Z"
                          fill="black"
                        />
                        <path
                          d="M31.2545 32.8655C30.6389 32.8655 30.1398 32.3703 30.1398 31.7593C30.1398 31.1483 30.6389 30.6531 31.2545 30.6531C31.8701 30.6531 32.3691 31.1483 32.3691 31.7593C32.3691 32.3703 31.8701 32.8655 31.2545 32.8655Z"
                          fill="black"
                        />
                        <path
                          d="M29.4576 32.2131C28.842 32.2131 28.3429 31.7178 28.3429 31.1068C28.3429 30.4959 28.842 30.0006 29.4576 30.0006C30.0732 30.0006 30.5723 30.4959 30.5723 31.1068C30.5723 31.7178 30.0732 32.2131 29.4576 32.2131Z"
                          fill="black"
                        />
                        <path
                          d="M33.2057 33.3226C32.59 33.3226 32.091 32.8273 32.091 32.2163C32.091 31.6054 32.59 31.1101 33.2057 31.1101C33.8213 31.1101 34.3203 31.6054 34.3203 32.2163C34.3203 32.8273 33.8213 33.3226 33.2057 33.3226Z"
                          fill="black"
                        />
                        <path
                          d="M44.84 34.3261C46.3051 35.3528 46.3585 37.4328 45.631 38.857C44.7199 40.6389 42.8009 41.351 40.8853 41.4967C40.7719 41.5066 40.655 41.5133 40.5416 41.5166C38.8596 41.5729 37.1876 41.0595 35.8126 40.099C35.4755 39.8639 35.1318 39.6519 34.8648 39.3439C34.8114 39.2809 34.758 39.2114 34.7413 39.1352C34.6579 38.7311 34.7347 38.2873 34.6512 37.8733C34.6045 37.6348 34.5411 37.3202 34.3542 37.1447C34.1239 36.9294 33.7702 36.9658 33.7835 37.3301C33.7969 37.7673 33.907 38.2078 34.0005 38.6318C33.8002 37.721 33.3297 36.8333 32.5654 36.2703C32.3118 36.0848 32.1149 36.3067 32.1249 36.575C32.1316 36.7538 32.2751 36.9526 32.3552 37.1082C32.5854 37.5587 32.8157 38.0455 33.1461 38.433C32.8691 38.1052 32.6288 37.7309 32.3385 37.4063C32.1583 37.2043 31.958 36.9691 31.7177 36.8333C31.5208 36.724 31.1804 36.734 31.107 36.989C31.057 37.1712 31.2138 37.3301 31.3139 37.4659C31.7411 38.0389 32.2651 38.5457 32.8257 38.9895C32.8257 38.9895 31.1938 37.9694 30.7299 37.9462C30.4829 37.9329 30.3528 38.2542 30.4129 38.4496C30.4963 38.7212 31.0102 38.9497 31.2472 39.0855C31.691 39.3372 32.1583 39.5459 32.6422 39.7115C32.6422 39.7115 31.3373 39.1551 30.7766 39.3008C30.7766 39.3008 30.4829 39.4233 30.6298 39.7115C30.6298 39.7115 30.9602 40.417 32.6522 40.6786C33.2195 40.7647 33.016 41.0065 33.3263 41.4834C35.5857 44.9412 40.3447 45.1863 43.9523 44.0139C45.631 43.4674 47.4365 42.5665 48.2174 40.9138C49.9962 37.1513 49.2519 32.5641 46.0348 29.8085C45.4975 29.3481 45.1104 28.9506 44.4796 28.6227"
                          fill="#BA5B31"
                        />
                        <path
                          d="M40.2617 44.9048C41.6267 44.9048 43.005 44.6697 44.2665 44.259C46.5625 43.5138 48.0076 42.4572 48.6851 41.0264C50.564 37.0553 49.6395 32.3654 46.4391 29.623C46.3356 29.5336 46.2355 29.4475 46.142 29.3614C45.7449 29.0103 45.3711 28.6824 44.8371 28.4042L44.6002 28.8513C45.0808 29.0997 45.4145 29.3945 45.805 29.7389C45.9017 29.825 46.0019 29.9145 46.1087 30.0039C49.1389 32.6005 50.01 37.0453 48.2278 40.8111C47.6138 42.1061 46.2688 43.0799 44.1129 43.7787C40.522 44.9446 35.9332 44.6465 33.7773 41.3477C33.6872 41.2086 33.6505 41.0993 33.6138 40.99C33.5203 40.7085 33.4135 40.5064 32.9296 40.4302C31.4279 40.1984 31.1008 39.6055 31.0975 39.6022C31.0841 39.5757 31.0841 39.5625 31.0841 39.5592C31.0874 39.5559 31.0975 39.5492 31.1075 39.5393C31.3678 39.4896 31.875 39.6155 32.3122 39.7645C32.4691 39.8308 32.6326 39.8904 32.7961 39.95L32.973 39.4863C32.923 39.4664 32.7327 39.3869 32.4824 39.3008C32.1687 39.1717 31.875 39.0292 31.6047 38.8736C31.5613 38.8504 31.5113 38.8239 31.4579 38.7941C31.2977 38.708 30.9239 38.5092 30.8872 38.3834C30.8772 38.347 30.8905 38.2675 30.9239 38.2211C30.9273 38.2145 30.9406 38.2045 30.9473 38.2045C31.1942 38.2178 32.1454 38.7245 32.9196 39.2081L33.2133 38.7974C32.6226 38.3271 32.1287 37.8303 31.7449 37.3202L31.6948 37.254C31.6548 37.201 31.568 37.095 31.578 37.0619C31.5814 37.0519 31.5814 37.0453 31.6047 37.0354C31.6615 37.0122 31.7549 37.0221 31.815 37.0553C31.9985 37.1612 32.1654 37.3467 32.3289 37.5289L32.3723 37.5752C32.5258 37.7442 32.6693 37.9363 32.8062 38.1217C32.923 38.2807 33.0464 38.443 33.1766 38.5954L33.5671 38.2708C33.5671 38.2708 33.5671 38.2708 33.5637 38.2675C33.2901 37.9429 33.0798 37.5322 32.8796 37.1347L32.8062 36.9923C32.7861 36.9526 32.7628 36.9095 32.7361 36.8632C32.6793 36.7638 32.6093 36.6379 32.6059 36.5618C32.6059 36.5121 32.6159 36.479 32.6259 36.4591C32.6293 36.4624 32.636 36.4657 32.6426 36.469C33.2934 36.9493 33.764 37.7276 33.9742 38.6616L33.9776 38.6815L34.4748 38.5722C34.4715 38.5656 34.4715 38.5589 34.4715 38.5523L34.4448 38.4298C34.3613 38.0621 34.2779 37.6812 34.2646 37.3169C34.2646 37.2705 34.2746 37.254 34.2746 37.254C34.2812 37.254 34.348 37.2639 34.4081 37.3235C34.5382 37.4461 34.595 37.7309 34.6317 37.9164C34.6684 38.0986 34.6684 38.294 34.6717 38.5026C34.675 38.7245 34.675 38.9531 34.7218 39.1783C34.7485 39.3141 34.8252 39.4134 34.902 39.5029C35.1489 39.7877 35.4493 39.993 35.7396 40.1918L35.8965 40.3011C37.3315 41.3013 39.0669 41.8213 40.779 41.7617C40.8991 41.7584 41.0159 41.7517 41.1327 41.7418C42.8114 41.6126 45.034 41.0264 46.0886 38.963C46.8629 37.4494 46.8195 35.2336 45.2176 34.1108L44.9239 34.5248C46.2422 35.4489 46.3222 37.3898 45.6348 38.7345C44.687 40.5892 42.6445 41.1191 41.096 41.2384C40.9859 41.2483 40.8758 41.2549 40.7623 41.2583C39.1571 41.3112 37.5351 40.8277 36.1902 39.8871L36.03 39.7745C35.753 39.5857 35.4927 39.4068 35.2891 39.1717C35.2391 39.112 35.2224 39.0855 35.2224 39.0756C35.1857 38.8968 35.1857 38.7013 35.1823 38.496C35.179 38.2741 35.179 38.0456 35.1323 37.817C35.0822 37.5653 35.0088 37.1877 34.7585 36.9526C34.5516 36.7605 34.2779 36.6976 34.0576 36.7969C33.9609 36.84 33.8808 36.9128 33.8307 37.0056C33.5837 36.6313 33.2867 36.31 32.9463 36.0616C32.7694 35.9325 32.5692 35.906 32.399 35.9954C32.2088 36.0948 32.092 36.3233 32.0986 36.575C32.0986 36.5916 32.102 36.6081 32.102 36.6247C32.092 36.6181 32.082 36.6114 32.072 36.6048C31.875 36.4922 31.6147 36.4723 31.4145 36.5551C31.251 36.6214 31.1375 36.7472 31.0908 36.9128C31.0107 37.191 31.1842 37.4096 31.2977 37.5521L31.3411 37.6084C31.4045 37.6912 31.4679 37.7773 31.538 37.8601C31.311 37.7607 31.1108 37.6945 30.9773 37.6879C30.8071 37.6779 30.6436 37.7541 30.5301 37.8998C30.3966 38.0721 30.3466 38.3171 30.4066 38.5159C30.4767 38.7411 30.697 38.9199 30.9273 39.059L30.9172 39.0624C30.8805 39.0789 30.6836 39.1683 30.6035 39.3803C30.5668 39.4764 30.5435 39.632 30.6402 39.8208C30.677 39.9003 31.0741 40.6521 32.8495 40.9237C33.0665 40.9569 33.0698 40.9635 33.1299 41.1456C33.1699 41.2649 33.2233 41.4239 33.3501 41.616C34.882 43.9708 37.5385 44.9048 40.2617 44.9048Z"
                          fill="black"
                        />
                        <path
                          d="M0.403356 25.9797L1.70824 25.2842L2.46247 26.2811L3.7707 24.1846L5.07892 25.5823L5.58285 23.2374L7.79883 24.8305C6.2937 21.3594 4.26462 18.1269 1.18762 15.9542C1.18762 15.9542 0.917298 17.4247 1.18762 20.028C1.40121 22.0914 0.833869 24.0124 0.403356 25.9797Z"
                          fill="#FCE1B1"
                        />
                        <path
                          d="M37.5412 4.28911C38.806 3.93804 36.7969 0.248409 35.9192 0.0496854C33.3662 -0.526612 33.8501 4.2858 33.9469 4.28911C33.9469 4.28911 31.6174 4.16988 31.9044 5.62718C31.9044 5.62718 32.3717 6.51481 35.8425 6.65723C35.8425 6.65723 39.8906 7.15404 39.4234 5.05751C39.4234 5.05751 39.1631 3.83867 37.5412 4.28911Z"
                          fill="#010100"
                        />
                        <path
                          d="M45.6812 22.2835C45.7012 22.2835 45.7179 22.2835 45.7346 22.2835C48.9217 22.2802 51.6483 21.9059 51.675 21.8993C51.8152 21.8794 51.9119 21.7536 51.8919 21.6144C51.8719 21.4753 51.7451 21.3793 51.6049 21.3992C51.4981 21.4157 40.8621 22.8565 36.9441 19.9717C36.8306 19.8889 36.6705 19.9121 36.587 20.0247C36.5036 20.1373 36.527 20.2963 36.6404 20.3791C38.3591 21.6443 41.3994 22.2835 45.6812 22.2835Z"
                          fill="#010100"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_443_408">
                          <rect
                            width="56"
                            height="69"
                            fill="white"
                            transform="matrix(-1 0 0 1 56 0)"
                          />
                        </clipPath>
                      </defs>
                    </svg>
                    <img
                      className="lg:hidden sm:hidden"
                      src={logorps}
                      alt=""
                    />
                  </Link>
                </div>
              </div>
            </div>
            <div className="items-center  hidden  md:hidden lg:flex  justify-end gap-[32px] text-[18px] font-medium  text-color ">
              {categories.map((category) => (
                <Link
                  className="  text-colorBlack text-[14px] textSVNGilroy600  "
                  key={category.id}
                  to={`/tramtintuc`}
                >
                  {category.name}
                </Link>
              ))}
              <div className="textSVNGilroy600 text-[16px] px-[28px] py-[12px] rounded-full  bg-backgroundBtn text-color cursor-pointer   ">
              <Link to="/login">  Đăng nhập</Link>
              </div>
            </div>

            <div className="items-center  flex   md:hidden lg:hidden  justify-end gap-[32px] text-[18px] font-medium  text-color ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 32 32"
                fill="none"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M6.66602 9.33333C6.66602 8.97971 6.80649 8.64057 7.05654 8.39052C7.30659 8.14048 7.64573 8 7.99935 8H23.9993C24.353 8 24.6921 8.14048 24.9422 8.39052C25.1922 8.64057 25.3327 8.97971 25.3327 9.33333C25.3327 9.68696 25.1922 10.0261 24.9422 10.2761C24.6921 10.5262 24.353 10.6667 23.9993 10.6667H7.99935C7.64573 10.6667 7.30659 10.5262 7.05654 10.2761C6.80649 10.0261 6.66602 9.68696 6.66602 9.33333ZM6.66602 16C6.66602 15.6464 6.80649 15.3072 7.05654 15.0572C7.30659 14.8071 7.64573 14.6667 7.99935 14.6667H23.9993C24.353 14.6667 24.6921 14.8071 24.9422 15.0572C25.1922 15.3072 25.3327 15.6464 25.3327 16C25.3327 16.3536 25.1922 16.6928 24.9422 16.9428C24.6921 17.1929 24.353 17.3333 23.9993 17.3333H7.99935C7.64573 17.3333 7.30659 17.1929 7.05654 16.9428C6.80649 16.6928 6.66602 16.3536 6.66602 16ZM6.66602 22.6667C6.66602 22.313 6.80649 21.9739 7.05654 21.7239C7.30659 21.4738 7.64573 21.3333 7.99935 21.3333H23.9993C24.353 21.3333 24.6921 21.4738 24.9422 21.7239C25.1922 21.9739 25.3327 22.313 25.3327 22.6667C25.3327 23.0203 25.1922 23.3594 24.9422 23.6095C24.6921 23.8595 24.353 24 23.9993 24H7.99935C7.64573 24 7.30659 23.8595 7.05654 23.6095C6.80649 23.3594 6.66602 23.0203 6.66602 22.6667Z"
                  fill="white"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
