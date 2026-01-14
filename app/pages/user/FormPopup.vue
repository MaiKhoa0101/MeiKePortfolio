<script setup lang="ts">
import '@/assets/css/form-popup.css'

const showForm = defineModel<boolean>('show', { default: false })
</script>

<template>
  <div v-if="showForm" class="form-overlay">
    <div class="form-container">
      <div class="form-info">
        <h3>Bạn cần một <span class="text-title">Website, App, WebApp </span> tuyệt vời và mượt mà.</h3>
        <p>
          Liên hệ ngay tới <a href="#">EzLife</a>, chúng tôi sẽ hỗ trợ Quý khách một cách tốt nhất.
        </p>
        <p>
        <img src="@/assets/images/zalo.png" alt="icon zalo" class="zalo-image" />
        <img src="@/assets/images/messenger.png" alt="icon messenger" class="messenger-image" />
        <img src="@/assets/images/call.png" alt="logo call" class="call-image" />
        </p>
      </div>
      <div class="form-fields">
        <button @click="showForm = false" class="close-btn">✕</button>
        <input type="text" placeholder="Họ và tên" />
        <input type="text" placeholder="Số điện thoại" />
        <input type="email" placeholder="Email" />
        <select>
          <option>Vui lòng chọn dịch vụ</option>
          <option>Thiết kế Website</option>
          <option>Thiết kế App</option>
          <option>WebApp</option>
        </select>
        <textarea placeholder="Yêu cầu cụ thể (nếu có)"></textarea>
        <label class="checkbox-container">
          <input type="checkbox" /> TÔI KHÔNG PHẢI NGƯỜI MÁY
        </label>
        <button class="submit-btn">GỬI YÊU CẦU</button>
      </div>
    </div>
  </div>
</template>
