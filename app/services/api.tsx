const KRAUS_CLOUD_PUBLIC_API_BASE_URL =
  process.env.KRAUS_CLOUD_PUBLIC_API_BASE_URL ||
  "https://api.krauscloud.com:8000/api";

export const getPosts = async () => {
  try {
    const response = await fetch(`${KRAUS_CLOUD_PUBLIC_API_BASE_URL}/posts`, {
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
