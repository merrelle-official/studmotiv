<script setup>

import {ref} from 'vue'
import { useAuth } from '../store/auth'

const authStore = useAuth()

const isAcc = ref(true)

function haveAcc() {    
    isAcc.value = !isAcc.value
}

function getAuthorized() {
  authStore.isAuth = true
  authStore.isPopupOpened = false
}

</script>

<template>
    <div class="login-page">
        <div class="form">
            <div v-if="isAcc" class="register-form" >
                <input type="text" placeholder="Имя..."/>
                <input type="password" placeholder="Пароль..."/>
                <input type="email" placeholder="Почта..."/>
                <button class="button" @click="getAuthorized">Создать</button>
                <p class="message">Уже зарегистрированы? <p @click="haveAcc">Войти</p></p>
            </div>
            <div v-else class="login-form">
                <input type="email" placeholder="Почта..."/>
                <input type="password" placeholder="Пароль..."/>
                <button class="button" @click="getAuthorized">Войти</button>
                <p class="message">Не зарегистрированы? <p @click="haveAcc">Создать аккаунт</p></p>
            </div>
        </div>
    </div>
</template>

<style scoped>
.login-page {
  width: 360px;
  padding: 8% 0 0;
  margin: auto;
}
.form {
  position: relative;
  z-index: 1;
  background: #FFFFFF;
  max-width: 360px;
  margin: 0 auto 100px;
  padding: 45px;
  text-align: center;
  box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.2), 0 5px 5px 0 rgba(0, 0, 0, 0.24);
}
.form input {
  /* font-family: "Roboto", sans-serif; */
  outline: 0;
  background: #f2f2f2;
  width: 100%;
  border: 0;
  margin: 0 0 15px;
  padding: 15px;
  box-sizing: border-box;
  font-size: 14px;
}

.button{
  width: 100%;
  padding: 15px;
}

.form .message {
  margin: 15px 0 0;
  color: #b3b3b3;
  font-size: 12px;
}
.form .message p {
  color: #FFA500;
  text-decoration: none;
  cursor: pointer;
}

</style>