import { FaPaintBrush, FaChalkboardTeacher } from "react-icons/fa"
import { FaGear } from "react-icons/fa6"
import { IoDiamond } from "react-icons/io5";
import CardTemplate from "@/components/cards/CardTemplate.tsx"
import { Progress } from "@/components/ui/progress"

function Skill({img, text, level}: {img: string; text: string; level: number}) {
    return (
        <div className="p-1 flex items-center gap-2">
            <img src={img} className="h-4"/>
            <div className="w-full flex items-center gap-1">
                <p className="text-sm">{text}</p>
                <Progress className="ml-auto w-[45%]" value={level} />
            </div>
        </div>
    )
}

export const skills = [
    {
        name: "HTML",
        image: "/tools/html.png",
        level: 80,
    },
    {
        name: "CSS",
        image: "/tools/css.svg",
        level: 70,
    },
    {
        name: "JavaScript",
        image: "/tools/js.jpg",
        level: 80,
    },
    {
        name: "TypeScript",
        image: "/tools/ts.png",
        level: 40,
    },
    {
        name: "React.js",
        image: "/tools/react.png",
        level: 60,
    },
    {
        name: "Tailwind CSS",
        image: "/tools/tailwindcss.png",
        level: 60,
    },
    {
        name: "Git",
        image: "/tools/git.png",
        level: 50,
    },
    {
        name: "API Handling",
        image: "/tools/gear.png",
        level: 50,
    },
    {
        name: "Node.js",
        image: "/tools/node.png",
        level: 20,
    },
    {
        name: "Express.js",
        image: "/tools/express.webp",
        level: 20,
    },
    {
        name: "SQL",
        image: "/tools/sql.png",
        level: 30,
    },
    {
        name: "C",
        image: "/tools/c.png",
        level: 65,
    },
    {
        name: "Python",
        image: "/tools/python.png",
        level: 50,
    },
    {
        name: "Shadcn/UI",
        image: "/tools/shadcn.png",
        level: 70,
    },
]

export default function SkillsCard() {
    return (
        <CardTemplate 
            title="Competências"
            content={
                <div className="flex flex-col gap-5">
                    <h2 className="text-lg text-muted-foreground">Técnicas + nível de capacidade</h2>
                    <div className="columns-1 xl:columns-2 2xl:columns-3 space-y-1 md:space-y-2">
                        {skills.map((skill) => 
                            <Skill text={skill.name} img={skill.image} level={skill.level}/>
                        )}
                    </div>
                    <h2 className="text-lg text-muted-foreground">Pessoais</h2>
                    <div className="flex flex-col 2xl:flex-row gap-6">
                        <div className="flex items-center gap-2">
                            <FaGear size={25} />
                            <p>Lógica</p>
                        </div>
                        <div className="flex items-center gap-2">
                            <FaPaintBrush size={25} />
                            <p>Criatividade</p>
                        </div>
                        <div className="flex items-center gap-2">
                            <IoDiamond size={25} />
                            <p>Excelência</p>
                        </div>
                        <div className="flex items-center gap-2">
                            <FaChalkboardTeacher size={25} />
                            <p>Autodidatismo</p>
                        </div>
                    </div>
                </div>
            }
        />
    )
}
