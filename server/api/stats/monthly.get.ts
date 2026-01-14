export default defineEventHandler(() => {
  const months = [
    "2024-09",
    "2024-10",
    "2024-11",
    "2024-12",
    "2025-01",
    "2025-02",
    "2025-03",
    "2025-04",
    "2025-05",
    "2025-06",
    "2025-07",
    "2025-08",
  ];

  const subs = months.map((month, i) => {
    // tạo số random giả lập
    const webBasic = Math.floor(80 + Math.random() * 40);
    const webPlus = Math.floor(50 + Math.random() * 30);
    const webVip = Math.floor(20 + Math.random() * 10);

    const appBasic = Math.floor(100 + Math.random() * 50);
    const appPlus = Math.floor(70 + Math.random() * 30);
    const appVip = Math.floor(25 + Math.random() * 15);

    return {
      month,
      web: { basic: webBasic, plus: webPlus, vip: webVip },
      app: { basic: appBasic, plus: appPlus, vip: appVip },
    };
  });

  const revenue = subs.map((s) => {
    const totalRevenue =
      (s.web.basic + s.app.basic) * 99_000 +
      (s.web.plus + s.app.plus) * 199_000 +
      (s.web.vip + s.app.vip) * 399_000;
    return {
      month: s.month,
      revenue: totalRevenue,
    };
  });

  return { months, subs, revenue };
});
