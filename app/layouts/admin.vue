<!-- layouts/admin.vue -->
<template>
  <div class="wrap">
    <!-- Sidebar -->
    <aside class="side">
      <div class="brand">EzLife Admin</div>
      <nav class="menu">
        <NuxtLink to="/admin" exact-active-class="active">Dashboard</NuxtLink>
        <NuxtLink to="/admin/users" active-class="active">Users</NuxtLink>
        <NuxtLink to="/admin/statistic" active-class="active"
          >Thống kê</NuxtLink
        >
        <NuxtLink to="/admin/orders" active-class="active">
          Đơn đặt hàng
        </NuxtLink>
        <NuxtLink to="/admin/messages" active-class="active">Nhắn tin</NuxtLink>
      </nav>
    </aside>

    <!-- Main -->
    <div class="main">
      <header class="topbar">
        <div class="grow" />
        <span class="user" v-if="auth.user"
          >👤 {{ auth.user?.value?.email }}</span
        >
        <button class="btn" @click="handleLogout">Đăng xuất</button>
      </header>

      <div class="body">
        <slot />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useAuth } from "~/service/useAuth";

const auth = useAuth();
const router = useRouter();
const handleLogout = () => {
  auth.logout();
  router.push("/admin/login");
};
</script>

<style scoped>
.wrap {
  display: grid;
  grid-template-columns: 240px 1fr;
  min-height: 100vh;
  background: #f5f7fb;
}
.side {
  background: #101828;
  color: #eaeef6;
  display: flex;
  flex-direction: column;
}
.brand {
  font-weight: 800;
  padding: 18px 16px;
  border-bottom: 1px solid #2a3344;
}
.menu {
  display: flex;
  flex-direction: column;
  padding: 12px;
}
.menu a {
  padding: 10px 12px;
  border-radius: 8px;
  color: #c9d3ea;
  text-decoration: none;
}
.menu a:hover {
  background: #1f2a44;
}
.menu .active {
  background: #2842ff;
  color: #fff;
}
.main {
  display: flex;
  flex-direction: column;
}
.topbar {
  height: 56px;
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 0 16px;
  background: #fff;
  border-bottom: 1px solid #e5e7eb;
}
.grow {
  flex: 1;
}
.user {
  color: #334155;
}
.btn {
  background: #ef4444;
  border: none;
  color: #fff;
  padding: 8px 12px;
  border-radius: 8px;
  cursor: pointer;
}
.btn:hover {
  filter: brightness(0.95);
}
.body {
  padding: 18px;
}
</style>
