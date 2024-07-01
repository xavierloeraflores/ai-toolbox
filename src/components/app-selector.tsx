import { cn } from "~/lib/utils";
import { AppSelection } from "./app-selection";

export type App = {
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
                return <AppSelection app={app} className="" key={index} />;
            })}
        </div>
    );
};
