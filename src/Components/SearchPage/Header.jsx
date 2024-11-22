import { useEffect, useState } from "react";
import axios from "axios";
import ReactLoading from "react-loading";

export default function Header({ onFilter }) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchText, setSearchText] = useState("");

  const getSearchData = async () => {
    try {
      const response = await axios.get(`/categories/all`);
      setData(response?.data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getSearchData();
  }, []);

  // Фильтруем данные
  const filteredData = data.filter((item) =>
    item.name.toLowerCase().includes(searchText.toLowerCase())
  );

  // Передаем отфильтрованные данные родительскому компоненту
  useEffect(() => {
    onFilter(filteredData);
  }, [filteredData, onFilter]);

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen my-[30px] w-full">
        <ReactLoading type="spinningBubbles" color="#000" height={100} width={100} />
      </div>
    );
  }

  return (
    <div className="Header bg-[#F1EEF1] py-[20px] w-full">
      <div className="Container">
        <label
          htmlFor="search"
          className="flex items-center justify-between bg-[white] px-[16px] py-[10px] mx-[15px] rounded-[24px]"
        >
          <div className="flex items-center gap-[10px]">
            <svg
              className="cursor-pointer"
              xmlns="http://www.w3.org/2000/svg"
              width="21"
              height="21"
              viewBox="0 0 21 21"
              fill="none"
            >
              <path
                d="M10.567 20.1339C12.6896 20.1335 14.7511 19.4229 16.4231 18.1153L18.6007 20.2929C18.9913 20.6834 19.6244 20.6834 20.0149 20.2929L20.2917 20.0161C20.6822 19.6256 20.6822 18.9925 20.2917 18.6019L18.1141 16.4243C19.4224 14.7521 20.1334 12.6902 20.1339 10.567C20.1339 5.29198 15.8419 1 10.567 1C5.29198 1 1 5.29198 1 10.567C1 15.8419 5.29198 20.1339 10.567 20.1339ZM10.567 3.39174C14.5241 3.39174 17.7422 6.60983 17.7422 10.567C17.7422 14.5241 14.5241 17.7422 10.567 17.7422C6.60983 17.7422 3.39174 14.5241 3.39174 10.567C3.39174 6.60983 6.60983 3.39174 10.567 3.39174Z"
                fill="#372E38"
                stroke="white"
                strokeWidth="0.6"
              />
            </svg>
            <input
              className="outline-none"
              type="text"
              placeholder="Qidiruv"
              value={searchText}
              onChange={(e) => setSearchText(e.target.value)}
            />
          </div>
        </label>
      </div>
    </div>
  );
}
