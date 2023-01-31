import React from "react";
import images from "../../constants/images";
import { socialMedia } from "../../constants/images";

const Navbar = () => {
    const [toggle, setToggle] = React.useState(false);


    return (
        <nav className="static w-full p-3 bg-[#F8CECB]">
            <div className="flex items-center justify-between ml-4">
                <div className="pt-2">
                    <img src={images.logo} alt="logo" className="w-[100px]" />
                </div>

                <div className="flex flex-1 items-center flex-col">
                    <h1 className=" font-anton text-[24px]  text-[#BC5023] font-normal">VIVIANE TOLINI</h1>
                    <p className="font-anton text-[18px] text-[#BC5023] font-normal">Psicóloga</p>
                </div>

                <div className="hidden md:flex md:text-[15px] mr-10 gap-10">
                    <p className="hover:scale-110"><a href="#hero" className="font-anton text-[#BC5023]">Principal</a></p>
                    <p className="hover:scale-110"><a href="#quemsou" className="font-anton text-[#BC5023]">Quem Sou?</a></p>
                    <p className="hover:scale-110"><a href="#terapias" className="font-anton text-[#BC5023]">Terapias</a></p>
                    <p className="hover:scale-110"><a href="#duvidas" className="font-anton text-[#BC5023]">Dúvidas Frequentes</a></p>
                    <p className="hover:scale-110"><a href="#contato" className="font-anton text-[#BC5023]">Contato</a></p>
                </div>

                <div className="flex md:hidden justify-end w-8 mr-4">
                    <img src={toggle ? images.close40 : images.menu30} alt="menu" className="w-7 h-7 object-contain cursor-pointer"
                        onClick={() => setToggle((prev) => !prev)} />


                    <div className={`${toggle ? 'flex' : 'hidden'} p-6 absolute top-32 right-0 mx-4 my-2 min-w[150px] rounded-xl bg-[#F8CECB]`}>
                        <div className="h-full flex flex-col justify-center items-center gap-y-3 font-anton font-normal text-base">
                            <a href="#hero" className="text-[#BC5023] hover:scale-110">Principal</a>
                            <a href="#quemsou" className="text-[#BC5023] hover:scale-110">Quem sou?</a>
                            <a href="#terapias" className="text-[#BC5023] hover:scale-110">Terapias</a>
                            <a href="#duvidas" className="text-[#BC5023] hover:scale-110">Dúvidas Frequentes</a>
                            <a href="#contato" className="text-[#BC5023] hover:scale-110">Contato</a>
                        </div>
                    </div>

                </div>
                <div className="lg:flex hidden flex-col justify-center">
                {socialMedia.map((social, index) => (
                    <a href={`${social.link}`} target='_blank' className="hover:scale-110">
                        <img key={social.id} src={social.icon} alt={social.id}
                            className={`w-[21px] h-[21px] cursor-pointer
              ${index !== socialMedia.length - 1 ? 'mr-6 lg:mb-2 mb-4' : 'mr-0'}`} /> 
                    </a>
                ))}
            </div>
            </div>
            
        </nav>
    )
}

export default Navbar