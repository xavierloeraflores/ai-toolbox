import { AppSelector, type App } from "~/components/app-selector";
export default function HomePage() {
    const apps: App[] = [
        { name: "Hume AI EVI", url: "hume", image: "/images/apps/Hume.png" },
        { name: "ChatGPT", url: "chatgpt", image: "/images/apps/ChatGPT.png" },
    ];
    return (
        <main className="flex min-h-screen flex-col items-center justify-center">
            <AppSelector apps={apps} />
        </main>
    );
}
