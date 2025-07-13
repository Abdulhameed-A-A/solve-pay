import { invoiceCardClasses } from "../../styles/invoiceClasses";

export const Invoice = () => {
  return (
    <div className={invoiceCardClasses}>
      <div className="mb-6 text-center">
        <h1 className="text-2xl font-bold text-gray-900">Dipa Inhouse</h1>
        <p className="text-gray-600">dipainhouse@gmail.co</p>
      </div>

      <div className="mb-6">
        <h2 className="text-lg font-semibold text-gray-700 mb-2">Invoice</h2>
        <p className="text-3xl font-bold text-gray-900">$1,876,580</p>
        <p className="text-gray-500">April 21, 2024</p>
      </div>

      <div className="border-t border-gray-200 my-4"></div>

      <div className="mb-4">
        <h3 className="text-md font-medium text-gray-700 mb-2">Credit Card</h3>
        <p className="text-gray-900 tracking-widest">234 ★★★★ ★★★★</p>
      </div>

      <div className="border-t border-gray-200 my-4"></div>

      {/* Credit Card Section 2 */}
      <div className="mb-6">
        <h3 className="text-md font-medium text-gray-700 mb-2">Credit Card</h3>
        <p className="text-gray-900 mb-1">VISA</p>
        <p className="text-gray-900">Bank Account</p>
      </div>

      <div className="border-t border-gray-200 my-4"></div>

      {/* Pay Button */}
      <button className="w-full py-3 bg-[#175961] text-white font-medium rounded-md hover:bg-myGreen/80 transition-colors">
        Pay
      </button>
    </div>
  )
}