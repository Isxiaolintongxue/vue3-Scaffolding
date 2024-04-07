import { loginApi } from "@/api/auth";

import { store } from "@/store";

import { LoginData } from "@/api/auth/types";

export const useUserStore = defineStore("user", () => {
  const token = ref("");

  /**
   * 登录
   */
  function login(loginData: LoginData) {
    return new Promise<void>((resolve, reject) => {
      loginApi(loginData)
        .then((response) => {
          const { tokenType, accessToken } = response.data;
          token.value = tokenType + " " + accessToken; // Bearer eyJhbGciOiJIUzI1NiJ9.xxx.xxx
          resolve();
        })
        .catch((error) => {
          reject(error);
        });
    });
  }

  return {
    token,
    login,
  };
});

// 非setup
export function useUserStoreHook() {
  return useUserStore(store);
}
