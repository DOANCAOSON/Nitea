import { useEffect, useState } from "react";

const Test = () => {
  const [products, setProducts] = useState([
    { id: 1, name: "Sản phẩm 1", price: 10, quantity: 1 },
    { id: 2, name: "Sản phẩm 2", price: 20, quantity: 1 },
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
    <div className="bg-gray-100 min-h-screen p-4">
      <h1 className="text-2xl font-semibold mb-4">
        Card Bán Hàng
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {products.map((product) => (
          <div
            className="bg-white p-4 rounded-md shadow-md flex flex-col justify-between"
            key={product.id}
          >
            <div>
              <h2 className="text-lg font-semibold">
                {product.name}
              </h2>
              <p className="text-gray-600">
                Giá: ${product.price}
              </p>
              <p className="text-gray-600">
                Số lượng: {product.quantity}
              </p>
            </div>
            <div className="mt-4 flex justify-between">
              <button
                className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                onClick={() =>
                  increaseQuantity(
                    product.id,
                    product.price
                  )
                }
              >
                Tăng
              </button>
              <button
                className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
                onClick={() =>
                  decreaseQuantity(
                    product.id,
                    product.price
                  )
                }
              >
                Giảm
              </button>
            </div>
          </div>
        ))}
      </div>
      <h2 className="text-2xl font-semibold mt-4">
        Tổng số tiền: ${totalPrice}
      </h2>
    </div>
  );
};

export default Test;
