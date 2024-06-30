// ./app/page.tsx
import ClientComponent from "~/components/ClientComponent";
import { fetchAccessToken } from "@humeai/voice";

export default async function Page() {
    const accessToken = await fetchAccessToken({
        apiKey: String(process.env.HUMEAI_API_KEY),
        secretKey: String(process.env.HUMEAI_SECRET_KEY),
    });

    if (!accessToken) {
        throw new Error();
    }

    return <ClientComponent accessToken={accessToken} />;
}
