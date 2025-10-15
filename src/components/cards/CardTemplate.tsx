import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

import { type ReactNode } from "react";

export default function CardTemplate({title, content}: {title: string, content: ReactNode}) {
    return (
        <Card className="border-none shadow-none bg-transparent">
            <CardHeader>
                <CardTitle>
                    <h2 className="text-xl font-normal">{title}</h2>
                </CardTitle>
            </CardHeader>
            <CardContent className="bg-background2 rounded-xl pt-6">
                {content}
            </CardContent>
        </Card>
    )
}
