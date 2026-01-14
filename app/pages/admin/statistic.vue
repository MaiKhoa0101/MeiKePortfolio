<script setup lang="ts">
definePageMeta({ layout: "admin", middleware: "admin-auth" });
import { onMounted, computed, ref } from "vue";
import { Bar, Line } from "vue-chartjs";
import {
  Chart,
  Title,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
} from "chart.js";
import type { ChartData, ChartOptions } from "chart.js";

Chart.register(
  Title,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement
);

const data = ref<any>(null);
const loading = ref(false);

const money = (v: number) =>
  v.toLocaleString("vi-VN", { maximumFractionDigits: 0 }) + " ₫";

onMounted(async () => {
  loading.value = true;
  try {
    data.value = await $fetch("/api/stats/monthly");
  } finally {
    loading.value = false;
  }
});

const labels = computed<string[]>(() => data.value?.months ?? []);

const webBar = computed<ChartData<"bar">>(() => ({
  labels: labels.value,
  datasets: [
    {
      label: "Basic (Web)",
      data: (data.value?.subs ?? []).map((m: any) => m.web.basic),
    },
    {
      label: "Plus (Web)",
      data: (data.value?.subs ?? []).map((m: any) => m.web.plus),
    },
    {
      label: "VIP (Web)",
      data: (data.value?.subs ?? []).map((m: any) => m.web.vip),
    },
  ],
}));

const appBar = computed<ChartData<"bar">>(() => ({
  labels: labels.value,
  datasets: [
    {
      label: "Basic (App)",
      data: (data.value?.subs ?? []).map((m: any) => m.app.basic),
    },
    {
      label: "Plus (App)",
      data: (data.value?.subs ?? []).map((m: any) => m.app.plus),
    },
    {
      label: "VIP (App)",
      data: (data.value?.subs ?? []).map((m: any) => m.app.vip),
    },
  ],
}));

const webappBar = computed<ChartData<"bar">>(() => ({
  labels: labels.value,
  datasets: [
    {
      label: "Basic (WebApp)",
      data: (data.value?.subs ?? []).map((m: any) => m.web.basic + m.app.basic),
    },
    {
      label: "Plus (WebApp)",
      data: (data.value?.subs ?? []).map((m: any) => m.web.plus + m.app.plus),
    },
    {
      label: "VIP (WebApp)",
      data: (data.value?.subs ?? []).map((m: any) => m.web.vip + m.app.vip),
    },
  ],
}));

const revenueLine = computed<ChartData<"line">>(() => ({
  labels: labels.value,
  datasets: [
    {
      label: "Doanh thu (VND)",
      data: (data.value?.revenue ?? []).map((r: any) => r.revenue),
    },
  ],
}));

const barOpts: ChartOptions<"bar"> = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: { legend: { position: "top" } },
  scales: {
    x: { stacked: false },
    y: { stacked: false, beginAtZero: true },
  },
  datasets: {
    bar: {
      borderRadius: 6,
      maxBarThickness: 28,
      categoryPercentage: 0.7,
      barPercentage: 0.9,
    },
  },
};

const lineOpts: ChartOptions<"line"> = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: { legend: { display: false }, tooltip: { enabled: false } },
  scales: {
    x: { grid: { display: false } },
    y: {
      beginAtZero: true,
      grid: { display: false },
      ticks: { callback: (v: number | string) => `${Number(v) / 1_000_000}M` },
    },
  },
  elements: {
    line: { tension: 0.25, borderWidth: 3 },
    point: { radius: 3 },
  },
};

const tableWeb = computed(() =>
  (data.value?.subs ?? []).map((m: any) => ({ month: m.month, ...m.web }))
);
const tableApp = computed(() =>
  (data.value?.subs ?? []).map((m: any) => ({ month: m.month, ...m.app }))
);
const tableWebApp = computed(() =>
  (data.value?.subs ?? []).map((m: any) => ({
    month: m.month,
    basic: m.web.basic + m.app.basic,
    plus: m.web.plus + m.app.plus,
    vip: m.web.vip + m.app.vip,
  }))
);
</script>

<template>
  <div class="page-wrap">
    <h1 class="title">Admin Statistics</h1>

    <div class="dash-card">
      <h2 class="card-title">Đăng ký (Web) theo tháng</h2>
      <div class="chart-box"><Bar :data="webBar" :options="barOpts" /></div>
    </div>

    <div class="dash-card">
      <h2 class="card-title">Đăng ký (App) theo tháng</h2>
      <div class="chart-box"><Bar :data="appBar" :options="barOpts" /></div>
    </div>

    <div class="dash-card">
      <h2 class="card-title">Đăng ký (WebApp) theo tháng</h2>
      <div class="chart-box"><Bar :data="webappBar" :options="barOpts" /></div>
    </div>

    <div class="dash-card">
      <h2 class="card-title">Doanh thu toàn bộ theo tháng</h2>
      <div class="chart-box">
        <Line :data="revenueLine" :options="lineOpts" />
      </div>
      <div class="note">
        Doanh thu gần nhất:
        <b>{{ money(data?.revenue?.at(-1)?.revenue ?? 0) }}</b>
      </div>
    </div>
  </div>
</template>

<style scoped>
.page-wrap {
  padding: 24px;
}
.title {
  text-align: center;
  font-size: 28px;
  font-weight: 700;
  margin-bottom: 24px;
  color: #fff;
}
.dash-card {
  background: #fff;
  border-radius: 16px;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.06);
  padding: 24px;
  margin-bottom: 32px;
}
.card-title {
  font-size: 18px;
  font-weight: 600;
  margin-bottom: 12px;
}
.chart-box {
  height: 18rem;
}
.note {
  font-size: 20px;
  color: #000000;
  margin-top: 8px;
}
</style>
