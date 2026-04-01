<template>
    <v-container fluid class="login-view d-flex align-center justify-center bg-orange-lighten-5">
        <LoginCard />
    </v-container>
</template>

<script setup>
import LoginCard from '../components/layouts/LoginCard.vue';

</script>

<style scoped>
.login-view {
    min-height: 100vh;
    padding: 24px;
}
</style>