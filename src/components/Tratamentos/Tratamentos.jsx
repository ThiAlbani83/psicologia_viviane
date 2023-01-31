import React from 'react'
import { feedback } from "../../constants/images";
import  FeedbackCards from "../FeedbackCards/FeedbackCards";

const Tratamentos = () => (
    <section id='terapias' className='flex justify-center items-center sm:py-16 py-6 flex-col relative mx-10'>
        <div className='w-full items-center sm:mb-16 mb-6 relative z-[1]'>
            <h1 className='text-center text-4xl font-sans font-bold text-[#BC5023] mx-10'>
                Conheça os Tratamentos
            </h1>
        </div>
        <div className="flex flex-wrap justify-center w-full relative z-[2]">
      {feedback.map((card) => (
        <FeedbackCards key={card.id} {...card} />
        ))}
    </div>
    </section>
)


export default Tratamentos