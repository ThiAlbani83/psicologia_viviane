
import ButtonOrange from "../Button/ButtonOrange";
import { SlArrowDown } from "react-icons/sl";
import { Fragment, useState } from "react";
import Modal from "../Modal/Modal";



const FeedbackCards = ({ content, title }) => {
    const [showModal, setShowModal] = useState(false);

    return (
        <Fragment>
            <div className="flex justify-between items-center flex-col px-10 py-12 rounded-[20px]
                 max-w-[370px] md:mr-10 sm:mr-5 mr-0 my-5 bg-[#F8CECB] gap-10 max-h-[500px]">
                <h1 className=" text-2xl lg:text-3xl font-sans text-[#BC5023] ">
                    {title}
                </h1>
                <div className="flex flex-col ml-4 line-clamp-6">
                    <p className="font-sans font-normal text-[14px] lg:text-[18px] leading-8 text-[#BC5023] my-10">
                        {content}
                    </p>
                </div>
                <div className="flex flex-col items-center justify-center">
                    <ButtonOrange />
                    <SlArrowDown className="hover:scale-150 cursor-pointer fill-[#BC5023]"
                        onClick={() => setShowModal(true)} />
                </div> 
                <Modal
                    title={title}
                    content={content}
                    isVisible={showModal} onClose={() => setShowModal(false)} />
            </div>
        </Fragment>
    )
}
export default FeedbackCards;