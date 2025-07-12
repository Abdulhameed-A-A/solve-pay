import { Invoice } from "./Invoice"

export const BodyTopPage = () => {
  return (
    <>
      <div className="flex flex-col lg:flex-row items-start mt-6 w-full px-2 sm:px-4 lg:px-0 max-w-screen-xl mx-auto">
        {/* Left: Headings and Signup */}
        <div className="w-full lg:w-1/2 flex flex-col items-start pt-0 lg:pt-[32px]">
          <h2 className="text-3xl sm:text-5xl lg:text-[80px] font-bold text-deepGreen leading-tight">
            Get Paid early<br />
          </h2>
          <p className="text-xl sm:text-3xl lg:text-[78px] text-[#222] font-medium leading-tight">
            save automatically <br /> all your pay.
          </p>
          <p className="text-gray-600 text-sm sm:text-base lg:text-[20px] leading-relaxed mb-6 lg:mb-[60px] mt-4 lg:mt-[20px]">
            Supports small businesses with simple invoicing, <br className="hidden lg:block" /> powerful integration, and cash flow management tools
          </p>
          <div className="relative w-full max-w-full sm:max-w-md mb-6 lg:mb-0">
            <input
              type="email"
              placeholder="Your business email"
              className="w-full py-3 sm:py-4 pl-4 pr-20 sm:pr-24 text-gray-700 border border-gray-300 rounded-[10px] sm:rounded-[15px] focus:outline-none focus:ring-1 focus:ring-myGreen shadow-sm text-base sm:text-lg"
            />
            <button className="absolute right-1 top-1/2 transform -translate-y-1/2 bg-myGreen text-white px-4 sm:px-5 py-2.5 sm:py-3 rounded-[8px] sm:rounded-[10px] hover:bg-myGreen transition-colors text-sm sm:text-base">
              Get Started
            </button>
          </div>
        </div>
        {/* Right: Invoice aligned with Sign Up button */}
        <div className="w-full lg:w-1/2 flex justify-center lg:justify-end items-start lg:mt-[56px] mt-6">
          <div className="w-full max-w-full sm:max-w-[400px] md:max-w-[450px] px-1">
            <Invoice />
          </div>
        </div>
      </div>
    </>
  )
}