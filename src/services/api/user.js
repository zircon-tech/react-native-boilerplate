import api_call from "./axios";

// Login
export const login = async (username, password) => {
  try {
    return await api_call("post", "/login", {
      username,
      password,
    });
  } catch (error) {
    return { error };
  }
};
