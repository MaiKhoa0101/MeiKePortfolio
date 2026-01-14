<template>
  <div class="wrap">
    <form class="card" @submit.prevent="onSubmit">
      <h1>Đăng nhập Admin</h1>
      <label>Email</label>
      <input
        v-model="email"
        type="email"
        placeholder="admin@ezlife.vn"
        required
      />
      <label>Mật khẩu</label>
      <input
        v-model="password"
        type="password"
        placeholder="•••••••"
        required
      />

      <button class="btn" type="submit" :disabled="loading">
        {{ loading ? "Đang đăng nhập..." : "Đăng nhập" }}
      </button>
      <p class="hint">Demo: <b>admin@ezlife.vn</b> / <b>123456</b></p>
      <p v-if="err" class="err">Sai tài khoản hoặc mật khẩu</p>
    </form>
  </div>
</template>

<script setup lang="ts">
import { useAuth } from "~/service/useAuth";

const { login } = useAuth();
const router = useRouter();
const email = ref("admin@ezlife.vn");
const password = ref("123456");
const loading = ref(false);
const err = ref(false);

const onSubmit = async () => {
  err.value = false;
  loading.value = true;
  const ok = await login(email.value, password.value);
  loading.value = false;
  if (ok) router.push("/admin");
  else err.value = true;
};
definePageMeta({ layout: false }); // trang login không dùng layout admin
</script>

<style scoped>
.wrap {
  min-height: 100vh;
  display: grid;
  place-items: center;
  background: #f1f5f9;
}
.card {
  width: min(420px, 92vw);
  height: 400px;
  min-height: 320px;
  background: #fff;
  border-radius: 14px;
  padding: 22px;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.08);
  display: grid;
  gap: 10px;
}
h1 {
  margin: 0 0 6px;
}
input {
  padding: 10px 12px;
  border: 1px solid #e5e7eb;
  border-radius: 10px;
}
.btn {
  margin-top: 6px;
  background: #2563eb;
  color: #fff;
  border: none;
  padding: 10px 14px;
  border-radius: 10px;
  cursor: pointer;
}
.btn:disabled {
  opacity: 0.7;
  cursor: not-allowed;
}
.hint {
  font-size: 12px;
  color: #64748b;
}
.err {
  color: #ef4444;
  margin: 2px 0 0;
}
</style>
