import { type App } from "./app-selector";
import { Card, CardHeader, CardContent, CardTitle } from "~/components/ui/card";
import Link from "next/link";
import { AspectRatio } from "~/components/ui/aspect-ratio";
import { cn } from "~/lib/utils";
import Image from "next/image";

type AppSelectionProps = {
    app: App;
};

export const AppSelection: React.FC<
    AppSelectionProps & { className?: string }
> = ({ app, className = "" }) => {
    return (
        <Link
            href={app.url}
            className={cn("m-8 hover:bg-white hover:opacity-75", className)}
        >
            <Card className="transform transition-transform hover:scale-110">
                <CardHeader className="flex justify-center ">
                    <CardTitle className="text-center">{app.name}</CardTitle>
                </CardHeader>
                <CardContent>
                    <AspectRatio
                        ratio={1}
                        className="overflow-hidden rounded-md bg-white"
                    >
                        <Image
                            src={app.image}
                            alt={app.name}
                            width={300}
                            height={300}
                        />
                    </AspectRatio>
                </CardContent>
            </Card>
        </Link>
    );
};
