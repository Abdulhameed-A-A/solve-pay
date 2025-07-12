import { TopPage } from "./TopPage"
import FuturePayment from "./FuturePayment"

const HomePage = () => {
  return (
    <>
      <div className="w-full">
        <TopPage />
      </div>
      <div className="flex justify-center w-full">
        <FuturePayment />
      </div>
    </>
  )
}

export default HomePage