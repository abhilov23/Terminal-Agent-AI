export function extractInlineToolCall(raw: string): {
  name: string;
  parameters: Record<string, unknown>;
} | null {
  const text = raw.trim();

  if (!text.startsWith("{") || !text.endsWith("}")) {
    return null;
  }

  try {
    const parsed = JSON.parse(text) as {
      name?: string;
      parameters?: Record<string, unknown>;
    };

    if (!parsed.name || !parsed.parameters) {
      return null;
    }

    return {
      name: parsed.name,
      parameters: parsed.parameters,
    };
  } catch {
    return null;
  }
}
