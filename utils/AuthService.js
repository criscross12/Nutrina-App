import { NUTRINA_API } from "../utils/config";

export const login = async (data) => {
  try {
    const user = await fetch(NUTRINA_API.apiUsers + "/auth/login", {
      method: "POST",
      body: JSON.stringify({ ...data }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const resUser = await user.json();
    return resUser;
  } catch (error) {
    console.log(error);
  }

  return resUser;
};

export function isAuthenticated() {
  const getCookie = document.cookie.split("=");
  const token = getCookie[1];

  // const user = localStorage.getItem("user");
  if (!token) {
    console.log("token invalid");
    // return res.status(401).json({ error: "invalid token" });
  }
  return token;
}
