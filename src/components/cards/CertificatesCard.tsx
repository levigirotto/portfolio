import CardTemplate from "@/components/cards/CardTemplate.tsx"
import react_TS from "/certificates/React+TS.jpg"
import web_dev from "/certificates/WebDev.jpg"

const certificates = [
    web_dev,
    react_TS,
]

export default function CertificatesCard() {
    return (
        <CardTemplate 
            title="Certificados"
            content={
                <div className="columns-1 md:columns-2 space-y-4">
                    {certificates.map((certificate) =>
                        <img src={certificate} />
                    )}
                </div>
            }
        />
    )
}
