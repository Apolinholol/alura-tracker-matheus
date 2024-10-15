<template>
    <section class="projetos"></section>

    <router-link to="/projetos/novo" class="btn"><i class="bi bi-chevron-double-right me-2"></i><span>Novo Projeto</span></router-link>

        <div class="table-responsive mx-5">
        <table class="table table-striped table-hover w-100">
            <thead>
                <tr>
                <th scope="col">ID</th>
                <th scope="col">Nome</th>
                <th scope="col">Ações</th>
                </tr>
            </thead>
            <tbody  >
                <tr v-for="projeto in projetos" :key="projeto.id">
                    <td>{{projeto.id}}</td>
                    <td>{{ projeto.nome}}</td>
                    <td class="ps-3">
                        <router-link :to="`/projetos/${projeto.id}`"><button class="btn" ><span><i class="bi bi-diamond  " style="color:red;"></i></span></button></router-link>
                        <button class="btn" @click="excluir(projeto.id)"><span><i class="bi bi-trash " style="color:red;"></i></span></button></td>
                    </tr>
            </tbody>
        </table>
    </div>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue';
import { useStore } from '@/store';
import { EXCLUIR_PROJETO } from '@/store/tipo-mutacoes';


export default defineComponent({
    name:'AppProjetos',
    setup(){
        const store = useStore()
        return{
            projetos: computed(() => store.state.projetos),
            store
        }
    },methods:{
        excluir(id: string){
            this.store.commit(EXCLUIR_PROJETO,id)
           
        }
    }
})
</script>