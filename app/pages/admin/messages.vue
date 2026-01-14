<template>
  <div class="chat-container">
    <!-- Sidebar -->
    <div class="chat-sidebar">
      <h3>Cuộc trò chuyện</h3>
      <ul>
        <li v-for="conv in conversations" :key="conv.id" class="chat-item">
          <div>
            <strong>{{ conv.name }}</strong>
            <p class="last-message">{{ conv.lastMessage }}</p>
          </div>
          <span class="time">{{ conv.time }}</span>
        </li>
      </ul>
    </div>

    <!-- Chat window -->
    <div class="chat-window">
      <div class="messages">
        <div
          v-for="msg in messages"
          :key="msg.id"
          :class="['message', msg.sender === 'me' ? 'me' : 'customer']"
        >
          <p>{{ msg.text }}</p>
          <span class="time">{{ msg.time }}</span>
        </div>
      </div>
      <div class="input-area">
        <input type="text" placeholder="Nhập tin nhắn..." />
        <button>Gửi</button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
definePageMeta({ layout: "admin", middleware: "admin-auth" });
interface Conversation {
  id: number;
  name: string;
  lastMessage: string;
  time: string;
}

interface Message {
  id: number;
  sender: "me" | "customer";
  text: string;
  time: string;
}

const conversations: Conversation[] = [
  { id: 1, name: "Nguyễn Văn A", lastMessage: "Cảm ơn bạn", time: "10:30" },
  { id: 2, name: "Trần Thị B", lastMessage: "Cho mình hỏi...", time: "09:50" },
  { id: 3, name: "Lê Minh C", lastMessage: "Ok nhé", time: "Hôm qua" },
];

const messages: Message[] = [
  { id: 1, sender: "customer", text: "Xin chào!", time: "10:00" },
  {
    id: 2,
    sender: "me",
    text: "Chào bạn, mình có thể giúp gì?",
    time: "10:01",
  },
  {
    id: 3,
    sender: "customer",
    text: "Mình muốn hỏi về gói VIP",
    time: "10:02",
  },
];
</script>

<style scoped>
.chat-container {
  display: flex;
  height: 80vh;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

.chat-sidebar {
  width: 300px;
  border-right: 1px solid #ddd;
  padding: 16px;
  background: #ccc;
}

.chat-window {
  flex: 1;
  display: flex;
  flex-direction: column;
}

.messages {
  flex: 1;
  padding: 16px;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.message {
  max-width: 60%;
  padding: 8px 12px;
  border-radius: 12px;
  display: flex;
  flex-direction: column;
}

.message.customer {
  background: #ffffff;
  align-self: flex-start;
}

.message.me {
  background: #cde4ff;
  align-self: flex-end;
}

.time {
  font-size: 0.75rem;
  color: #555;
  margin-top: 4px;
  align-self: flex-end;
}

.input-area {
  display: flex;
  padding: 12px;
  border-top: 1px solid #ddd;
  background: white;
}

.input-area input {
  flex: 1;
  padding: 8px;
  border-radius: 8px;
  border: 1px solid #ccc;
}

.input-area button {
  margin-left: 8px;
  padding: 8px 16px;
  border: none;
  background: #007bff;
  color: white;
  border-radius: 8px;
}
</style>
