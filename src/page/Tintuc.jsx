import axios from "axios";
import { useEffect, useState } from "react";
import { FiArrowRight } from "react-icons/fi";
import { Link } from "react-router-dom";
import Sliders from "../component/Sliders";
import { useParams } from "react-router-dom";
import { useInView } from "framer-motion";
import { useRef } from "react";

const Tintuc = () => {
  const [page, setPage] = useState(1);

  const [responseData, setResponseData] = useState([]);

  const { sort, name } = useParams();

  const handlePageChange = (page) => {
    if (page >= 1 && page <= responseData?.last_page) {
      setPage(page);
    }
  };

  useEffect(() => {
    // Gửi yêu cầu API và cập nhật trạng thái khi nhận được dữ liệu
    axios
      .get(
        `https://admin.channelcharn.us/api/list-post?cat_id=${sort}&limit=10&page=${page}`
      )
      .then((response) => {
        setResponseData(response.data.data.data);
      })
      .catch((error) => {
        console.error("Error fetching data: ", error);
      });
  }, [page, sort]);

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });


  return (
    <div>
      <div ref={ref} className="w-[100%]">
        <Sliders />
        <div className=" w-[100%] items-center flex justify-center mx-[auto] mb-[60px]">
          <h1 style={{
            transform: isInView ? "none" : "translateY(-100%)",
            opacity: isInView ? 1 : 0,
            transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 1.5s ",
          }} className="text-[36px] relative layoutcontent text-center">
            Danh sách  {name}
          </h1>
        </div>

        <div className="w-[100%] sm:w-[100%] lg:w-[1200px]  flex mx-[auto]   ">
          <div
            style={{
              transform: isInView ? "none" : "translateY(100%)",
              opacity: isInView ? 1 : 0,
              transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 1.5s ",
            }}
            className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-[50px] rounded-lg p-[40px] bg-[#eee]">
            {responseData.data?.map((item) => (
              <Link
                className="hoverbgscale w-[100%] md:w-[100%] lg:w-[100%]  bg-[#fff] hover:shadow-2xl  hover:ease-in transition duration-500 "
                to={`/detail/${item.id}`}
                key={item.id}
              >
                <div className="rounded-s overflow-hidden mb-[20px] ">
                  <img
                    src={`https://admin.channelcharn.us/public/upload/articles/${item.picture}`}
                    alt={item.picture}
                    className="hoverbgscaleitem hover:ease-in transition duration-500"
                  />
                </div>
                <div className="p-[20px]">
                  <div className="h-[60px] mb-[20px]">
                    <div className="line-clamp-2 text-[16px]">{item.name}</div>
                  </div>
                  <div className="">
                    <Link
                      to={`/detail/${item.id}`}
                      className="bg-btn hover:text-btnhover hover:ease-in transition duration-1000 rounded-lg py-[6px] px-[24px] flex items-center justify-between text-[#ffff]"
                    >
                      Read More
                      <FiArrowRight className="ml-[4px]" />
                    </Link>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      
      </div>
    </div>
  );
};

export default Tintuc;
