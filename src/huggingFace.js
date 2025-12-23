
import { prevUser } from "./context/UserContext";
const HUGGING_FACE_KEY = import.meta.env.VITE_HUGGING_FACE_API_KEY;

export async function query() {
	const response = await fetch(
		"https://router.huggingface.co/fal-ai/fal-ai/fast-sdxl",
		{
			headers: {
				Authorization: `Bearer ${HUGGING_FACE_KEY}`,
				"Content-Type": "application/json",
			},
			method: "POST",
			body: JSON.stringify({"prompt": prevUser.prompt}),
		}
	);
	const result = await response.blob();
	return result;
}
