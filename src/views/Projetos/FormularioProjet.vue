<template>
    <section class="projetos"></section>
    <form @submit.prevent="salvar">
        <div class="mb-3 ms-3">
            <label for="nomeDoProjeto" class="form-label">
                Nome do projeto
            </label>
            <div class="input-group w-25">
                <input type="text" class="form-control " id="nomeDoProjeto" v-model="nomeDoProjeto" placeholder="Nome do Projeto" aria-label="Nome do Projeto">
                <button class="btn btn-outline-secondary" type="submit" id="button-addon2">Salvar</button>
            </div>
        </div>
    </form>

</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { useStore } from '@/store';
import { ALTERA_PROJETO } from '@/store/tipo-mutacoes';
import { TipoNotificacao } from '@/interfaces/INotificacoes';
import  useNotificador  from '@/hooks/notificador';
import { ALTERAR_PROJETO, CADASTRAR_PROJETO } from '@/store/tipo-acoes';


export default defineComponent({
    name:'AppProjetos',
    props:{
        id:{ type: String}
    },
    mounted(){
        if(this.id){
            const projeto = this.store.state.projetos.find(proj => proj.id == this.id)
            this.nomeDoProjeto = projeto?.nome || ''
        }
    },
    data() {
        return{
            nomeDoProjeto: "",
        }
    },methods:{
        salvar(){
            if(this.id){
                this.store.dispatch(ALTERAR_PROJETO,{
                    id: this.id,
                    nome: this.nomeDoProjeto
                }).then(()=>  this.lidarComSucesso())

            }else{
                this.store.dispatch(CADASTRAR_PROJETO,this.nomeDoProjeto)
                .then(()=> this.lidarComSucesso())
            }
            
        },
        lidarComSucesso(){
            this.nomeDoProjeto='',
            this.notificar(TipoNotificacao.SUCESSO,"Excelente!","O projeto foi cadastrado com sucesso!")
            this.$router.push('/projetos')
        }
    },
    
    setup(){
        const store = useStore()
        //Alterando o nome da função
        const {notificar} = useNotificador()
        return{
            store,
            notificar
        }
    }
})
</script>