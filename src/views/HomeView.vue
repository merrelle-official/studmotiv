<script setup>
import { RouterLink } from 'vue-router';
import { onMounted, ref } from 'vue';

let numbers = ref(null);

onMounted(() => {
  const sections = document.querySelectorAll('section');
  const numbers = document.querySelectorAll('.number');

  window.addEventListener('scroll', () => {
    let index = Math.floor((window.scrollY + 213) / (document.body.offsetHeight / sections.length));
    if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
      index = sections.length - 1;
    }
    numbers.forEach((number, i) => {
      if (i === index) {
        number.classList.add('green');
      } else {
        number.classList.remove('green');
      }
    });
  });
});
</script>

<template>
  <main class="main">
    <section id="1-st" class="section flex-row">
      <div class="number">
        <img src="/images/1.svg" alt="1">
      </div>
      <div class="first-section__text"><p><strong>Studmotiv</strong> - это платформа, помогающая учащимся средних и старших классов диагностировать проблемы познавательной мотивации и выявить факторы, которые напрямую препятствуют росту и поддержанию уровня замотивированности в отношении учебного процесса.</p></div>
      <img class="first-section__img" src="/images/mockup.png" alt="mockups">
    </section>

    <section id="2-nd" class="section flex-column">
      <div class="number">
        <img src="/images/2.svg" alt="2">
      </div>
      <h1>Описание тестирования</h1>
      <p>Здесь вы можете пройти общее тестирование на определение уровня мотивации. По полученным результатам вам будут доступны более детальные тесты по “выпадающим” факторам, после прохождения которых появятся практические рекомендации для проработки индивидуальных проблем.</p>
      <RouterLink class="button" to="/testing">Перейти к тестированию</RouterLink>
    </section>

    <section id="3-rd" class="section flex-column">
      <div class="number">
        <img src="/images/3.svg" alt="3">
      </div>
      <h1>Инструкция по прохождению</h1>
      <p>Общее тестирование представляет собой тест из 16-ти вопросов. В качестве ответов вы увидите цифры от 1 до 5, где 1 - это “Совершенно не описывает меня”, а 5 - “Это полностью про меня”. Отвечайте быстро, не задумываясь.
Чтобы открыть индивидуальные тесты и сохранить результаты в личном кабинете, необходимо пройти регистрацию на платформе.</p>
    </section>

    <section id="4-th" class="section flex-column">
      <div class="number">
        <img src="/images/4.svg" alt="4">
      </div>
      <h1>История создания и предназначение</h1>
      <p>Этот проект – результат усилий студента Московского государственного психолого-педагогического университета (МГППУ) факультета Информационных технологий, Яны Филимоновой.
Этот сайт был создан в рамках дипломной работы с целью помочь ученикам, их родителям и учителям в определении мотивации к обучению. Я уделила особое внимание важности понимания мотивации в образовании и разработала этот проект с целью предоставить доступный и эффективный инструмент для её диагностики.
Создание этого сайта было вдохновлено стремлением помочь учащимся лучше понять свои цели и мотивы, что в свою очередь способствует более осознанному обучению и карьерному развитию.
Я надеюсь, что результаты этого проекта будут полезными и информативными для всех, кто столкнулся с вопросом мотивации в учебе и желает получить дополнительную поддержку в этом важном аспекте своей жизни.</p>
    </section>
    
    <section id="4-th" class="section flex-column">
      <div class="number">
        <img src="/images/5.svg" alt="5">
      </div>
      <form class="form" action="#">
        <h1>Если у вас появились вопросы или предложения, оставьте свой комментарий в форме обратной связи.</h1>
        <div class="input-container">
          <div class="name-email">
            <input type="text" name="name" placeholder="Введите имя">
            <input type="email" name="email" placeholder="Введите почту">
          </div>
          <textarea  type="text" name="message" placeholder="Ваше сообщение" maxlength="255"></textarea>
        </div>
        <div class="for-button">
          <button class="button">Отправить</button>
        </div>
        
      </form>
    </section>

  </main>
</template>

<style scoped>
.main{
  width: 70%;
  margin: 73px auto;
  display: flex;
  flex-direction: column;
  color: #22291F;
}
.section{
  position: relative;
  height: 400px;
}

.flex-row{
  display: flex;
  gap: 20px;
}

.flex-row>*:not(.number){
flex-basis: 50%;
}

.first-section__text, .second-section__text{
  display: flex;
  align-items: center;
}



.second-section__button{
  display: flex;
  align-items: center;
  justify-content: center;

}



.flex-column{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 38px;
}

.number{
  position: absolute;
  transform: translateX(-120%);
  left: 0;
  display: flex;
  align-items: center;
  height: 400px;
}

.number>*{
  border-radius: 50%;
}

.section>p{
  max-width: 85%;
}

.form{
  width: 70%;
}

.input-container{
  margin: 22px 0 29px 0;
}

.name-email{
  margin-bottom: 29px;
  display: flex;
  justify-content: space-between;
}

.name-email>*{
  flex-basis: 47%;
  padding: 9px 13px;
  border: #22291F 1px solid;
}

.input-container>textarea{
  width: 100%;
  height: 129px;
  padding: 9px 13px;
  resize: none;
  border: #22291F 1px solid;
}

.for-button{
  display: flex;
  justify-content: end;
}

.form>h1{
  text-align: center;
}

input, textarea{
  background-color: #EBEBEB;
}

.green img {
  background-color: #556B2F;
}

</style>
