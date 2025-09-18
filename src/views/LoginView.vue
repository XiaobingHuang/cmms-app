<script setup lang="ts">
import {computed, ref} from "vue";
import {useLink, useRouter} from "vue-router";
import { useUserStore } from "../store/UserStore";
import {isEmail} from "../untilis/unitilisFunctions"


const userName = ref("");
const password = ref("");
const error = ref({
    name:"",
    password:""
});

const router = useRouter();
const userStore = useUserStore();

function handleLogin(){
    // const isUserName = validateUserName(userName.value);
    // const ispassword = validatePassword(password.value);

    // if(isUserName && ispassword){
    //     const success = userStore.login(userName.value, password.value);
    //     if(success){
    //         router.push("/dashboard")
    //     } else {
    //         // error information center ...
    //         error.value.name = "Invalid username or password";
    //     }
    // }
     router.push("/dashboard");
}

function validateUserName(input: string):boolean{
    if(input.trim() === "") {
        error.value.name = "The email address field is required";
        return false
    }
    if(!isEmail(input)) {
        error.value.name = "The email address field must be a valid email";
        return false;
    }
    return true
}

function validatePassword(input:string):boolean{
    if(input.trim() === "") {
        error.value.password = "The email address field is required";
        return false
    }
    return true
}

</script>

<template>
    <div class="min-h-screen flex items-center justify-center bg-gray-50">
        <div class="w-full max-w-md bg-white p-8 rounded">
            <h1 class="text-3xl font-bold text-center mb-6 helix-text">
                <strong>Helix</strong>Intel
            </h1>
            <form @submit.prevent="handleLogin">
                <input v-model="userName" placeholder="Email Address" class="input"></input>
                <p v-if="error.name" class="text-red-600 mb-4" >{{ error.name }}</p>
                <input v-model="password" placeholder="Password" class="input" type="password"></input>
                <p v-if="error.name" class="text-red-600 mb-4" >{{ error.password }}</p>
                <button type="submit" class="btn">Log In</button>
                

            </form>

        </div>
    </div>

</template>

<style scoped>
.input {
  display: block;
  width: 100%;
  margin-bottom: 1rem;
  padding: 0.5rem;
  border: 1px solid #ddd;
  border-radius: 0.5rem;
}
.btn {
  background: #205f92;
  color: white;
  font-weight: bold;
  padding: 0.5rem;
  border-radius: 0.5rem;
  width: 100%;
}
.helix-text {
  color: var(--color-blue);
}

</style>