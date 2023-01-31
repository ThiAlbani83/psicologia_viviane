import React, { Fragment } from 'react'
import { AiFillCloseCircle } from 'react-icons/ai'
import ButtonWhite from '../Button/ButtonWhite';

const Modal = ({ isVisible, onClose, content, title }) => {
    if (!isVisible) return null;
    

    return (
        <Fragment>
            <div className='fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm
                flex justify-center items-center'>
                <div className='lg:w-[600px] relative w-full lg:h-fit h-full flex flex-col my-12 items-center justify-center'>
                    <AiFillCloseCircle className='absolute lg:-top-3 lg:-right-3 top-0 right-0 fill-[#BC5023] text-[30px] place-self-end hover:scale-125'onClick={() => onClose()} />
                    <div className='bg-[#F8CECB] p-2 rounded overflow-auto lg:overflow-hidden'>
                        <div className="flex justify-between items-center flex-col px-10 py-12 w-full md:mr-10 sm:mr-5 mr-0 my-5 gap-10">
                            <h1 className=" text-3xl font-sans text-[#BC5023] ">
                                {title}
                            </h1>
                            <div className="flex flex-col ml-4">
                                <p className="font-sans font-normal text-[18px] leading-8 text-[#BC5023] my-2">
                                    {content}
                                </p>
                            </div>
                            <div onClick={() => onClose()}>
                                <ButtonWhite />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default Modal;