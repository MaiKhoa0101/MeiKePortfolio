<template>
  <div>
    <h2>Users</h2>
    <table class="tbl">
      <thead>
        <tr>
          <th>#</th>
          <th>Email</th>
          <th>Role</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(u, i) in users" :key="i">
          <td>{{ i + 1 }}</td>
          <td>{{ u.email }}</td>
          <td>{{ u.role }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup lang="ts">
definePageMeta({ layout: "admin", middleware: "admin-auth" });
const users = ref([
  { email: "admin@ezlife.vn", role: "admin" },
  { email: "user1@ezlife.vn", role: "editor" },
  { email: "user2@ezlife.vn", role: "viewer" },
]);
</script>

<style scoped>
.tbl {
  width: 100%;
  border-collapse: collapse;
  background: #fff;
  border-radius: 12px;
  overflow: hidden;
}
th,
td {
  padding: 10px 12px;
  border-bottom: 1px solid #eef2f7;
  text-align: left;
}
thead th {
  background: #f8fafc;
  font-weight: 700;
}
</style>
