import MyPhotoImg from "/my-photo.jpg";
import { RiArrowDownWideFill } from "react-icons/ri";
import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";

const name = "Levi Girotto";
const description = "Estudante de Engenharia da Computação, Desenvolvedor Web";

export function SocialMedia() {
    return (
        <div className="flex gap-2">
            <a className="cursor-pointer text-foreground" 
                href="https://www.linkedin.com/in/levigirotto/"
            >
                <FaLinkedin className="h-8 w-8" />
            </a>
            <a className="cursor-pointer text-foreground"
                href="https://github.com/levigirotto"
            >
                <FaGithub className="h-8 w-8" />
            </a>
            <a className="cursor-pointer text-foreground"
                href="https://www.instagram.com/levigirotto/"
            >
                <FaInstagram className="h-8 w-8" />
            </a>
        </div>
    )
}

export default function MyInfo() {
    return (
        <div className="fixed top-12 left-0 w-full max-w-[100vw] h-full bg-background">
            <img
                className="w-full h-[40vh] object-cover"
                src={MyPhotoImg}
                alt="My photo"
            />
            <div className="absolute top-0 left-0 w-full p-4">
                <div className="flex justify-between text-neutral-50">
                    <div className="hidden md:flex flex-col justify-center md:justify-start p-2 lg:p-8 gap-5">
                        <h1 className="w-20 md:w-auto text-2xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-bold">{name}</h1>
                        <div className="flex flex-col w-10 md:w-64 lg:w-[30vw]">
                            <h2 className="text-sm md:text-lg lg:text-xl font-anek">{description}</h2>
                        </div>
                        <SocialMedia />
                    </div>
                </div>
            </div>

            <div className="md:hidden w-full flex flex-col gap-2 items-center p-4">
                <h1 className="font-bold text-7xl">{name}</h1>
                <h2 className="font-anek">{description}</h2>
            </div>
            <div className="flex justify-center">
                <RiArrowDownWideFill className="h-8 w-8"/>
            </div>
        </div>
    )
}
