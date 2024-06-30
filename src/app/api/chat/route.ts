import { openai } from "@ai-sdk/openai";
import { type CoreMessage } from "ai";
import { streamText } from "ai";
interface ChatResquest {
    messages: CoreMessage[];
}

export const maxDuration = 30;

export async function POST(req: Request) {
    try {
        const { messages } = (await req.json()) as ChatResquest;

        const result = await streamText({
            model: openai("gpt-4-turbo"),
            messages,
        });

        return result.toAIStreamResponse();
    } catch (error) {
        console.error(error);
    }
}
