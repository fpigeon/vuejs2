<template>
    <div class="box is-info">
        <p>
            <slot></slot>
        </p>
    </div>
</template>

<script>
    export default {

    }
</script>

<style lang="sass">
    .box
        background-color: grey
        padding: 16px
        border: 1px solid darkgrey
        color: white
        margin-bottom: 1em

</style>