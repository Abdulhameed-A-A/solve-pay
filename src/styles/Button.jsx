const Button = ({ children, variant, onClick }) => {
  return (
    <button onClick={onClick} className={`
      cursor-pointer
      ${variant === 'light' ? "bg-[#fff] py-[10px] px-[30px] rounded-[10px] shadow-sm text-deepGreen" :
      "bg-myGreen text-white px-4 py-2 rounded-md hover:bg-myGreen transition-colors" }
    `}>
        {children}
    </button>
  )
}

export default Button;