import React from 'react'
import { RiArrowDownSLine } from 'react-icons/ri';
import DropDownQA from '../DropDownQA/DropDownQA';
import { perguntas } from "../../constants/images";

const DuvidasFrequentes = () => (
  <section id='duvidas' className='flex items-center justify-center flex-col lg:py-8 py-0 lg:mx-10 mx-4 my-2 bg-[#F8CECB] rounded-3xl'>
    <div className='relative'>
      <div className='items-center lg:mb-6 my-0'>
        <h1 className='text-center text-4xl font-sans font-bold text-[#BC5023]'>
          Dúvidas Frequentes
        </h1>
      </div>
      <div className='flex justify-center items-center flex-col'>
        {perguntas.map((card) => (
          <DropDownQA key={card.id} {...card} />
        ))} 
      </div>
    </div>
  </section>
)


export default DuvidasFrequentes  