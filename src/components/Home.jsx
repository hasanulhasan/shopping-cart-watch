import gallery from './../assets/product-gallery.png'
export default function Home() {
  return (
    <div className="bg-gray-100 h-screen">
    <div className="max-w-[1320px] max-h-[720px] mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-center h-screen">
        <div className="flex flex-col md:flex-row -mx-4 border border-gray-700">
            <div className="md:flex-1">
                <div className="h-[460px] rounded-lg bg-gray-300">
                    <img className="w-full h-full object-fit" src={gallery} alt="Product Image"/>
                </div>
            </div>
            <div className="md:flex-1 px-10 py-6 max-w-[630px] max-h-[540px]">
                <h2 className="text-2xl font-bold text-gray-800 mb-2">Classy Modern Smart Watch</h2>
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

  <span className="text-slate-400 text-sm">
	(2 reviews)
  </span>
</div>
                
                <div className="flex mb-4">
                    <div className="mr-4">
                        <delete className="text-[#8091A7] text-xl font-normal mr-2">$99.00</delete>
                        <delete className="text-[#6576FF] text-xl font-bold">$79.00</delete>
                    </div>
                </div>
                    <p className="text-gray-600 text-base font-normal mb-4">
                    I must explain to you how all this mistaken idea of denoun cing ple praising pain was born and I will give you a complete account of the system, and expound the actual teaching.
                    </p>
                <div className="mb-4">
                    <span className="font-bold text-gray-700 text-base">Brand Color</span>
                    <div className="flex items-center mt-2">
                        <button className="w-6 h-6 rounded-full bg-[#816BFF] mr-2"></button>
                        <button className="w-6 h-6 rounded-full bg-[#1FCEC9] mr-2"></button>
                        <button className="w-6 h-6 rounded-full bg-[#4B97D3] mr-2"></button>
                        <button className="w-6 h-6 rounded-full bg-[#3B4747] mr-2"></button>
                    </div>
                </div>
                <div className="mb-4">
                    <span className="font-bold text-gray-700">Wrist Size</span>
                    <div className="flex items-center mt-2">
                        <button className="text-[#8091A7] py-2 px-4 rounded-[3px] text-sm mr-2 border border-[#6576FF]"><span className="font-bold text-[#6576FF]">S</span> $69</button>
                        <button className="text-[#8091A7] py-2 px-4 rounded-[3px] text-sm mr-2 border border-[#DBDFEA]"><span className="font-bold text-[#364A63]">M</span> $79</button>
                        <button className="text-[#8091A7] py-2 px-4 rounded-[3px] text-sm mr-2 border border-[#DBDFEA]"><span className="font-bold text-[#364A63]">L</span> $89</button>
                        <button className="text-[#8091A7] py-2 px-4 rounded-[3px] text-sm mr-2 border border-[#DBDFEA]"><span className="font-bold text-[#364A63]">XL</span> $99</button>
                    </div>
                </div>
                
            </div>
        </div>
    </div>
</div>

  )

}