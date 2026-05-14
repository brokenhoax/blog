const API_URL = process.env.NEXT_PUBLIC_API_URL;

export const getPosts = async () => {
  try {
    const response = await fetch("/api/posts", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching posts:", error);
    return [];
  }
};

export const sendPrompt = async (prompt: string) => {
  const raw = JSON.stringify({
    sessionId: "1",
    message: prompt,
  });

  const response = await fetch(`${API_URL}/api/chat-stream`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: raw,
  });

  if (!response.ok) {
    throw new Error("Network response was not ok");
  }

  // IMPORTANT: return the raw Response, not JSON
  return response;
};
