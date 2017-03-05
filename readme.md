# Learning Vuejs with Laracasts

Link: [https://laracasts.com/series/learn-vue-2-step-by-step/][laracast]

## Getting Started

Install Vue easily by inserting the recommended CDN.

```js
<script src="https://unpkg.com/vue@2.2.1"></script>
```

## Lesson 1: Basic Data Binding

* Create a new Vue instance
* Bind it to an element
* Specify some data
* Bind value to form inputs using `v-model`

#### html

```html
 <div id="root">
    <input type="text" id="input" v-model="message">
    <p>The value of input is {{ message }}</p>
</div>
```

#### js

```js
new Vue({
    el: '#root',
    data: {
        message: "Hello World"
    }
})
```

## Lesson 2: Setup Vue Dev Tools

Install the [Vue Dev Tools][vue-dev-gh] from [Chrome Web Store][chrome-vue].

## Lesson 3: Lists

This example explains how you may loop over array objects using Vue.

Our goal is to loop over a names array in an unordered list. We start by adding the array `names` to `data:`.

#### js

```js
new Vue ({
            el: '#root',
            data: {
                names: ['Frank', 'Kay', 'Romeo', 'Caleb', 'Carlos']
            }
        })
```

In our markup, we use the the `v-for` to loop over our names.

#### html

```html
<div id="root">
    <ul>
        <li v-for="name in names">
            {{ name }}
        </li>
    </ul>
    </div>
```

or we could also use `v-text` to simplify our code.

```html
<li v-for="name in names" v-text="name">
```

## Lesson 4: Event Listeners

Event Listeners can easily be added by using `v-on:click`. We can fire a method `addName`by including it in after the listener like this `v-on:click="addName"`.

#### html

```html
<div id="root">
    <ul>
        <li v-for="name in names">
            {{ name }}
        </li>
    </ul>

    <input id="input" type="text" v-model="newName">
    <button v-on:click="addName">Add Name</button>
</div>
```

We add any custom methods in Vue by adding them to the `methods` object.
Below we are accessing the value typed into the input via the `v-model="newName"` and adding it to the `names` array. Next we clear the content of the input by reseting `newName` to an empty string.

#### js

```js
var app = new Vue ({
    el: '#root',
    data: {
        newName: '',
        names: ['Frank', 'Kay', 'Romeo', 'Caleb', 'Carlos']
    },
    methods: {
        addName() {
            this.names.push(this.newName)
            this.newName = ''
        }
    }

    })
```

#### Shorthand

We will be doing a lot of event listeners so we can do the shorthand of `v-on:click` like this.

`<button @click="addName">Add Name</button>`

## Lesson 5: Attribute and Class Binding

## Lesson 6: Computed Properties

## Lesson 7: Components 101

## Lesson 8: Practical Component Exercise #1: Message

You can create your own message components which will look like this in the markup.

```html
<message title="Hello World" body="Lorem ipsum dolor sit amet"></message>
<message title="Hello Javascript" body="Why didn't anyone tell me Vue is so cool!"></message>
```

Behind the scenes in our JS file, we can see how to create components. Notice that we are passing in the `title` and `body`.
To tell Vue how to handle them we add them to our props object. We place them with `{{  }}` where we want them to render. We also have a new directives named `v-show` which allows to hide and show elements. We are adding the `isVisable` to toggle the attribute from `true` to `false` once you click the button.

```js
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
```

## Lesson 9: Practical Component Exercise #2: Modal

This lesson covers using [Bulma][bulma]'s modal in Vue.

First we copy the html from [Bulma][bulma] and add it to the component we make called `modal`. We have to add the `is-active` class to ensure it is fired. We'll control the hiding of the modal via a custom event called `close` like this:

```js
@click="$emit('close')"
```

In our root Vue app we have the `showModal` data object that will start off as false. This controls if the modal is visible or not.

```js
Vue.component('modal', {
    template: `
        <div class="modal is-active">
            <div class="modal-background"></div>
            <div class="modal-content">
                <div class="box">
                    <p>
                        <slot></slot>
                    </p>
                </div>
            </div>
            <button class="modal-close" @click="$emit('close')"></button>
        </div>
    `
})

new Vue({
    el:'#root',
    data: {
        showModal: false
    }
})
```

In our markup we have our Vue component and see our custom event listener `close`. We fire the modal using the directive `@click="showModal = true"`

```html
<div id="root" class="container">

    <modal v-show="showModal" @close="showModal = false">
        <p>Insert me here</p>
    </modal>
    <button @click="showModal = true">Show Modal</button>

</div>
```

## Lesson 11: Practical Component Exercise #3: Tabs

We make nav tabs with contenet using Bulma and Vue

#### html

```html
<div id="root" class="container">

    <tabs>
        <tab name="About Us" :selected="true">
            <h1>Here is some content About Us.</h1>
        </tab>
        <tab name="About Our Culture">
            <h1>Here is some content About Our Culture.</h1>
        </tab>
        <tab name="About Our Vision">
            <h1>Here is some content About Our Vision.</h1>
        </tab>
    </tabs>

</div>
```

#### js

```js
Vue.component('tabs', {
    template:`
        <div>
            <div class="tabs">
                <ul>
                    <li v-for="tab in tabs" :class="{ 'is-active': tab.isActive }">
                        <a :href="tab.href" @click="selectTab(tab)"> {{ tab.name }} </a>
                    </li>
                </ul>
            </div>

            <div className="tabs-details">
                <slot></slot>
            </div>
        </div>
    `,

    data() {
        return { tabs: [] }
    },

    created() {
        this.tabs = this.$children;
    },

    methods: {
        selectTab(selectedTab) {
            this.tabs.forEach( tab => {
                tab.isActive = (tab.name == selectedTab.name)
            })
        }
    }

})

Vue.component('tab', {
    template: `
        <div v-show="isActive">
            <slot></slot>
        </div>
    `,

    props: {
        name: { required: true },
        selected: { default: false }
    },

    data() {
        return {
            isActive: false
        }
    },

    computed: {
        href() {
            return '#' + this.name.toLowerCase().replace(/ /g, '-')
        }
    },

    mounted() {
        this.isActive = this.selected
    }


})

new Vue({
    el:'#root',
    data: {
        showModal: false
    }
})
```

## Lesson 12: Component Communication Example #1: Custom Events

We learned how components can communicate with one another. In the is example the `coupon` component triggers the `h1` to show if it is triggered by the `blur` event or tabbing out of the `input`.

#### html

```html
<div id="root" class="container">

    <coupon @applied="onCouponApplied"></coupon>

    <h1 v-if="couponApplied">You used a coupon</h1>

</div>
```

#### js

```js
Vue.component('coupon', {
    template: `
        <input type="text" placeholder="Enter your coupon code" @blur="onCouponApplied"/>
    `,

    methods: {
        onCouponApplied() {
            this.$emit('applied')
        }
    }
})

new Vue({
    el:'#root',

    data: {
        couponApplied: false
    },

    methods: {
        onCouponApplied() {
            this.couponApplied = true
        }
    }
})
```

## Lesson 13: Component Communication Example #2: Event Dispatcher

Here we now switch to a global instance of Vue as an event dispacther. The end result is the same as Lesson 12.

#### js

```js
window.Event = new Vue()

Vue.component('coupon', {
    template: `
        <input type="text" placeholder="Enter your coupon code" @blur="onCouponApplied"/>
    `,

    methods: {
        onCouponApplied() {
            Event.$emit('applied')
        }
    }
})

new Vue({
    el:'#root',

    data: {
        couponApplied: false
    },

    created() {
        Event.$on('applied', () => alert('handling it'))
    }
})
```


[laracast]: https://laracasts.com/series/learn-vue-2-step-by-step/
[chrome-vue]:https://chrome.google.com/webstore/detail/vuejs-devtools/nhdogjmejiglipccpnnnanhbledajbpd
[vue-dev-gh]: https://github.com/vuejs/vue-devtools
[bulma]: http://bulma.io/