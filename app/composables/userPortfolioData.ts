// composables/usePortfolioData.ts
export const usePortfolioData = () => {
  const projects = [
    {
      id: 'app-ecommerce',
      title: 'Ứng dụng Thương mại điện tử',
      category: 'Ứng dụng',
      image: 'https://placehold.co/800x600/2563eb/white?text=E-Commerce',
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