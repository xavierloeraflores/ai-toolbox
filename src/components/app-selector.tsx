import Link from "next/link";
import { cn } from "~/lib/utils";

type App = {
    name: string;
    url: string;
    image: string;
};

type AppSelectorProps = {
    apps: App[];
};

export const AppSelector: React.FC<
    AppSelectorProps & { className?: string }
> = ({ apps, className = "" }) => {
    return (
        <div className={cn("", className)}>
            {apps.map((app, index) => {
                return (
                    <Link href={app.url} key={index}>
                        {app.name}
                    </Link>
                );
            })}
        </div>
    );
};
