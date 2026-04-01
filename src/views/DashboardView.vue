<template>
  <v-layout>
    <Sidebar
      :items="menuItems"
      icon="mdi-silverware-fork-knife"
      title="Restaurante"
      subtitle="Admin"
    />
    
    <main class="dashboard-content">
      <router-view />
    </main>
  </v-layout>
</template>

<script setup>
import Sidebar from '../components/layouts/Sidebar.vue';

const menuItems = [
  {
    icon: 'mdi-view-dashboard',
    title: 'Dashboard',
    value: 'dashboard-home',
    to: { name: 'DashboardHome' },
  },
  {
    icon: 'mdi-food',
    title: 'Products',
    value: 'products',
    to: { name: 'Products' },
  },
]
</script>

<style scoped>
.dashboard-page {
  min-height: 100vh;
}

.dashboard-content {
  margin-left: 300px;
  padding: 32px;
}

@media (max-width: 900px) {
  .dashboard-content {
    margin-left: 0;
    padding: 88px 16px 16px;
  }
}
</style>