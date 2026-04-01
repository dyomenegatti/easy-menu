<template>
    <v-card class="login-card" rounded="lg" elevated>
        <v-card-title>
            <div class="d-flex flex-column align-center ga-4">
                <v-icon 
                    icon="mdi-silverware-fork-knife"
                    color="deep-orange-darken-2"
                    class="pa-6 bg-deep-orange-lighten-4 rounded-circle"    
                ></v-icon>
                <span class="text-headline-small font-weight-semibold">Área Administrativa</span>
            </div>
        </v-card-title>

        <v-card-text class="d-flex flex-column ga-4">
            <div>
                <span class="font-weight-medium">Email</span>
                <InputApp 
                    label="Email"
                    placeholder="example@gmail.com"
                    type="email"
                    :clearable="true"
                    variant="outlined"
                    prepend-inner-icon="mdi-email"
                    class="mt-2"
                />
            </div>

            <div>
                <span class="font-weight-medium">Password</span>
                <InputApp 
                    label="Password"
                    placeholder="Enter your password"
                    type="password"
                    hint="Enter your password to access this"
                    :clearable="true"
                    variant="outlined"
                    prepend-inner-icon="mdi-lock"
                    class="mt-2"
                />
            </div>

            <ButtonApp 
                title="Entrar"
                :block="true"
                rounded="lg"
                color="black"
                @click="toDashboard"
            />
        </v-card-text>
    </v-card>
</template>

<script setup>
import InputApp from '../ui/InputApp.vue';
import ButtonApp from '../ui/ButtonApp.vue';
import { useRouter } from 'vuetify/lib/composables/router.mjs';

const router = useRouter();

function toDashboard() {
    router.push({ name: 'Dashboard' })
}
</script>

<style scoped>
.login-card {
    width: min(100%, 460px);
    padding: 20px;
}
</style>