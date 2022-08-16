import { collection, addDoc,getDocs, doc, deleteDoc  } from "firebase/firestore";
import { useCallback,useEffect, useState } from "react";
import { db } from "../../services/firebaseConfig";
import { toast } from 'react-toastify'


function Cadastro(){
    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [telefone, setTelefone] = useState('');
    const [cidade, setCidade] = useState('');
    const [usuarios, setUsuarios] = useState([]);

    //Buscar lista no LocalStorage
    useEffect(() => {
        const listUsers = localStorage.getItem('@allUsers');
        if(listUsers){
            setUsuarios(JSON.parse(listUsers));
        }
    },[]);

    //Salvar lista no LocalStorage
    useEffect(() => {
        localStorage.setItem('@allUsers', JSON.stringify(usuarios));
    }, [usuarios]);

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

    //Buscar todos os usuários
    useEffect(() => {
    async function allUser(){
        const lista = [];

        const querySnapshot = await getDocs(collection(db, "person"));
        querySnapshot.forEach((doc) => {
            lista.push({
                id: doc.id,
                nome: doc.data().nome,
                email: doc.data().email,
                telefone: doc.data().telefone,
                cidade: doc.data().cidade
            }) 
        });
        setUsuarios(lista);
    }
    allUser();
}, [usuarios])

    //Deletar um usuario especifico
const deleteUser = useCallback((id) => {
    deleteDoc(doc(db, "person", id));
    const find = usuarios.filter(r => r.id !== id)
        setUsuarios(find)
        
    }, [usuarios]);



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
            <div>
                <ul>
                    {
                        usuarios.map((user) => {
                            return(
                                <li key={user.id}>
                                    <span>NOME: {user.nome}</span><br/>
                                    <span>CIDADE: {user.cidade}</span><br/>
                                    <span>TELEFONE: {user.telefone}</span><br/>
                                    <span>E-MAIL: {user.email}</span>
                                    <button onClick={() => deleteUser(user.id)}>APAGAR</button>
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
        </div>

    )
}
export default Cadastro;