Vue.component('error', {
    props: ['isError'],
    template: `<div class="error" v-if="isError">
                    <p>Не удается подключится к магазину</p>
               </div>`
});