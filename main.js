Vue.component('task-list', {

    template:`
        <div>
            <task v-for="task in tasks">{{ task.task }}</task>
        </div>
    `,

    data() {
        return {
            tasks: [
                { task: 'Go to the bank', completed: false },
                { task: 'Go to the store', completed: false },
                { task: 'Go on a date', completed: false },
                { task: 'Drink coffee', completed: false },
                { task: 'Code', completed: false }
            ]
        }
    }

})

Vue.component('task', {
    template: '<li><slot></slot></li>',
})

new Vue({
    el:'#root',
})