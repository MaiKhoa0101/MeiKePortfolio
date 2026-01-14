import { useAuth } from "~/service/useAuth";

export default defineNuxtRouteMiddleware((to) => {
  const { user } = useAuth();
  if (!user.value && to.path !== "/admin/login") {
    return navigateTo("/admin/login");
  }
});
