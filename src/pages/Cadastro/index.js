import { collection, addDoc } from "firebase/firestore";
import { useState } from "react";
import { db } from "../../services/firebaseConfig";
import { toast } from 'react-toastify';
import { BsFillFolderSymlinkFill } from "react-icons/bs";
import { ContainerCadastro, Title, Formulario, Admin } from "./styleCadastro";
import BasicModal from "../../components/Modal";


function Cadastro(){
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [telephone, setTelephone] = useState('');
    const [city, setCity] = useState('');


    //Inserir usuario
    async function insertUser(e){
        e.preventDefault();
    try {
        const docRef = await addDoc(collection(db, "person"), {
          nome: name,
          email: email,
          telefone: telephone,
          cidade: city
        });
        toast.success('Usuário adicionado!') 
      } catch (e) {
        console.error("Error adding document: ", e);
      }
    }

    return(
        <ContainerCadastro>
            <Title>
                <h1>Cadastro simples</h1>
            </Title>
            <Admin onClick = {() => {}}>
                <BsFillFolderSymlinkFill size = "30" /> 
                <span>{<BasicModal />}</span>
            </Admin>
            <Formulario onSubmit={insertUser}>
                <input 
                    placeholder = "Nome completo"
                    value = {name}
                    onChange = {e => setName(e.target.value)}
                />
                <input 
                    placeholder = "Digite seu E-mail"
                    value = {email}
                    pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
                    title="formato 'email@provedor.com' "
                    onChange = {e => setEmail(e.target.value)}
                />
                <input 
                    placeholder = "Digite seu telefone"
                    value = {telephone}
                    onChange = {e => setTelephone(e.target.value)}
                />
                <input 
                    placeholder = "Cidade do seu nascimento"
                    value = {city}
                    onChange = {e => setCity(e.target.value)}
                />
                <button type="submit">Cadastrar</button>
            </Formulario>
            
        </ContainerCadastro>

    )
}
export default Cadastro;