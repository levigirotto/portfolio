import CardTemplate from "@/components/cards/CardTemplate.tsx"
import { MdEmail, MdPhone } from "react-icons/md";
import { SocialMedia } from "@/components/MyInfo.tsx"

const text = "Olá, meu nome é Levi e sou um estudante de Engenharia da Computação. Desde criança sempre fui interessado por tecnologia e apaixonado por criar e construir. Recentemente encontrei na área da computação a melhor maneira de por essas aptidões em prática. Atualmente, minhas habilidades estão direcionadas para a área do Desenvolvimento Web, mas sigo explorando diferentes áreas da programação para descobrir qual delas mais combina com meu perfil e objetivos."

export default function AboutMeCard() {
    return (
        <CardTemplate 
            title="Sobre mim"
            content={
                <div className="flex flex-col gap-5">
                    <p>{text}</p>
                    <div className="flex flex-col xl:flex-row gap-10">
                        <div className="flex flex-col gap-2">
                            <h3 className="font-semibold">Contato</h3>
                            <div className="flex items-center gap-4">
                                <MdEmail size={30}/>
                                <div className="flex flex-col">
                                    <h2 className="font-semibold">Email</h2>
                                    <p>levigirotto18@gmail.com</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-4">
                                <MdPhone size={30}/>
                                <div className="flex flex-col">
                                    <h2 className="font-semibold">Telefone</h2>
                                    <p>+55 19 99217-1984</p>
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col gap-2">
                            <h3 className="font-semibold">Links</h3>
                            <SocialMedia />
                        </div>
                    </div>
                </div>
            }
        />
    )
}
