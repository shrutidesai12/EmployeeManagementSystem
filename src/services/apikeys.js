import PUBLIC_API from "./api";

export const login = (email, password) =>
  PUBLIC_API.post("/api/auth/login", { email, password });