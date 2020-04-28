import { InMemoryDbService } from 'angular-in-memory-web-api'
import { Usuario } from './pages/usuarios/shared/usuario.model'
import { LogAcesso } from "./pages/log-acesso/shared/log-acesso.model";

export class InMemoryDatabase implements InMemoryDbService{
    createDb() {
        const usuarios: Usuario[] = [
            { id:1, nome: "Moradia", email: 'Pagamentos de Contas da Casa',cliente:'FCamara',status:true},
        ]

        const logsAcesso: LogAcesso[] = [
            { id:1, dataHora: "28/04/2020 - 10:00:00", usuario: 'Diego Tavares dos Santos', ip: '255.255.255.255', navegador: 'Google Chrome', localizacao: 'Gonzaga, Santos - SP'},
        ]

        return { usuarios, logsAcesso }
    }
}