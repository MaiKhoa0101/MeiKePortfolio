<script setup>
const route = useRoute()
const { getProjectById } = usePortfolioData()

// Lấy ID từ URL và tìm dự án tương ứng
const projectId = route.params.id
const project = getProjectById(projectId)

// Xử lý trường hợp không tìm thấy (404)
if (!project) {
  throw createError({ statusCode: 404, statusMessage: 'Project Not Found' })
}
</script>

<template>
  <div class="container mx-auto px-6 py-12">
    <NuxtLink to="/" class="inline-flex items-center text-slate-500 hover:text-blue-600 mb-6">
      ← Quay lại trang chủ
    </NuxtLink>

    <div class="grid grid-cols-1 lg:grid-cols-2 gap-12">
      <div class="space-y-4">
        <div class="rounded-2xl overflow-hidden shadow-lg border border-slate-100">
          <img :src="project.image" class="w-full object-cover" />
        </div>
        <div v-if="project.gallery" class="grid grid-cols-4 gap-2">
          <img v-for="(img, idx) in project.gallery" :key="idx" :src="img" class="rounded-lg cursor-pointer border hover:border-blue-500" />
        </div>
      </div>

      <div>
        <span class="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-bold">
          {{ project.category }}
        </span>
        <h1 class="text-4xl font-bold text-slate-900 mt-4 mb-6">{{ project.title }}</h1>
        
        <div class="prose max-w-none text-slate-600 mb-8">
          <p>{{ project.description }}</p>
          <p>Mô tả chi tiết hơn về dự án này: Thách thức gặp phải, giải pháp đã thực hiện và kết quả đạt được. Đây là nơi bạn "khoe" kỹ năng giải quyết vấn đề.</p>
        </div>

        <div class="mb-8">
          <h3 class="font-bold text-slate-900 mb-3">Công nghệ sử dụng:</h3>
          <div class="flex flex-wrap gap-3">
            <span v-for="tech in project.techStack" :key="tech" class="flex items-center gap-2 px-4 py-2 border border-slate-200 rounded-lg text-slate-700">
              {{ tech }}
            </span>
          </div>
        </div>

        <div class="flex gap-4 border-t pt-8">
          <button class="flex-1 bg-blue-600 text-surface-content py-4 rounded-xl font-bold hover:bg-blue-700 transition shadow-lg shadow-blue-500/30">
            Xem Demo Trực Tiếp
          </button>
          <button class="flex-1 border-2 border-slate-200 text-slate-700 py-4 rounded-xl font-bold hover:border-slate-800 transition">
            Xem Mã Nguồn (GitHub)
          </button>
        </div>
      </div>
    </div>
  </div>
</template>