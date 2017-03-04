Vue.component('message', {

    props: ['title', 'body'],

    data() {
        return {
            isVisable: true
        }
    },

    template: `
         <article class="message" v-show="isVisable">
            <div class="message-header">
                {{ title }}
                <button class="delete" @click="isVisable = false"></button>
            </div>
            <div class="message-body">
                {{ body }}
            </div>
        </article>
    `
})

new Vue({
    el:'#root',
})