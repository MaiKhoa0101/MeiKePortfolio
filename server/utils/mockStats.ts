type Plan = "basic" | "plus" | "vip";

export interface MonthlySubscriptions {
  month: string;
  web: Record<Plan, number>;
  app: Record<Plan, number>;
}

export interface MonthlyRevenue {
  month: string;
  revenue: number;
}

export interface MonthlyBundle {
  months: string[];
  subs: MonthlySubscriptions[];
  revenue: MonthlyRevenue[];
}

// Tạo mảng 12 tháng gần nhất, dạng 'YYYY-MM'
function last12Months(): string[] {
  const out: string[] = [];
  const d = new Date();
  for (let i = 11; i >= 0; i--) {
    const dd = new Date(d.getFullYear(), d.getMonth() - i, 1);
    const m = String(dd.getMonth() + 1).padStart(2, "0");
    out.push(`${dd.getFullYear()}-${m}`);
  }
  return out;
}

function jitter(base: number, monthIndex: number, spread = 0.2) {
  const trend = 1 + (monthIndex - 6) * 0.01;
  const noise = 1 + (Math.random() * 2 - 1) * spread;
  return Math.max(0, Math.round(base * trend * noise));
}

export function buildMockMonthlyBundle(): MonthlyBundle {
  const months = last12Months();

  const subs = months.map((m, idx) => {
    const webBasic = jitter(120, idx);
    const webPlus = jitter(80, idx);
    const webVip = jitter(25, idx);

    const appBasic = jitter(160, idx);
    const appPlus = jitter(110, idx);
    const appVip = jitter(35, idx);

    return {
      month: m,
      web: { basic: webBasic, plus: webPlus, vip: webVip },
      app: { basic: appBasic, plus: appPlus, vip: appVip },
    };
  });

  const revenue = months.map((m, idx) => {
    const s = subs[idx];
    const monthlyRev =
      (s.web.basic + s.app.basic) * 99_000 +
      (s.web.plus + s.app.plus) * 199_000 +
      (s.web.vip + s.app.vip) * 399_000;
    return { month: m, revenue: Math.round(monthlyRev) };
  });

  return { months, subs, revenue };
}
