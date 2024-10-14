<template>
    <header>
        <h1>
            <img src="../assets/logo.png" alt="">
        </h1>
        <button class="btn btn-secondary mt-5 " @click="alterarTema"> 
            {{ textoBotao }} 
        </button>
    </header>
</template>

<script   lang="ts">
    import { defineComponent } from 'vue';
    export default defineComponent({
        name:'BarraLateral'
    ,emits:['aoAlterarTema'],
    data() {
        return{
           modoEscuroAtivo: false
        }
    },
    computed:{
        textoBotao(){
            if(this.modoEscuroAtivo){
                return 'Desativar modo escuro'
            }
            return 'Ativar modo escuro'
        }
    },
    methods:{
        alterarTema(){
            this.modoEscuroAtivo = !this.modoEscuroAtivo
            this.$emit('aoAlterarTema', this.modoEscuroAtivo)
        }
    }
    })
</script>

<style scoped>
   header{
    padding: 1rem;
    background: #0D3B66;
    width: 100%;
    height: 100vh;
    margin: 0 auto;
    text-align: center;
}
@media only screen and(maxwidth:768px){
    header{
        padding: 2.5rem;
        height:auto;
    }
   } 
</style>