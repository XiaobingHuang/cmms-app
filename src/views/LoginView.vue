<script setup lang="ts">
import {ref} from "vue";
import {useRouter} from "vue-router";
import { useUserStore } from "../store/UserStore";

const userName = ref("");
const password = ref("");
const error = ref("");

const router = useRouter();
const userStore = useUserStore();

function handleLogin(){
    const success = userStore.login(userName.value, password.value);
    if(success){
        router.push("/dashboard")
    } else {
        error.value = "Invalid username or password";
    }
}

</script>

<template>
    <div class="min-h-screen flex items-center justfy-center bg-gray-50">
        <div class="w-full max-w-md bg-white p-8 rounded-2xl shadow-lg">
            <h1 class="text-3xl font-bold text-center text-gray-800 mb-6">
                CMMS
            </h1>
            <form @submit.prevent="handleLogin">
                <input v-model="userName" placeholder="Enter your name" class="input"></input>
                <input v-model="password" placeholder="Password" class="input" type="password"></input>
                <button type="submit" class="btn"></button>
                <p v-if="error" class="text-red-600 mt-2" >{{ error }}</p>

            </form>

        </div>
    </div>

</template>

<style>
.input {
  display: block;
  width: 100%;
  margin-bottom: 1rem;
  padding: 0.5rem;
  border: 1px solid #ddd;
  border-radius: 0.5rem;
}
.btn {
  background: #42b983;
  color: white;
  font-weight: bold;
  padding: 0.5rem;
  border-radius: 0.5rem;
  width: 100%;
}

</style>