import {
  Card,
  CardContent,
} from "@/components/ui/card"
import CardTemplate from "@/components/cards/CardTemplate.tsx"
import { skills } from "./SkillsCard"
import { HiMiniArrowTopRightOnSquare as GoArrow} from "react-icons/hi2";

const projects = [
    {
        name: "API Cards",
        description: "Manipulando APIs com cards!",
        link: "https://apicards-one.vercel.app/",
        videoSrc: "/videos/apicards.mp4",
        skillsCovered: [0, 1, 2, 3, 4, 5, 6, 7, 13],
    },
    {
        name: "Hinário",
        description: "Um hinário (usado semanalmente)",
        link: "https://hinario-ten.vercel.app/",
        videoSrc: "/videos/hinario.mp4",
        skillsCovered: [0, 1, 2, 4, 6],
    }
]

interface project {
    name: string,
    description: string,
    link: string,
    videoSrc: string,
    skillsCovered: number[]
}

function PortfolioCard() {
    return (
        <Card className="bg-background2 border-none shadow-none">
            <CardContent className="flex flex-col xl:flex-row rounded container gap-4 w-full h-full p-3">
                <img className="rounded-lg xl:w-[35%] opacity-50 object-contain" src="/portfolio-print.png"/>
                <div className="flex flex-col flex-1">
                    <h2 className="text-xl 2xl:text-2xl font-semibold text-muted-foreground">Meu portfólio (você está aqui)</h2>
                    <p className="text-sm text-muted-foreground">Levi Girotto's Portfolio</p>
                    <p className="text-sm text-muted-foreground">https://levigirotto.vercel.app/</p>
                    <div className="h-full flex items-center gap-1 mt-2">
                        {[0, 1, 2, 3, 4, 5, 6, 13].map(i => 
                            <img key={skills[i].name} className="h-4 xl:h-[1.5vw] opacity-50" src={skills[i].image} />
                        )}
                    </div>
                </div>
                <div className="hidden flex items-center justify-center mr-4">
                    <GoArrow className="flex h-8 w-8"/>
                </div>
            </CardContent>
        </Card>
    )
}

function ProjectCard({name, description, link, videoSrc, skillsCovered}: project) {
    return (
        <a href={link}>
            <Card className="bg-muted border-none">
                <CardContent className="flex flex-col xl:flex-row container gap-4 w-full h-full p-3">
                    <video className="rounded-lg xl:w-[35%]" src={videoSrc} autoPlay loop muted />
                    <div className="flex flex-col flex-1">
                        <h2 className="text-xl 2xl:text-2xl font-semibold">{name}</h2>
                        <p className="text-sm text-muted-foreground">{description}</p>
                        <p className="text-sm text-muted-foreground">{link}</p>
                        <div className="h-full flex items-center gap-1 mt-2">
                            {skillsCovered.map(i => 
                                <img key={skills[i].name} className="h-4 xl:h-[1.5vw]" src={skills[i].image} />
                            )}
                        </div>
                    </div>
                    <div className="hidden flex items-center justify-center mr-4">
                        <GoArrow className="flex h-8 w-8"/>
                    </div>
                </CardContent>
            </Card>
        </a>
    )
}

export default function ProjectsCard() {
    return (
        <CardTemplate 
            title="Projetos + ferramentas usadas"
            content={
                <div className="flex flex-col gap-3">
                    {projects.map((project) => 
                        <ProjectCard 
                            name={project.name}
                            description={project.description}
                            link={project.link}
                            videoSrc={project.videoSrc}
                            skillsCovered={project.skillsCovered}
                        />
                    )}
                    <PortfolioCard />
                </div>
            }
        />
    )
}
