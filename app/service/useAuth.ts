import { useState } from "nuxt/app";

export const useAuth = () => {
  const user = useState<null | { email: string }>("user", () => null);

  async function login(email: string, password: string) {
    // TODO: gọi API thật
    await new Promise((r) => setTimeout(r, 400));
    if (email === "admin@ezlife.vn" && password === "123456") {
      user.value = { email };
      return true;
    }
    return false;
  }

  function logout() {
    user.value = null;
  }

  return { user, login, logout };
};
