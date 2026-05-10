import fs from "fs/promises";

const MEMORY_FILE =
  "./memory/history.json";

export type StoredMessage = {
  role:
    | "system"
    | "user"
    | "assistant"
    | "tool";

  content: string;
};

export async function loadMemory():
  Promise<StoredMessage[]> {

  try {

    const raw =
      await fs.readFile(
        MEMORY_FILE,
        "utf-8"
      );

    return JSON.parse(raw);

  } catch {

    return [];
  }
}

export async function saveMemory(
  messages: StoredMessage[]
) {

  await fs.writeFile(
    MEMORY_FILE,
    JSON.stringify(
      messages,
      null,
      2
    )
  );
}