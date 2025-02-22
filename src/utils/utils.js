export const NODE_API_ENDPOINT =
  process.env.NODE_ENV === "production"
    ? import.meta.env.VITE_NODE_API_ENDPOINT
    : "http://localhost:8000/api/v1";
