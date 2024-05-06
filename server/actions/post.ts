"use server";
import { nodeDb } from "@/server/db/tursoClients";
import { messages } from "@/server/db/schema";

export async function createMessage(formData: FormData): Promise<boolean> {
  const rawFormData = {
    name: formData.get("name") as string,
    title: formData.get("title") as string,
    email: formData.get("email") as string,
    message: formData.get("message") as string,
  };
  try {
    await nodeDb.insert(messages).values(rawFormData).execute();
    return true;
  } catch (error) {
    console.log("Failed to create message:", error);
    return false;
  }
}
