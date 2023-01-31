import React from "react";

const ButtonSubmit = () => {

  const clickAnimation = 'animation-bounce duration-300';

  return (
    <button type="submit" className={`py-4 px-6 bg-[#F8CECB] 
    font-poppins font-medium text-[18px]
  text-primary outline-none rounded-full hover:bg-[#daaeab]`}>
      Envie sua Mensagem
    </button>
  )
}

export default ButtonSubmit; 