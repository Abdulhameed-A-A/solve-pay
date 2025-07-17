const Button = ({ children, variant, onClick, className = "" }) => {

  const baseClassess =
    variant === 'light' ? "bg-[#fff] py-[10px] px-[30px] rounded-[10px] shadow-sm text-deepGreen" :
      "bg-myGreen text-white px-4 py-2 rounded-md hover:bg-myGreen shadow-sm transition-colors"
  return (
    <button
      onClick={onClick}
      className={`cursor-pointer ${baseClassess} ${className}`}
    >
      {children}
    </button>
  )
}

export default Button;