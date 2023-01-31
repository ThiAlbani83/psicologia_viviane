import React from 'react'
import images from "../../constants/images";
import { socialMedia } from "../../constants/images";


const Footer = () => (

    <section className='flex flex-col py-1 w-full my-0 bg-[#F8CECB] items-center'>

        <div className="flex flex-col lg:flex-row lg:gap-10 items-center lg:mb-3">
            <a href='#hero' className='font-sans font-normal text-[10px] lg:text-[16px] leading-8 text-[#BC5023] -my-1 w-fit hover:scale-110'>Principal</a>
            <a href='#quemsou' className='font-sans font-normal text-[10px] lg:text-[16px] leading-8 text-[#BC5023] -my-1 w-fit hover:scale-110'>Quem Sou?</a>
            <a href='#terapias' className='font-sans font-normal text-[10px] lg:text-[16px] leading-8 text-[#BC5023] -my-1 w-fit hover:scale-110'>Terapias</a>
            <a href='#duvidas' className='font-sans font-normal text-[10px] lg:text-[16px] leading-8 text-[#BC5023] -my-1 w-fit hover:scale-110'>Perguntas Frequentes</a>
            <a href='#contato' className='font-sans font-normal text-[10px] lg:text-[16px] leading-8 text-[#BC5023] -my-1 w-fit hover:scale-110'>Contato</a>
        </div>

        <div className='flex-col items-center'>
            <div className="flex flex-row justify-center">
                {socialMedia.map((social, index) => (
                    <a href={`${social.link}`} target='_blank' className='hover:scale-110'>
                        <img key={social.id} src={social.icon} alt={social.id}
                            className={`lg:w-[42px] lg:h-[42px] w-[21px] h-[21px] object-contain cursor-pointer
              ${index !== socialMedia.length - 1 ? 'mr-6 lg:mb-2 mb-4' : 'mr-0'}`} />
                    </a>
                ))}
            </div>
        </div>
        <p className='font-sans font-normal text-[8px] lg:text-[12px] leading-8 text-[#BC5023] my-0 w-fit'>Criado por Thiago Albani Pereira</p>

    </section>
)

export default Footer