import { useState } from 'react';
import gallery from './../assets/product-gallery.png'
import Modal from './Modal';

export default function Home() {
  const [isModalOpen, setModalOpen] = useState(false);

  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);

  return (
    <div className="bg-gray-100 h-screen flex flex-col gap-y-16 items-center justify-center">
    <div className="max-w-[1320px] max-h-[720px] mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-center h-screen">
        <div className="flex flex-col md:flex-row -mx-4 border border-gray-700 items-center">
            <div className="md:flex-1">
                <div className="max-h-[720px] rounded-lg bg-gray-300">
                    <img className="w-full h-full" src={gallery} alt="Product Image"/>
                </div>
            </div>
            <div className="md:flex-1 px-10 py-6 max-w-[630px] max-h-[540px]">
                <h2 className="text-[40px] font-bold text-[#364A63] mb-2">Classy Modern Smart Watch</h2>
                <div className="flex justify-start items-center space-x-1 lg:space-x-2 mb-4">
  <button>        
	<svg className="text-yellow-500 w-4 h-auto fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
	  <path d="M381.2 150.3L524.9 171.5C536.8 173.2 546.8 181.6 550.6 193.1C554.4 204.7 551.3 217.3 542.7 225.9L438.5 328.1L463.1 474.7C465.1 486.7 460.2 498.9 450.2 506C440.3 513.1 427.2 514 416.5 508.3L288.1 439.8L159.8 508.3C149 514 135.9 513.1 126 506C116.1 498.9 111.1 486.7 113.2 474.7L137.8 328.1L33.58 225.9C24.97 217.3 21.91 204.7 25.69 193.1C29.46 181.6 39.43 173.2 51.42 171.5L195 150.3L259.4 17.97C264.7 6.954 275.9-.0391 288.1-.0391C300.4-.0391 311.6 6.954 316.9 17.97L381.2 150.3z"/>
	</svg>
  </button>
  <button>        
	<svg className="text-yellow-500 w-4 h-auto fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
	  <path d="M381.2 150.3L524.9 171.5C536.8 173.2 546.8 181.6 550.6 193.1C554.4 204.7 551.3 217.3 542.7 225.9L438.5 328.1L463.1 474.7C465.1 486.7 460.2 498.9 450.2 506C440.3 513.1 427.2 514 416.5 508.3L288.1 439.8L159.8 508.3C149 514 135.9 513.1 126 506C116.1 498.9 111.1 486.7 113.2 474.7L137.8 328.1L33.58 225.9C24.97 217.3 21.91 204.7 25.69 193.1C29.46 181.6 39.43 173.2 51.42 171.5L195 150.3L259.4 17.97C264.7 6.954 275.9-.0391 288.1-.0391C300.4-.0391 311.6 6.954 316.9 17.97L381.2 150.3z"/>
	</svg>
  </button>
  <button>        
	<svg className="text-yellow-500 w-4 h-auto fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
	  <path d="M381.2 150.3L524.9 171.5C536.8 173.2 546.8 181.6 550.6 193.1C554.4 204.7 551.3 217.3 542.7 225.9L438.5 328.1L463.1 474.7C465.1 486.7 460.2 498.9 450.2 506C440.3 513.1 427.2 514 416.5 508.3L288.1 439.8L159.8 508.3C149 514 135.9 513.1 126 506C116.1 498.9 111.1 486.7 113.2 474.7L137.8 328.1L33.58 225.9C24.97 217.3 21.91 204.7 25.69 193.1C29.46 181.6 39.43 173.2 51.42 171.5L195 150.3L259.4 17.97C264.7 6.954 275.9-.0391 288.1-.0391C300.4-.0391 311.6 6.954 316.9 17.97L381.2 150.3z"/>
	</svg>
  </button>
  <button>        
	<svg className="text-yellow-500 w-4 h-auto fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
	  <path d="M381.2 150.3L524.9 171.5C536.8 173.2 546.8 181.6 550.6 193.1C554.4 204.7 551.3 217.3 542.7 225.9L438.5 328.1L463.1 474.7C465.1 486.7 460.2 498.9 450.2 506C440.3 513.1 427.2 514 416.5 508.3L288.1 439.8L159.8 508.3C149 514 135.9 513.1 126 506C116.1 498.9 111.1 486.7 113.2 474.7L137.8 328.1L33.58 225.9C24.97 217.3 21.91 204.7 25.69 193.1C29.46 181.6 39.43 173.2 51.42 171.5L195 150.3L259.4 17.97C264.7 6.954 275.9-.0391 288.1-.0391C300.4-.0391 311.6 6.954 316.9 17.97L381.2 150.3z"/>
	</svg>
  </button>
  <button>        
	<svg className="text-yellow-500 w-4 h-auto fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
	  <path d="M381.2 150.3L524.9 171.5C536.8 173.2 546.8 181.6 550.6 193.1C554.4 204.7 551.3 217.3 542.7 225.9L438.5 328.1L463.1 474.7C465.1 486.7 460.2 498.9 450.2 506C440.3 513.1 427.2 514 416.5 508.3L288.1 439.8L159.8 508.3C149 514 135.9 513.1 126 506C116.1 498.9 111.1 486.7 113.2 474.7L137.8 328.1L33.58 225.9C24.97 217.3 21.91 204.7 25.69 193.1C29.46 181.6 39.43 173.2 51.42 171.5L195 150.3L259.4 17.97C264.7 6.954 275.9-.0391 288.1-.0391C300.4-.0391 311.6 6.954 316.9 17.97L381.2 150.3z"/>
	</svg>
  </button>

  <span className="text-[#8091A7] text-sm">
	(2 reviews)
  </span>
</div>
                
                <div className="flex mb-4">
                    <div className="mr-4">
                        <del className="text-[#8091A7] text-xl font-normal mr-2">$99.00</del>
                        <span className="text-[#6576FF] text-2xl font-bold">$79.00</span>
                    </div>
                </div>
                    <p className="text-[#8091A7] text-base font-normal mb-4">
                    I must explain to you how all this mistaken idea of denoun cing ple praising pain was born and I will give you a complete account of the system, and expound the actual teaching.
                    </p>
                    <div className='flex gap-5 mb-4'>
                 <div>
                 <p className='text-sm font-normal text-[#8091A7]'>Type</p>
                 <p className='text-[16px] font-bold text-[#364A63]'>Watch</p>
                 </div>
                 <div>
                 <p className='text-sm font-normal text-[#8091A7]'>Model Number</p>
                 <p  className='text-[16px] font-bold text-[#364A63]'>Forerunner 290XT</p>
                 </div>
                </div>
                <div className="mb-4">
                    <span className="font-bold text-[#364A63] text-base">Brand Color</span>
                    <div className="flex items-center mt-2 gap-5">
                        <button className="w-4 h-4 outline outline-2 outline-offset-2 outline-[#816BFF] rounded-full bg-[#816BFF]"></button>
                        <button className="w-4 h-4 rounded-full bg-[#1FCEC9]"></button>
                        <button className="w-4 h-4 rounded-full bg-[#4B97D3]"></button>
                        <button className="w-4 h-4 rounded-full bg-[#3B4747]"></button>
                    </div>
                </div>
                <div className="mb-4">
                    <span className="font-bold text-[#364A63] text-base">Wrist Size</span>
                    <div className="flex items-center mt-2">
                        <button className="text-[#8091A7] py-2 px-4 rounded-[3px] text-sm mr-2 border border-[#6576FF]"><span className="font-bold text-[#6576FF]">S</span> $69</button>
                        <button className="text-[#8091A7] py-2 px-4 rounded-[3px] text-sm mr-2 border border-[#DBDFEA]"><span className="font-bold text-[#364A63]">M</span> $79</button>
                        <button className="text-[#8091A7] py-2 px-4 rounded-[3px] text-sm mr-2 border border-[#DBDFEA]"><span className="font-bold text-[#364A63]">L</span> $89</button>
                        <button className="text-[#8091A7] py-2 px-4 rounded-[3px] text-sm mr-2 border border-[#DBDFEA]"><span className="font-bold text-[#364A63]">XL</span> $99</button>
                    </div>
                </div>
                <div className='flex gap-3'>
                  <div className='flex rounded-sm'>
                    <div className='py-1 px-4 text-[#8091A7] border border-[#DBDFEA] text-lg'>-</div>
                    <div className='py-1 px-6 text-[#8091A7] border-t border-b border-[#DBDFEA] text-lg'>0</div>
                    <div className='py-1 px-4 text-[#8091A7] border border-[#DBDFEA] text-lg' >+</div>
                  </div>
                  <div className='text-white bg-[#6576FF] font-bold px-[18px] py-2 rounded-[3px]'>Add to cart</div>
                  <div></div>
                </div>

            </div>
        </div>
    </div>
    <div onClick={openModal} className='text-[#364A63] bg-[#FFBB5A] font-bold px-[18px] py-2 rounded-[20px] flex items-center gap-2 shadow-lg cursor-pointer'>Checkout <span className='text-xs px-1 bg-white'>2</span> </div>

      <Modal isOpen={isModalOpen} onClose={closeModal}>
        <h2 className="text-[22px] font-bold text-[#364A63] mb-2">Your Cart</h2>
        <div className="flex flex-col">
    <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8">
            <div className="overflow-hidden">
                <table className="min-w-full">
                    <tbody>
                        <tr className="border-b">
                            <th className="text-sm text-[#8091A7] pr-3 py-2 text-left">Item</th>
                            <th className="text-sm text-[#8091A7] px-3 py-2 text-center">Color</th>
                            <th className="text-sm text-[#8091A7] px-3 py-2 text-center">Size</th>
                            <th className="text-sm text-[#8091A7] px-3 py-2 text-center">Qnt</th>
                            <th className="text-sm text-[#8091A7] ps-3 py-2 text-right">Price</th>
                        </tr>
                        <tr className="border-b">
                            <td className="text-sm text-[#364A63] pr-3 py-2 flex gap-2 items-center"><img className="w-[36px] h-[36px] rounded-[3px]" src={gallery} alt="Product Image"/>  Classy Modern Smart watch</td>
                            <td className="text-sm text-[#364A63] px-3 py-2 text-center">Black</td>
                            <td className="text-sm text-[#364A63] px-3 py-2 font-bold text-center">XL</td>
                            <td className="text-sm text-[#364A63] px-3 py-2 font-bold text-center">1</td>
                            <td className="text-sm text-[#364A63] ps-3 py-2 font-bold text-right">$99.00</td>
                        </tr>
                        <tr className="border-b">
                            <td className="text-sm text-[#364A63] pr-3 py-2 flex gap-2 items-center"><img className="w-[36px] h-[36px] rounded-[3px]" src={gallery} alt="Product Image"/>  Classy Modern Smart watch</td>
                            <td className="text-sm text-[#364A63] px-3 py-2 text-center">Black</td>
                            <td className="text-sm text-[#364A63] px-3 py-2 font-bold text-center">XL</td>
                            <td className="text-sm text-[#364A63] px-3 py-2 font-bold text-center">1</td>
                            <td className="text-sm text-[#364A63] ps-3 py-2 font-bold text-right">$99.00</td>
                        </tr>
                        <tr className="border-b">
                            <td className="text-sm text-[#364A63] pr-3 py-2 flex gap-2 items-center"><img className="w-[36px] h-[36px] rounded-[3px]" src={gallery} alt="Product Image"/>  Classy Modern Smart watch</td>
                            <td className="text-sm text-[#364A63] px-3 py-2 text-center">Black</td>
                            <td className="text-sm text-[#364A63] px-3 py-2 font-bold text-center">XL</td>
                            <td className="text-sm text-[#364A63] px-3 py-2 font-bold text-center">1</td>
                            <td className="text-sm text-[#364A63] ps-3 py-2 font-bold text-right">$99.00</td>
                        </tr>
                        <tr className="">
                            <td className="text-[#364A63] pr-3 py-2 col-span-3 font-bold">  Total</td>
                            <td className="text-[#364A63] px-3 py-2 text-center"></td>
                            <td className="text-[#364A63] px-3 py-2 font-bold text-center"></td>
                            <td className="text-[#364A63] px-3 py-2 font-bold text-center text-sm">4</td>
                            <td className="text-[#364A63] ps-3 py-2 font-bold text-right text-lg">$356.00</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div className='flex justify-end'>
            <div className='flex gap-6 mt-4'>
            <div className='text-[#364A63] text-[13px] border border-[#DBDFEA] font-bold px-[18px] py-2 rounded-[3px]'>Continue Shopping</div>
            <div className='text-white text-[13px] bg-[#6576FF] font-bold px-[18px] py-2 rounded-[3px]'>Checkout</div>
            </div>
            </div>
        </div>
    </div>
</div>
      </Modal>
</div>

  )

}