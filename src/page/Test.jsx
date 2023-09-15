import { useState } from "react";
import "flowbite";

// Tạo danh sách sản phẩm giả
const fakeapiproductcatentrylist = [
  { id: 1, category: "Đồ uống" },
  { id: 2, category: "Bánh" },
  { id: 3, category: "kẹo" },
];

const fakeapiproductlist = [
  { id: 1, category: "Đồ uống", name: "Cà phê", categoryId: 1 },
  { id: 2, category: "Đồ uống", name: "Trà sữa", categoryId: 1 },
  { id: 3, category: "Đồ uống", name: "Trà trái cây", categoryId: 1 },
  { id: 4, category: "Đồ uống", name: "Macchiato", categoryId: 1 },
  { id: 5, category: "Đồ uống", name: "Đá xay", categoryId: 1 },
  { id: 6, category: "Đồ uống", name: "Sữa chua", categoryId: 1 },
  { id: 7, category: "Đồ uống", name: "Nước trái cây", categoryId: 1 },
  { id: 8, category: "Đồ uống", name: "Topping", categoryId: 1 },
  { id: 9, category: "Bánh", name: "Bánh mì", categoryId: 2 },
  { id: 10, category: "Bánh", name: "Bánh bao", categoryId: 2 },
  { id: 11, category: "Bánh", name: "Bánh gạo", categoryId: 2 },
  { id: 12, category: "Kẹo", name: "Kẹo dâu", categoryId: 3 },
  { id: 13, category: "Kẹo", name: "Kẹo não", categoryId: 3 },
];

export default function App() {

  return (
    <div className='App'>
      <div>
        {fakeapiproductcatentrylist.map((category) => {
          return (
            <div id='accordion-open' data-accordion='open' key={category.id}>
              <h2
                key={category.id}
                id={`accordion-open-heading-${category.id}`}
              >
                <button
                  type='button'
                  className='flex items-center justify-between w-full p-5 font-medium text-left text-gray-500 border border-b-0 border-gray-200 rounded-t-xl focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800'
                  data-accordion-target={`#accordion-open-body-${category.id}`}
                  aria-expanded={`${category.id === 1 ? true : false}  `}
                  aria-controls={`accordion-open-body-${category.id}`}
                >
                  <span className='flex items-center'>
                    <svg
                      className='w-5 h-5 mr-2 shrink-0'
                      fill='currentColor'
                      viewBox='0 0 20 20'
                      xmlns='http://www.w3.org/2000/svg'
                    >
                      <path
                        fillRule='evenodd'
                        d='M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z'
                        clipRule='evenodd'
                      />
                    </svg>{" "}
                    {category.category}
                  </span>
                  <svg
                    data-accordion-icon
                    className='w-3 h-3 rotate-180 shrink-0'
                    aria-hidden='true'
                    xmlns='http://www.w3.org/2000/svg'
                    fill='none'
                    viewBox='0 0 10 6'
                  >
                    <path
                      stroke='currentColor'
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth={2}
                      d='M9 5 5 1 1 5'
                    />
                  </svg>
                </button>
              </h2>
              <div
                id={`accordion-open-body-${category.id}`}
                className={`${category.id === 1 ? "" : "hidden"}`}
                aria-labelledby={`accordion-open-heading-${category.id}`}
              >
                <div className='p-5 border border-b-0 border-gray-200 dark:border-gray-700 dark:bg-gray-900'>
                  {fakeapiproductlist.map((product) => {
                    if (product.categoryId === category.id)
                      return (
                        <p className='mb-2 text-gray-500 dark:text-gray-400'>
                          {product.name}
                        </p>
                      );
                  })}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
