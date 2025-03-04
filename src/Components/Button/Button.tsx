

type TButton ={
    onClick?: () => void;
    children: React.ReactNode;
}


function Button({children,onClick}:TButton) {
  return (
    <button onClick={onClick} className="text-white  ">
        {children}
    </button>
  )
}

export default Button