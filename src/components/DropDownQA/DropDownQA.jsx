import { Dropdown } from 'flowbite-react'
import React from 'react'
import { RiArrowDownSLine } from 'react-icons/ri'

const DropDownQA = ({ content, title }) => (

  <div className='w-full lg:w-[600px] lg:px-0 px-4  relative my-6 border-black'>
    <input type='checkbox' className='peer absolute top-0 inset-x-0 w-full h-12 opacity-0 z-10 cursor-pointer' />
    <div className='title bg-[#BC5023] h-8 lg:h-12 w-full pl-5 flex items-center rounded-lg'>
      <h1 className='lg:text-lg text-sm font-semibold text-white'>
        {title}
      </h1>
    </div>
    <div className='arrow lg:text-[32px] text-[28px] absolute lg:top-3 top-1 lg:right-3 right-5 text-white 
      transition-transform duration-500 rotate-0 peer-checked:rotate-18'>
      <RiArrowDownSLine />
    </div>
    <div className='dropdown bg-gray-200 overflow-hidden max-h-0 peer-checked:max-h-fit rounded-md '>
      <div className='p-4'>
        <p className='font-poppins font-semibold text-sm lg:text-[18px] leading-8 text-[#BC5023] my-10'>
          {content}
        </p>
      </div>
    </div>
  </div>

)


export default DropDownQA