<script setup>
import { ref } from 'vue';
import { RouterLink } from 'vue-router';
import { useAuth } from '../store/auth'
import { user } from '../data'
import { results } from '../data';

const resultsArray = results;
const authStore = useAuth()
const page = ref("Редактировать профиль")
console.log(user)



</script>

<template>
 <main class="account">
    <nav class="acc_nav">
        <ul>
            <li :class="['btn', page === 'Редактировать профиль' ? 'active' : '']" @click="() => { page = 'Редактировать профиль'; }">Редактировать профиль</li>
            <li :class="['btn', page !== 'Редактировать профиль' ? 'active' : '']" @click="() => { page = 'Результаты тестирований'; }">Результаты тестирований</li>
            <li @click="() => { authStore.isAuth = false}"><RouterLink class="btn" to="/">Выйти</RouterLink></li>
        </ul>
    </nav>
    <div class="acc_info">
        <div v-if="page === `Редактировать профиль`" class="editing">
            <div class="editing_inputs">
                <div>
                    <label for="name">ФИО:</label>
                    <input type="text" name="name" :placeholder="user.name">
                </div>
                <div>
                    <label for="name">Почта:</label>
                    <input type="text" name="name" :placeholder="user.email">
                </div>
                <div>
                    <label for="name">Логин:</label>
                    <input type="text" name="name" :placeholder="user.login">
                </div>
                <div>
                    <label for="name">Возраст:</label>
                    <input type="text" name="name" :placeholder="user.age">
                </div>
                <div>
                    <label for="name">Новый пароль:</label>
                    <input type="password" name="name" placeholder="********">
                </div>
                <div>
                    <label for="name">Подтвердите пароль:</label>
                    <input type="password" name="name" placeholder="********">
                </div>
                
            </div>
            <div class="editing_buttons">
                <button class="button">Сохранить</button>
                <button class="button clear">Очистить</button>
            </div>
        </div>

        <div v-else class="testing_results">
            <RouterLink to="/result" class="result" v-for="(item, index) in results" :key="index">
                <h3>{{ index + 1 + `.` }}</h3>
                <h3>{{ item.name }}</h3>
                <p>{{ item.date }}</p>
            </RouterLink>
        </div>
    </div>
 </main>
</template>

<style scoped>
.account{
    flex: 1;
    width: 70%;
    margin: 5rem auto;
    display: flex;
    gap: 1rem;
}

.acc_nav{
    flex-basis: 25%;
    border-right: 3px solid rgba(85, 107, 47, 0.5);
}

.acc_info{
    flex: 1;
}

.btn{
    cursor: pointer;
    transition: all ease-in-out 0.3s;
    font-size: 18px;
    padding: 0.5rem;
    margin: 0.5rem;
    margin-right: 3rem;
    background-color: rgba(255, 165, 0, 1);
    display: block;
}

.btn:hover{
    background-color: rgba(255, 165, 0, 0.5);
}

.active{
    background-color: rgba(255, 165, 0, 0.5);
}

.editing{
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    /* margin-top: 1rem; */
}

.editing_inputs{
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: baseline;
    width: 50%;
}

.editing_inputs>div{
    display: flex;
    gap: 1rem;
    margin: 0.5rem 0;
    text-wrap: nowrap;
    width: 100%;
}

input{
    background-color: white;
    border: 2px solid rgba(85, 107, 47, 1);
    border-radius: 5px;
    padding: 0 0.5rem;
    /* min-width: 100%; */
    flex: 1;
}

label{
    flex-basis: 40%;
    text-align: end;
}

.editing_buttons{
    margin-bottom: 1rem;
    display: flex;
    justify-content: center;
    gap: 5%;
    width: 100%;
}

.clear{
    background-color: #EBEBEB;
    border: #22291F 2px solid;
    color: inherit;
}

.button{
    font-size: 18px;
    padding: 10px 30px;
}

.testing_results{
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
}

.result{
    width: 80%;
    background-color: rgba(255, 165, 0, 0.5);
    border: 3px solid rgba(255, 165, 0, 1);
    display: flex;
    justify-content: space-between;
    padding: 0.5rem 1rem;
}

.result:hover{
    background-color: rgba(255, 165, 0, 0.4);
    border: 3px solid rgba(255, 165, 0, 0.5);
}

</style>