import AbilitiesCard from "@/components/cards/SkillsCard"
import AboutMeCard from "@/components/cards/AboutMeCard.tsx"
import CertificatesCard from "@/components/cards/CertificatesCard.tsx"
import ProjectsCard from "@/components/cards/ProjectsCard.tsx"

const cards = [
    AboutMeCard,
    AbilitiesCard,
    ProjectsCard,
    CertificatesCard,
]

export default function MainGrid() {
    return (
        <div className="relative z-10 w-full bg-background mt-[100vh] md:mt-[50vh]">
            <div className="flex justify-center">
                <div className="w-[95vw] md:w-[85vw] 2xl:w-[80vw] space-y-3 p-4 pt-0 md:columns-2">
                    {cards.map((Card, index) => (
                        <div key={index} className="w-full break-inside-avoid">
                            <Card />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
