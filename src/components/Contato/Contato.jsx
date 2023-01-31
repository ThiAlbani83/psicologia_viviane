import React, {useRef} from 'react'
import emailjs from '@emailjs/browser';
import ButtonSubmit from '../Button/ButtonSubmit';
import images from "../../constants/images";

const Contato = () => {

    const form = useRef();

    function sendEmail(e) {
        e.preventDefault();

        emailjs.sendForm('gmail', 'template_4qz6v15', form.current, 'MdqeDAyl_jUHjmYes')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
            e.target.reset();
    }

    return (
        <section id='contato' className='flex flex-col items-center justify-center lg:py-4 py-0 lg:mx-10 mx-0 lg:my-6 my-4' >
            <div className='items-center lg:my-6 my-0'>
                <h1 className='text-center lg:text-4xl text-2xl font-sans font-bold text-[#BC5023]'>
                    Entre em Contato
                </h1>
            </div>
            <div className='w-full'>
                <form ref={form} onSubmit={sendEmail} className='w-full border-[2px] border-none'>
                    <div className='flex flex-col items-center justify-center w-full p-3 gap-y-5'>
                        <input type='text' placeholder='Seu Nome...' name='name' className='border-[1px] border-solid rounded-lg border-[#BC5023] pl-2 lg:w-[700px] lg:h-[54px] w-[75%] h-[45px]' />
                        <input type='email' placeholder='Seu Email...' name='email' className='border-[1px] border-solid rounded-lg border-[#BC5023] pl-2 lg:w-[700px] lg:h-[54px] w-[75%] h-[45px]' />
                        <textarea rows='8' placeholder='Sua Mensagem' name='message' 
                        className='
                        border-[1px]
                        border-solid rounded-lg
                        border-[#BC5023] 
                        pl-2 
                        lg:w-[700px] 
                        lg:min-h-[200px]
                        lg:max-h-[300px]
                        w-[75%] 
                        h-[90px]
                        font-sans
                        font-normal
                        transition
                        ease-in-out'/>
                        
                        <ButtonSubmit type='submit' />
                        <div className='fixed lg:bottom-8 lg:right-8 bottom-3 right-3 z-10'>
                        <a href='http://wa.me/+554891564450' target="_blank">
                            <img src={images.whatsapp1} alt="whatsapp" className='lg:w-[100px] w-[75px] animate-bounce'/>
                        </a>
                        </div>
                    </div>
                </form>
            </div>
        </section>
    )
}
export default Contato