<template>
  <v-layout>
    <v-app-bar v-if="mobile">
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
    </v-app-bar>

    <v-navigation-drawer
      v-model="drawer"
      :temporary="mobile"
      :permanent="!mobile"
      class="dashboard-drawer"
    >
      <div class="d-flex align-center ga-4 ma-5">
        <v-icon
          :icon="icon"
          color="deep-orange-darken-2"
          class="pa-5 bg-deep-orange-lighten-4 rounded-lg"
        ></v-icon>

        <div class="d-flex flex-column align-start">
          <div class="text-h5 font-weight-semibold ma-0">
            {{ title }}
          </div>
          <div class="text-subtitle-1 font-weight-light ma-0">
            {{ subtitle }}
          </div>
        </div>
      </div>

      <v-divider></v-divider>

      <v-list nav class="py-2">
        <v-hover
          v-for="item in items"
          :key="item.value"
          v-slot="{ isHovering, props: hoverProps }"
        >
          <v-list-item
            v-bind="hoverProps"
            rounded="lg"
            class="mx-3 my-1"
            @click="navigateTo(item.to)"
            :base-color="getItemColor(isHovering, item)"
            :class="getItemClass(isHovering, item)"
          >
            <template #prepend>
              <v-icon :icon="item.icon" />
            </template>

            <v-list-item-title>
              {{ item.title }}
            </v-list-item-title>
          </v-list-item>
        </v-hover>
      </v-list>

      <template v-slot:append>
        <v-divider></v-divider>

        <v-list class="m-5">
          <v-list-item
            prepend-icon="mdi-weather-night"
            title="Modo Escuro"
            link
            rounded="lg"
            class="mx-3 my-1"
          />
          <v-list-item
            prepend-icon="mdi-logout"
            title="Logout"
            link
            rounded="lg"
            class="mx-3 my-1"
            base-color="red-darken-4"
            @click="toLoginPage"
          />
        </v-list>
      </template>
    </v-navigation-drawer>
  </v-layout>
</template>

<script setup>
import { useRouter, useRoute } from "vue-router";
import { useDisplay } from "vuetify";

const {
  items, 
  title,
  subtitle,
  icon
} = defineProps({
  items: {
    type: Array,
    default: () => []
  },
  title: String,
  subtitle: String,
  icon: {
    type: String,
    default: 'mdi-view-dashboard'
  }
});

const router = useRouter();
const route = useRoute();

const { mobile } = useDisplay();

const drawer = defineModel({
  type: Boolean,
  default: true,
});

function navigateTo(target) {
  if (!target) return;
  router.push(target);
}

function toLoginPage() {
  router.push({ name: 'Login' });
}

function isItemActive(item) {
  if (!item?.to) return false;
  return router.resolve(item.to).fullPath === route.fullPath;
}

function getItemColor(isHovering, item) {
  return isHovering || isItemActive(item)
    ? "deep-orange-darken-1"
    : "gray-darken-4";
}

function getItemClass(isHovering, item) {
  return isHovering || isItemActive(item)
    ? "bg-deep-orange-lighten-5"
    : "";
}
</script>

<style scoped>
.dashboard-drawer {
  position: fixed !important;
  top: 0 !important;
  height: 100vh !important;
  z-index: 2006 !important;
}
</style>