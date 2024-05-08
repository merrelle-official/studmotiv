<script setup>
import { RouterLink } from 'vue-router';
</script>

<template>
    <div class="footer-container">
        <nav class="footer-nav">
            <ul>
                <li><RouterLink to="/" class="nav-item">Главная</RouterLink></li>
                <li><RouterLink to="/testing" class="nav-item">Тестирование</RouterLink></li>
                <li><RouterLink to="/" class="nav-item">Политика конфидециальности</RouterLink></li>
            </ul>
        </nav>
        <img class="footer-logo" src="/images/logo-f.svg" alt="LOGO">
    </div>
</template>

<script>

</script>

<style scoped>
    .footer-container{
        width: 100%;
        height: 212px;
        background-color: #556B2F;
        position: relative;
    }

    .footer-nav{
        width: 70%;
        margin: 0 auto;
        margin-top: 38px;
        
    }

    .nav-item{
        color: #EBEBEB;
    }

    li:not(:last-child){
        margin-bottom: 10px;
    }

    .footer-logo{
        position: absolute;
        bottom: 0;
        left: 50%;
        transform: translateX(-55%);
    }
</style>