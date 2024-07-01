import { AppSelector, type App } from "~/components/app-selector";
export default function HomePage() {
    const apps: App[] = [
        { name: "Hume AI EVI", url: "hume", image: "/images/hume" },
        { name: "ChatGPT", url: "chatgpt", image: "/image/chatgpt" },
    ];
    return (
        <main className="flex min-h-screen flex-col items-center justify-center">
            <AppSelector apps={apps} />
        </main>
    );
}
