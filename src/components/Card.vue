<template>
    <div class="card d-flex flex-row shadow fw-bold mx-3 my-3" :style="estilos">
        <slot></slot>
    </div>
</template>

<script lang="ts">
    import { defineComponent } from 'vue';

    export default defineComponent({
        name:"AppBox",
        data(){
            return{
                estilos: {
                    // ou backgroundColor: 'wheat'
                    background: 'wheat'
            }
        }
    }
})
</script>

