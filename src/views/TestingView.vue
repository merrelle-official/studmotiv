<script setup>
import { RouterLink } from 'vue-router';
import {data} from '../data.js';
import { ref, onUnmounted, onMounted  } from 'vue'

const normalaizedData = ref(null);
const isTestStarted = ref(false);
const currentQuestion = ref(0);
const isDisabled = ref(false);
const length = ref(0)


onMounted(() => {
    normalaizedData.value = getNormalizedData(data);

    length.value = normalaizedData.value.length -1
})

function getNormalizedData(data){
    const normalizedData = data.map((item) => {
        return {...item, currentAnswer: 0};
    });
    return normalizedData
}

const handleStart = () => {
    isTestStarted.value = true;
    console.log(normalaizedData.value);
    isDisabled.value = true;
}
const handleNext = () => {
    if (currentQuestion.value < normalaizedData.value.length - 1) {
        currentQuestion.value++;

    }
    isDisabled.value = true;
}

const handleBack = () => {
    currentQuestion.value--;
    if (currentQuestion.value === -1){
        isTestStarted.value = false
    }
}

const handleChooseAnswer = (index) => {
    normalaizedData.value[currentQuestion.value].currentAnswer = index;
    // localStorage.setItem("currentTestProgress", JSON.stringify(normalaizedData.value));
    isDisabled.value = false;
}


</script>

<template v-if="normalaizedData">
    <main class="main">
        <div class="container">
            <template v-if="!isTestStarted">
                <div  class="testing-info">
                <h1>Инструкция по прохождению </h1>
                <p>Общее тестирование представляет собой тест из 16-ти вопросов. В качестве ответов вы увидите цифры от 1 до 5, где 1 - это “Совершенно не описывает меня”, а 5 - “Это полностью про меня”. Отвечайте быстро, не задумываясь.
Чтобы открыть индивидуальные тесты и сохранить результаты в личном кабинете, необходимо пройти регистрацию на платформе.</p>
            </div>
            <div class="choose__test-type">
                <div>
                    <input class="input_radio" type="radio" name="midle" id="midle">
                    <label for="midle">Я учащийся <strong>средней</strong> школы</label>
                </div>
                <div>
                    <input class="input_radio" type="radio" name="high" id="high">
                    <label for="high">Я учащийся <strong>старшей</strong> школы</label>
                </div>
                
            </div>
            </template>
            
            <template v-else>
                <div class="question_container">
                    <h1 class="question_text">{{ currentQuestion + 1 }}. {{ normalaizedData[currentQuestion].questionText }}</h1>
                    <div class="remember_block">
                        <p class="remember"><strong>Памятка:</strong></p>
                        <ul>
                            <li><strong>1</strong> - Совершенно не описывает меня</li>
                            <li><strong>2</strong> - Скорее всего не про меня</li>
                            <li><strong>3</strong> - Затрудняюсь ответить</li>
                            <li><strong>4</strong> - Иногда это про меня</li>
                            <li><strong>5</strong> - Полностью про меня</li>
                        </ul>
                    </div>
                    
                </div>
                <div class="answer_container">
                    <img v-for="index in 5" 
                    :key="index" 
                    :src="`/images/${index}.svg`" 
                    alt="Image {{ index }}" 
                    @click="handleChooseAnswer(index)"
                    :class="normalaizedData[currentQuestion].currentAnswer === index && 'highlighted'"
                    />
                </div>
            </template>


            <div class="testing-nav">
                <RouterLink v-if="!isTestStarted" to="/" class="button btn_back">
                    <img src="/images/left_arrow.svg" alt="">
                    На главную
                </RouterLink>
                <button v-else class="button btn_back" @click="handleBack">
                    <img src="/images/left_arrow.svg" alt="">
                    Назад
                </button>
                <button v-if="currentQuestion != length" :disabled="isDisabled" class="button btn_next" @click="!isTestStarted ? handleStart() : handleNext()">
                    
                    {{ !isTestStarted ? "Начать тестирование" : "Следующий вопрос" }}
                    <img src="/images/right_arrow.svg" alt="">
                </button>
                <RouterLink to="/result" v-else :disabled="isDisabled" :class="['button', 'btn_next', isDisabled ? 'dis' : '']">
                    
                   К результатам
                    <img src="/images/right_arrow.svg" alt="">
                </RouterLink>
            </div>
        </div>
    </main>
</template>

<style scoped>
.main{
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
} 

.container{
    width: 70%;
    height: auto;
    margin: 73px auto;
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
}

.testing-info{
    width: 70%;
    text-align: center;
    display: flex;
    flex-direction: column;
    gap: 50px;
}

.testing-nav{
    display: flex;
    justify-content: space-between;
    width: 100%;
}

.button{
    display: flex;
    gap: 20px;
    box-shadow: none;
    align-items: center;
}

.btn_back{
    background-color: #EBEBEB;
    border: 2px #22291F solid;
}

.question_container{
    width: 100%;
    display: flex;
    border: #22291F 2px solid;
    align-items: center;

}

.question_text{
    padding: 37px;
    flex-basis: 70%;
}

.remember_block *{
    font-size: 18px;
}

.remember_block{
    border-left: #22291F 2px dashed ;
    padding: 37px;
}

.answer_container{
    flex: 1;
    width: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;
    
}

.answer_container>*{
    transition: all 0.3s ease-in-out;
    border-radius: 50%;
}

.answer_container>img:hover{
    
    background-color: #556B2F;
    cursor: pointer;
}

.highlighted{
    background-color: #556B2F;
}

.btn_next{
    border: #22291F 2px solid;
}

.btn_next:disabled{
    background-color: #EBEBEB;
    border: #22291F 2px solid;
    color: inherit;
    cursor:not-allowed;
}

.dis{
    background-color: #EBEBEB;
    border: #22291F 2px solid;
    color: inherit;
    cursor:not-allowed;
}

.choose__test-type{
    display: flex;
    justify-content: space-between;
    width: 60%;
}

.input_radio{
    margin: 10px;
    width: 20px;
    height: 20px;
}

.choose__test-type>div{
    display: flex;
    align-items: center;
}

label{
    font-size: 18px;
}

</style>