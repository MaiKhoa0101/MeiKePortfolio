// composables/usePortfolioData.ts
export const usePortfolioData = () => {
  const projects = [
    {
      id: 'app-ecommerce',
      title: 'HelloDoc - Ứng dụng diễn đàn sức khỏe - Thiết kế chuyên biệt cho người khiếm khuyết',
      category: 'Ứng dụng',
      image: 'https://camo.githubusercontent.com/5855ce9be10410007aff73a50ff654515ac770ec18a43ad203588e6113a2402a/68747470733a2f2f692e6962622e636f2f6b733750765a42632f53637265656e73686f742d323032352d31322d33302d3231313130302e706e67',
      description: 'Hệ thống bán hàng full-stack với tính năng thanh toán online.',
      techStack: ['Nuxt 3', 'Supabase', 'Stripe'],
      gallery: ['https://placehold.co/800x600', 'https://placehold.co/800x600'],
      isFeatured: true // Dự án nổi bật để hiện Slider
    },
    {
      id: 'game-flappy',
      title: 'Flappy Bird Clone',
      category: 'Game',
      image: 'https://placehold.co/800x600/ea580c/white?text=Game',
      description: 'Game giải trí xây dựng bằng Canvas API.',
      techStack: ['HTML5 Canvas', 'Javascript'],
      isFeatured: true
    },
    {
      id: 'mini-calc',
      title: 'Máy tính bỏ túi',
      category: 'Mini Project',
      image: 'https://placehold.co/600x400/16a34a/white?text=Calc',
      description: 'Dự án nhỏ luyện tập Logic JS.',
      techStack: ['Vue 3'],
      isFeatured: false
    },
    {
      id: 'cert-toeic',
      title: 'Chứng chỉ TOEIC 900',
      category: 'Thành tựu',
      image: 'https://placehold.co/600x400/dc2626/white?text=TOEIC',
      description: 'Đạt 900 điểm trong kỳ thi tháng 12/2023.',
      techStack: [],
      isFeatured: false
    }
  ]

  // Hàm lấy dự án theo ID cho trang chi tiết
  const getProjectById = (id: string) => projects.find(p => p.id === id)

  return { projects, getProjectById }
}