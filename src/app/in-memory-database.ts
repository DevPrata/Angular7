import { InMemoryDbService } from 'angular-in-memory-web-api'
import { Usuario } from './pages/usuarios/shared/usuario.model'


export class InMemoryDatabase implements InMemoryDbService{
    createDb() {
        const usuarios: Usuario[] = [
            { id:1, nome: "Moradia", email: 'Pagamentos de Contas da Casa',cliente:'FCamara',status:true},
        ]



        return { usuarios }
    }
}