import promptSync from "prompt-sync";

const dangerousCommands = [
  "rm",
  "rmdir",
  "del",
  "format",
  "shutdown",
  "reboot",
  "git reset --hard",
];

const protectedFiles = [".env", "package.json", "pnpm-lock.yaml"];

export function isDangerousCommand(command: string): boolean {
  const normalized = command.toLowerCase();

  return dangerousCommands.some((dangerous) => normalized.includes(dangerous));
}

export function isProtectedFile(filePath: string): boolean {
  return protectedFiles.some((file) => filePath.includes(file));
}

const prompt = promptSync();

export function askConfirmation(message: string): boolean {
  const answer = prompt(`${message} (y/n): `);

  return answer.toLowerCase() === "y";
}
