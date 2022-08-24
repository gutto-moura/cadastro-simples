import { ContainerError, BotaoCadastro } from "./styleError"

function Erro(){
    return(
      <ContainerError>
        <h1>404</h1>
        <h2>Pagina não encontrada!</h2>
        <BotaoCadastro to="/">Inserir um cadastro</BotaoCadastro>
      </ContainerError>
    )
  }

export default Erro;