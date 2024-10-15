<script lang="ts">
import { defineComponent,PropType } from 'vue';
import Cronometro from './Cronometro.vue';
import ITarefa from '@/interfaces/ITarefa';
import Card from './Card.vue';


export default defineComponent({
    name:"AppTarefa",
    components:{Cronometro, Card},
    props:{
       tarefa:{
        type : Object as PropType<ITarefa>, required: true
       } 
    }
})
</script>

<template>
    <Card>
        <div class="col py-3 ps-2 " >
           {{ tarefa.descricao || 'Tarefa sem descrição'}}
        </div>
        <div class="col py-3 ps-2">
            {{ tarefa.projeto?.nome || 'N/D' }}
        </div>
        <div class="col py-3 ps-2">
            <Cronometro :tempo-em-segundos="tarefa.duracaoEmSegundos"/>
        </div>
 
    </Card>
</template>

<style scoped>
.col{
    background-color:wheat;
}

</style>