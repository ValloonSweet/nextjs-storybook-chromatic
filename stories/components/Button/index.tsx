import React from "react"

type ButtonProps = {
    size: string
    children: React.ReactNode
}

const Button = ({size, children}: ButtonProps) => {
    return( <button className={` bg-red-400 font-bold text-white px-6 py-2 ${size} `}>
        {children}
    </button>)
}

export default Button;