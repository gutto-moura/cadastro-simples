import { collection, addDoc } from "firebase/firestore";
import { useState } from "react";
import { db } from "../../services/firebaseConfig";
import { toast } from 'react-toastify';


function Cadastro(){
    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [telefone, setTelefone] = useState('');
    const [cidade, setCidade] = useState('');

    //Inserir usuario
    async function insertUser(e){
        e.preventDefault();
    try {
        const docRef = await addDoc(collection(db, "person"), {
          nome: nome,
          email: email,
          telefone: telefone,
          cidade: cidade
        });
        toast.success('Usuário adicionado!')
        console.log("Document written with ID: ", docRef.id);
    
      } catch (e) {
        console.error("Error adding document: ", e);
      }
    }

    return(
        <div>
            <form onSubmit={insertUser}>
                <input 
                    placeholder = "Nome completo"
                    value = {nome}
                    onChange = {e => setNome(e.target.value)}
                />
                <input 
                    placeholder = "Digite seu E-mail"
                    value = {email}
                    onChange = {e => setEmail(e.target.value)}
                />
                <input 
                    placeholder = "Digite seu telefone"
                    value = {telefone}
                    onChange = {e => setTelefone(e.target.value)}
                />
                <input 
                    placeholder = "Cidade que nasceu"
                    value = {cidade}
                    onChange = {e => setCidade(e.target.value)}
                />
                <button type="submit">Cadastrar</button>
            </form>
            <div>
                {/*<button onClick = {allUser}>Atualizar cadastros</button>*/}
            </div>
            
        </div>

    )
}
export default Cadastro;