<script setup>
import {result} from "../data.js"

const resultArray = result;


</script>

<template>
    <div class="main">
        <h1 class="results">Результаты тестирования: </h1>
        <div v-for="(item, index) in resultArray" :key="index" class="result_container">
            <h2>{{ item.title + ":" }}</h2>
            <p>{{ item.text }}</p>
        </div>
    </div>
</template>

<style scoped>
.main{
    flex: 1;
    display: flex;
    flex-direction: column;
    width: 70%;
    margin: 5rem auto;
}

.result_container{
    width: 100%;
    margin-top: 5rem;
    border-top: 3px solid rgba(85, 107, 47, 0.5);
    padding: 3rem;
    padding-bottom: 0;
}

.result_container>p{
    padding: 2rem;
    padding-bottom: 0;
}


</style>