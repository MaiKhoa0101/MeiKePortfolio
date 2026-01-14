<script setup>
import { NuxtLink } from "#components";
import FormPopup from "~/pages/user/FormPopup.vue";
const showForm = ref(false);
const isMenuOpen = ref(false);
</script>

<template>
  <nav class="topbar">
    <NuxtLink to="/user/home" class="logo">
      <img src="/Logowhite.png" alt="Logo" />
    </NuxtLink>
    <button class="menu-toggle" @click="isMenuOpen = !isMenuOpen">☰</button>
    <ul class="menu" :class="{ open: isMenuOpen }">
      <li><NuxtLink to="/user/home">Giới thiệu</NuxtLink></li>
      <li><NuxtLink to="/user/viewServices">Dịch vụ</NuxtLink></li>
      <li><NuxtLink to="/user/viewProjects">Dự án</NuxtLink></li>
      <li><NuxtLink to="/">Chính sách</NuxtLink></li>
      <li><NuxtLink to="/admin/login"> Admin</NuxtLink></li>

      <li>
        <button @click="showForm = true" class="btn-advise">TƯ VẤN NGAY</button>
      </li>
      <FormPopup v-model:show="showForm" />
    </ul>
  </nav>
</template>

<style scoped>
.topbar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: transparent;
  padding: 0.5rem 2rem;
  min-height: 64px;
  box-shadow: 0 2px 8px #0001;
}

.logo {
  display: flex;
  align-items: center;
  justify-content: flex-start;
}

.logo img {
  width: 150px;
  object-fit: contain;
}

.brand {
  font-weight: bold;
  color: #009ee3;
  font-size: 1.2rem;
}
.desc {
  font-size: 0.85rem;
  color: #333;
}

.menu {
  display: flex;
  gap: 28px;
  list-style: none;
  margin: 0;
  padding: 0;
}

.menu a[data-v-f802542c] {
  color: #ccffff;
}
.menu li {
  margin: 0 1rem;
  font-size: 1.3rem;
  font-weight: bold;
}
.menu a {
  color: #222;
  text-decoration: none;
  font-weight: 500;
}
.menu a:hover {
  color: #009ee3;
}

.btn-advise {
  background: #009ee3;
  color: #fff;
  border: none;
  border-radius: 20px;
  padding: 0.5rem 1.2rem;
  font-weight: bold;
  cursor: pointer;
  transition: background 0.2s;
}
.btn-advise:hover {
  background: #007bbd;
}
/* Nút menu mobile */
.menu-toggle {
  display: none;
  font-size: 1.8rem;
  background: none;
  border: none;
  cursor: pointer;
  color: white;
}
@media (max-width: 768px) {
  .menu {
    display: none;
    flex-direction: column;
    position: absolute;
    top: 64px;
    right: 0;
    width: 220px;
    background: #fff;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
    padding: 1rem;
    z-index: 1000;
  }

  .menu.open {
    display: flex;
  }

  .menu li {
    margin: 0.8rem 0;
  }

  .menu-toggle {
    display: block;
  }
}
</style>
