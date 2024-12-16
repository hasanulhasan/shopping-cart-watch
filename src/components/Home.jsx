import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useEffect, useState } from "react";
import violate from "./../assets/violate_watch.png";
import cyan from "./../assets/cyan_watch.png";
import blue from "./../assets/blue_watch.png";
import black from "./../assets/black_watch.png";
import Modal from "./Modal";
import Stars from "./Stars";

const products = [
  {
    img: violate,
    color: "violate",
    sizes_price: [
      {
        size: "S",
        price: 150,
        dis_price: 100,
      },
      {
        size: "M",
        price: 170,
        dis_price: 120,
      },
      {
        size: "L",
        price: 180,
        dis_price: 150,
      },
      {
        size: "XL",
        price: 200,
        dis_price: 150,
      },
    ],
  },
  {
    img: cyan,
    color: "cyan",
    sizes_price: [
      {
        size: "S",
        price: 1520,
        dis_price: 1050,
      },
      {
        size: "M",
        price: 1740,
        dis_price: 1290,
      },
      {
        size: "L",
        price: 1870,
        dis_price: 1560,
      },
      {
        size: "XL",
        price: 2900,
        dis_price: 2590,
      },
    ],
  },
  {
    img: blue,
    color: "blue",
    sizes_price: [
      {
        size: "S",
        price: 1860,
        dis_price: 1145,
      },
      {
        size: "M",
        price: 2170,
        dis_price: 1310,
      },
      {
        size: "L",
        price: 1950,
        dis_price: 1220,
      },
      {
        size: "XL",
        price: 3050,
        dis_price: 2450,
      },
    ],
  },
  {
    img: black,
    color: "black",
    sizes_price: [
      {
        size: "S",
        price: 1760,
        dis_price: 1290,
      },
      {
        size: "M",
        price: 1370,
        dis_price: 1950,
      },
      {
        size: "L",
        price: 2320,
        dis_price: 2780,
      },
      {
        size: "XL",
        price: 2570,
        dis_price: 3520,
      },
    ],
  },
];

export default function Home() {
  const [showProduct, setShowProduct] = useState(products[0]);
  const [priceAndSize, setPriceAndSize] = useState(showProduct.sizes_price[0]);
  const [isModalOpen, setModalOpen] = useState(false);
  const [quantity, setQuantity] = useState(1);
  const [cartProduct, setCartProduct] = useState([]);
  const totalPrice = cartProduct.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );
  const totalQty = cartProduct.reduce((sum, item) => sum + item.quantity, 0);

  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);

  const handleAddToCart = () => {
    if (quantity === 0) {
      toast("At least one Product should be selected!");
      return;
    }

    const isAdded = cartProduct.find(
      (product) => product.color === showProduct.color
    );

    if (isAdded) {
      toast("Product already added!");
      return;
    }

    const data = {
      img: showProduct.img,
      color: showProduct.color,
      price: priceAndSize.price,
      size: priceAndSize.size,
      quantity: quantity,
    };

    if (cartProduct.length === 0) {
      setCartProduct([data]);
    } else {
      setCartProduct([...cartProduct, data]);
    }
  };

  useEffect(() => {
    setPriceAndSize(showProduct.sizes_price[0]);
  }, [showProduct]);

  return (
    <div className="bg-gray-100 h-screen flex items-center justify-center">
      <div className="max-w-[1320px] max-h-[720px] mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-center h-screen">
        <div className="relative flex flex-col md:flex-row -mx-4 items-center">
          <div className="md:flex-1">
            <div className="max-h-[720px] rounded-lg bg-gray-300">
              <img
                className="w-full h-full"
                src={showProduct?.img}
                alt="Product Image"
              />
            </div>
          </div>
          <div className="md:flex-1 px-10 py-6 max-w-[630px] max-h-[540px]">
            <h2 className="text-[40px] font-bold text-text-200 mb-2">
              Classy Modern Smart Watch
            </h2>
            <Stars />
            <div className="flex mb-4">
              <div className="mr-4">
                <del className="text-text-100 text-xl font-normal mr-2">
                  ${priceAndSize.price}
                </del>
                <span className="text-primary text-2xl font-bold">
                  ${priceAndSize.dis_price}
                </span>
              </div>
            </div>
            <p className="text-text-100 text-base font-normal mb-4">
              I must explain to you how all this mistaken idea of denoun cing
              ple praising pain was born and I will give you a complete account
              of the system, and expound the actual teaching.
            </p>
            <div className="flex gap-5 mb-4">
              <div>
                <p className="text-sm font-normal text-text-100">Type</p>
                <p className="text-[16px] font-bold text-text-200">Watch</p>
              </div>
              <div>
                <p className="text-sm font-normal text-text-100">
                  Model Number
                </p>
                <p className="text-[16px] font-bold text-text-200">
                  Forerunner 290XT
                </p>
              </div>
            </div>
            <div className="mb-4">
              <span className="font-bold text-text-200 text-base">
                Brand Color
              </span>
              <div className="flex items-center mt-2 gap-5">
                {/* {
                        products?.map((product,i)=> <button key={i} onClick={()=> setShowProduct(products[i])} className={`w-4 h-4 rounded-full bg-secondary ${showProduct.color === 'violate' && "outline outline-2 outline-offset-2 outline-secondary"}`}></button>)
                      } */}
                <button
                  onClick={() => setShowProduct(products[0])}
                  className={`w-4 h-4 rounded-full bg-secondary ${
                    showProduct.color === "violate" &&
                    "outline outline-2 outline-offset-2 outline-secondary"
                  }`}
                ></button>
                <button
                  onClick={() => setShowProduct(products[1])}
                  className={`w-4 h-4 rounded-full bg-[#1FCEC9] ${
                    showProduct.color === "cyan" &&
                    "outline outline-2 outline-offset-2 outline-[#1FCEC9]"
                  }`}
                ></button>
                <button
                  onClick={() => setShowProduct(products[2])}
                  className={`w-4 h-4 rounded-full bg-[#4B97D3] ${
                    showProduct.color === "blue" &&
                    "outline outline-2 outline-offset-2 outline-[#4B97D3]"
                  }`}
                ></button>
                <button
                  onClick={() => setShowProduct(products[3])}
                  className={`w-4 h-4 rounded-full bg-[#3B4747] ${
                    showProduct.color === "black" &&
                    "outline outline-2 outline-offset-2 outline-[#3B4747]"
                  }`}
                ></button>
              </div>
            </div>
            <div className="mb-4">
              <span className="font-bold text-text-200 text-base">
                Wrist Size
              </span>
              <div className="flex items-center mt-2">
                {showProduct?.sizes_price?.map((size, i) => (
                  <button
                    onClick={() => setPriceAndSize(size)}
                    key={i}
                    className={`text-text-100 py-2 px-4 rounded-[3px] text-sm mr-2  ${
                      size.price === priceAndSize.price
                        ? "border border-primary"
                        : "border border-border"
                    }`}
                  >
                    <span className="font-bold text-text-200">{size.size}</span>{" "}
                    ${size.price}
                  </button>
                ))}
              </div>
            </div>
            <div className="flex gap-3">
              <div className="flex rounded-sm">
                <div
                  onClick={() =>
                    setQuantity((prevQty) => {
                      if (prevQty > 0) {
                        return prevQty - 1;
                      } else {
                        return 0;
                      }
                    })
                  }
                  className="py-1 px-4 text-text-100 border border-border text-lg cursor-pointer"
                >
                  -
                </div>
                <div className="py-1 px-6 text-text-100 border-t border-b border-border text-lg">
                  {quantity}
                </div>
                <div
                  onClick={() => setQuantity((prevQty) => prevQty + 1)}
                  className="py-1 px-4 text-text-100 border border-border text-lg cursor-pointer"
                >
                  +
                </div>
              </div>
              <div
                onClick={handleAddToCart}
                className="text-white bg-primary font-bold px-[18px] py-2 rounded-[3px] cursor-pointer"
              >
                Add to cart
              </div>
              <div></div>
            </div>
          </div>
        </div>
        <div
          onClick={openModal}
          className="absolute bottom-5 text-text-200 bg-[#FFBB5A] font-bold px-[18px] py-2 rounded-[20px] flex items-center gap-2 shadow-lg cursor-pointer"
        >
          Checkout{" "}
          {cartProduct.length !== 0 && (
            <span className="text-xs px-1 bg-white">{cartProduct.length}</span>
          )}{" "}
        </div>
      </div>

      <Modal isOpen={isModalOpen} onClose={closeModal}>
        <h2 className="text-[22px] font-bold text-text-200 mb-2">Your Cart</h2>
        <div className="flex flex-col">
          <div className="overflow-y-auto  sm:-mx-6 lg:-mx-8">
            <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8 ">
              <div className="overflow-hidden">
                <table className="min-w-full">
                  <tbody>
                    <tr className="border-b">
                      <th className="text-sm text-text-100 pr-3 py-2 text-left">
                        Item
                      </th>
                      <th className="text-sm text-text-100 px-3 py-2 text-center">
                        Color
                      </th>
                      <th className="text-sm text-text-100 px-3 py-2 text-center">
                        Size
                      </th>
                      <th className="text-sm text-text-100 px-3 py-2 text-center">
                        Qnt
                      </th>
                      <th className="text-sm text-text-100 ps-3 py-2 text-right">
                        Price
                      </th>
                    </tr>
                    {cartProduct?.length === 0 ? (
                      <>
                        <p className="my-3 font-bold">
                          There is no product in cart
                        </p>
                      </>
                    ) : (
                      <>
                        {cartProduct?.map((product, i) => (
                          <tr key={i} className="border-b">
                            <td className="text-sm text-text-200 pr-3 py-2 flex gap-2 items-center">
                              <img
                                className="w-[36px] h-[36px] rounded-[3px]"
                                src={product?.img}
                                alt="Product Image"
                              />{" "}
                              Classy Modern Smart watch
                            </td>
                            <td className="text-sm text-text-200 px-3 py-2 text-center capitalize">
                              {product?.color}
                            </td>
                            <td className="text-sm text-text-200 px-3 py-2 font-bold text-center">
                              {product?.size}
                            </td>
                            <td className="text-sm text-text-200 px-3 py-2 font-bold text-center">
                              {product?.quantity}
                            </td>
                            <td className="text-sm text-text-200 ps-3 py-2 font-bold text-right">
                              $
                              {Number(product?.price) *
                                Number(product?.quantity)}
                            </td>
                          </tr>
                        ))}
                      </>
                    )}
                    <tr className="">
                      <td className="text-text-200 pr-3 py-2 col-span-3 font-bold">
                        {" "}
                        Total
                      </td>
                      <td className="text-text-200 px-3 py-2 text-center"></td>
                      <td className="text-text-200 px-3 py-2 font-bold text-center"></td>
                      <td className="text-text-200 px-3 py-2 font-bold text-center text-sm">
                        {totalQty}
                      </td>
                      <td className="text-text-200 ps-3 py-2 font-bold text-right text-lg">
                        ${totalPrice}
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="flex justify-end">
                <div className="flex gap-6 mt-4">
                  <div className="text-text-200 text-[13px] border border-border font-bold px-[18px] py-2 rounded-[3px] cursor-pointer">
                    Continue Shopping
                  </div>
                  <div className="text-white text-[13px] bg-primary font-bold px-[18px] py-2 rounded-[3px] cursor-pointer">
                    Checkout
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Modal>
      <ToastContainer />
    </div>
  );
}
