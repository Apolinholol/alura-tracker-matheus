<template>
    <div class="container position-absolute end-0 top-0 w-25 m-0 ps-5" >
        <div class="alert " role="alert" :class="contexto[notificacao.tipo]" v-for="notificacao in notificacoes" :key="notificacao.id">
            <h4 class="alert-heading">{{notificacao.titulo}}</h4>
            <hr>
            <p class="mb-0">{{notificacao.descricao}}</p>
          </div>
    </div>
        

</template>

<script lang="ts">

import { TipoNotificacao } from '@/interfaces/INotificacoes';
import { useStore } from '@/store';
import { computed, defineComponent } from 'vue';
export default defineComponent({
    name:'AppNotificacoes',
    data(vm) {
        return{
            contexto:{
                [TipoNotificacao.SUCESSO]: 'alert-success',
                [TipoNotificacao.ATENCAO]: 'alert-warning',
                [TipoNotificacao.FALHA]: 'alert-danger'
            }
        }
    },
    setup() {
        const store = useStore()
        return{
            notificacoes:computed(()=> store.state.notificacoes)
        }
    },
})
</script>