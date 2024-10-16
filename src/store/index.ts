
import { InjectionKey } from "vue";
import { Store, createStore,useStore as vuexUseStore } from "vuex";
import { ADICIONA_TAREFA, DEFINIR_TAREFAS, EXCLUIR_TAREFA, NOTIFICAR } from "./tipo-mutacoes";
import  INotificacoes  from "@/interfaces/INotificacoes";
import { CADASTRAR_TAREFAS, OBTER_TAREFAS, REMOVER_TAREFA } from "./tipo-acoes";
import http from "@/http";
import ITarefa from "@/interfaces/ITarefa";
import { EstadoProjeto, projeto } from "./modulos/projeto";



export interface Estado{
    tarefas: ITarefa[]
    notificacoes: INotificacoes[]
    projeto: EstadoProjeto
}
//chave de acesso da store
export const key: InjectionKey<Store<Estado>>= Symbol()


export const store = createStore<Estado>({
    state:{
        notificacoes:[],  
        tarefas:[],
        projeto: {
            projetos: []
        }
    },
        /// Para o estado local da aplicação
    mutations:{
     
        [ADICIONA_TAREFA](state,tarefa:ITarefa){
            state.tarefas.push(tarefa)
        },
        [EXCLUIR_TAREFA](state,id: string){
            state.tarefas = state.tarefas.filter( tarefa => tarefa.projeto.id != id)
        },

        [DEFINIR_TAREFAS](state, tarefas: ITarefa[]){
            state.tarefas = tarefas
        },
        [NOTIFICAR](state, novaNotificacao: INotificacoes){
            novaNotificacao.id = new Date().getTime()
            state.notificacoes.push(novaNotificacao)

            setTimeout(()=> {
                state.notificacoes = state.notificacoes.filter(notificao => notificao.id != novaNotificacao.id)
            }, 3000)
        }
    },
    //Para o estado da api
    actions:{
        //Passando filtro como parametro
        [OBTER_TAREFAS]({ commit },filtro:string){
            let url = 'tarefas'
            if(filtro){
                url +='?descricao=' + filtro
            }
            http.get(url)
                .then(resposta => commit(DEFINIR_TAREFAS,resposta.data))
        },
        [CADASTRAR_TAREFAS]({commit}, tarefa: ITarefa){
            return  http.post('/tarefas', tarefa)
                .then(resposta => commit(ADICIONA_TAREFA,resposta.data))
          },
        [REMOVER_TAREFA]({commit}, tarefa: ITarefa){
            return  http.delete(`/tarefas/${tarefa.projeto.id}`)
                .then( () => commit(EXCLUIR_TAREFA,tarefa.projeto.id))
          },

    },modules:{
        projeto
    }
})

export function useStore(): Store<Estado>{
    return vuexUseStore(key)
}