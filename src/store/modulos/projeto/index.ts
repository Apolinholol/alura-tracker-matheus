import http from "@/http";
import IProjeto from "@/interfaces/IProjeto";
import { Estado } from "@/store";
import { ALTERAR_PROJETO, CADASTRAR_PROJETO, OBTER_PROJETOS, REMOVER_PROJETO } from "@/store/tipo-acoes";
import { ADICIONA_PROJETO, ALTERA_PROJETO, EXCLUIR_PROJETO, DEFINIR_PROJETOS } from "@/store/tipo-mutacoes";
import { Module } from "vuex";

export interface EstadoProjeto{
    projetos: IProjeto[]

}
export const projeto: Module<EstadoProjeto, Estado> = {
    state: {
        projetos: []
    },
    mutations: {
        [ADICIONA_PROJETO](state, nomeDoProjeto: string) {
            const projetoNovo = {
                id: new Date().toISOString(),
                nome: nomeDoProjeto
            } as IProjeto;
            state.projetos.push(projetoNovo);
        },
        [ALTERA_PROJETO](state, projeto: IProjeto) {
            const index = state.projetos.findIndex(proj => proj.id == projeto.id);
            state.projetos[index] = projeto;
        },
        [EXCLUIR_PROJETO](state, id: string) {
            state.projetos = state.projetos.filter(proj => proj.id != id);
        },
        [DEFINIR_PROJETOS](state, projetos: IProjeto[]) {
            state.projetos = projetos;
        }
    },
    actions: {
        [OBTER_PROJETOS]({ commit }) {
            return http.get("projetos")
                .then(resposta => commit(DEFINIR_PROJETOS, resposta.data));
        },
        [CADASTRAR_PROJETO]({ commit }, nomeDoProjeto: string) {
            return http.post('/projetos', { nome: nomeDoProjeto })
                .then(() => commit(ADICIONA_PROJETO, nomeDoProjeto));
        },
        [ALTERAR_PROJETO]({ commit }, projeto: IProjeto) {
            return http.put(`/projetos/${projeto.id}`, projeto)
                .then(() => commit(ALTERA_PROJETO, projeto));
        },
        [REMOVER_PROJETO]({ commit }, id: string) {
            return http.delete(`/projetos/${id}`)
                .then(() => commit(EXCLUIR_PROJETO, id));
        }
    }
};
