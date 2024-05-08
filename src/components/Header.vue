<script setup>
import { RouterLink } from 'vue-router';
import { useAuth } from '../store/auth'
import AuthForm from "./AuthForm.vue"

const authStore = useAuth()

function changePopup(){
    authStore.isPopupOpened = !authStore.isPopupOpened
}
</script>

<template>
    <div class="header-container">
        <nav class="header-nav">
            <div>
                <RouterLink to="/" class="nav-item">Главная</RouterLink>
                <RouterLink to="/testing" class="nav-item">Тестирование</RouterLink>
            </div>
            <RouterLink to="/" class="centered-item"><img src="/images/logo.svg" alt="LOGO"></RouterLink>
            <button @click="changePopup" v-if="!authStore.isAuth" class="nav-item">Войти</button>
            <RouterLink @click="login" v-else to="/account" class="nav-item">Профиль</RouterLink>
        </nav>
    </div>
    <div v-if="authStore.isPopupOpened" class="auth">
        <div class="overlay" @click="changePopup"></div>
      <AuthForm ></AuthForm>  
    </div>
</template>

<script>

</script>

<style scoped>
    .auth{
        left: 0;
        top: 0;
        position: fixed;
        z-index: 9;
        background-color: rgba(0, 0, 0, 0.5);
        width: 100vw;
        height: 100vh;
    }

    .header-container{
        width: 100%;
        background-color: #556B2F;
        
    }

    .header-nav{
        position: relative;
        width: 70%;
        display: flex;
        justify-content: space-between;
        margin: 0 auto;
        height: 90px;
        align-items: center;
    }

    .nav-item{
        text-decoration: none;
        color: #EBEBEB;
        font-weight: bold;
        font-size: 18px;
    }

    .centered-item{
        position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-55%, -50%);
    }

    .header-nav>div{
        display: flex;
        gap: 115px;
    }

    .overlay{
        width: 100%;
        height: 100%;
        position: absolute;
        top: 0;
        left: 0;
    }
</style>