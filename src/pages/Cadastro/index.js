import { collection, addDoc } from "firebase/firestore";
import { useState } from "react";
import { toast } from 'react-toastify';
import { BsFillFolderSymlinkFill } from "react-icons/bs";
import { ContainerCadastro, Title, Formulario, Admin } from "./styleCadastro";
import BasicModal from "../../components/Modal";
import { db } from "../../services/firebaseConfig";


function Cadastro(){
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [telephone, setTelephone] = useState('');
    const [city, setCity] = useState('');


    //Inserir usuario
    async function insertUser(e){
        e.preventDefault();
        if(name !== '' && email !== '' && telephone !== '' && city !== ''){
            try {
                await addDoc(collection(db, "person"), {
                nome: name,
                email: email,
                telefone: telephone,
                cidade: city
                });
                toast.success('Usuário adicionado!') 
            } catch (e) {
                    console.error("Error adding document: ", e);
            }
            }else{
                toast.error('Preencha todos os campos!')
        }
    }

    return(
        <ContainerCadastro>
            <Title>
                <h1>Cadastro simples</h1>
            </Title>
            <Admin>
                <BsFillFolderSymlinkFill size = "30" /> 
                <span>{<BasicModal />}</span>
            </Admin>
            <Formulario onSubmit={insertUser}>
                <input 
                    placeholder = "Digite seu nome completo"
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
                    placeholder = "Cidade onde nasceu"
                    value = {city}
                    onChange = {e => setCity(e.target.value)}
                />
                <button type="submit">Cadastrar</button>
            </Formulario>
            
        </ContainerCadastro>

    )
}
export default Cadastro;