<!-- Contador -->
<template>
<strong class="mb-2 mx-5 display">
    {{ tempoDecorrido }}
  </strong>
</template>

<script lang="ts">

import { defineComponent } from 'vue';

export  default defineComponent({
    name:'AppCronometro',
    props:{
        tempoEmSegundos:{ type: Number, default: 0}
    },
    //Computa o valor de uma variavel e retorna um valor, nesse caso,será aplicado para tempoEmSegundos. É multiplicado por mil pois o valor dado é em milisegundos
    computed:{
            tempoDecorrido():string{
                return new Date(this.tempoEmSegundos * 1000).toISOString().substr(11,8)
            }
        },
})
</script>
<style scoped>
.display{
    color: var(--texto-primario);
}
</style>