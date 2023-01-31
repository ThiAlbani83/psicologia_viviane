import React from 'react'
import images from "../../constants/images";
import ButtonWhite from '../Button/ButtonWhite';

const QuemSou = () => (
    <section id='quemsou' className='flex md:flex-row flex-col sm:py-16 py-6 mx-10 my-6 bg-[#F8CECB] rounded-3xl' >
        <div className="flex justify-between items-center flex-col lg:flex-row px-6">
            <div className='mx-10 my-6 w-full'>
                <img src={images.consultorio2} alt="consultorio" className='opacity-75 rounded-3xl' />
            </div>
            <div className=' flex flex-col justify-center w-full h-full border-l-2 border-l-[#BC5023]'>
                 <div className='w-full py-16'>
                    <h1 className='text-center text-4xl font-sans font-bold text-[#BC5023] mb-10 mx-10'>
                        Sobre mim
                    </h1>
                    <p className='text-base font-sans text-[#BC5023] mx-10 text-start'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Laboriosam maxime asperiores illo, voluptatibus neque labore, sit, provident
                        doloremque officiis dicta praesentium? In iste aspernatur consequatur sed
                        dolores error doloremque debitis.
                    </p>
                    <div className='text-center mt-10'>
                        <ButtonWhite />
                    </div>
                </div>
            </div>
        </div>
    </section>
)


export default QuemSou