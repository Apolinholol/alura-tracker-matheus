<template>
    <div >
        <h1 class="title ms-3">Projetos</h1>
        <router-view></router-view>
    </div>
</template>

<script lang="ts">
import { useStore } from '@/store';
import { defineComponent, computed } from 'vue';

export default defineComponent({
    name:"ListaProjetos",
    setup() {
            const store = useStore()
            return{
                // function obterProjetos(){ return store.state.projetos }
                projetos: computed(()=> store.state.projetos)
            }
        }
    }
)
</script>