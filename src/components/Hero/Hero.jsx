import React from 'react'
import images from "../../constants/images";
import Button from '../Button/Button';

const Hero = () => (
    <section id="hero" className='flex md:flex-row flex-col sm:py-16 py-6 mx-auto my-6'>
        <div className="flex justify-between items-center flex-col lg:flex-row px-6">
            <div className='w-full border-y-2 border-y-[#BC5023]  py-16 items-center'>
                <h1 className='flex-wrap text-center text-4xl font-sans font-bold text-[#BC5023] mb-10 mx-20'>
                    Porquê fazer terapia?
                </h1>
                <p className='text-base font-sans text-[#BC5023] mx-20 text-start'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates magni adipisci,
                    delectus sapiente obcaecati, voluptatem error illo eaque minima quisquam eum
                    deleniti. Optio maxime officiis culpa quidem laboriosam atque sequi!
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates magni adipisci,
                    delectus sapiente obcaecati, voluptatem error illo eaque minima quisquam eum
                    deleniti. Optio maxime officiis culpa quidem laboriosam atque sequi!
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates magni adipisci,
                    delectus sapiente obcaecati, voluptatem error illo eaque minima quisquam eum
                    deleniti. Optio maxime officiis culpa quidem laboriosam atque sequi!
                </p>
                <div className='text-center justify-center mt-10'>
                    <Button />
                </div>
            </div>
            <div className='mx-10 my-6 w-full'>
                <img src={images.consultorio1} alt="consultorio" className='opacity-75 rounded-3xl' />
            </div>
        </div>
    </section>
)


export default Hero;