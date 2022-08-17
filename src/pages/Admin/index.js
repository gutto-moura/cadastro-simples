import { collection, getDocs, doc, deleteDoc  } from "firebase/firestore";
import { useCallback, useEffect, useState } from "react";
import { db } from "../../services/firebaseConfig";
import { toast } from 'react-toastify';
import { FcFullTrash } from "react-icons/fc";

function Admin(){
    const [users, setUsers] = useState([]);

    //Buscar lista no LocalStorage
    useEffect(() => {
        const listUsers = localStorage.getItem('@allUsers');
        if(listUsers){
            setUsers(JSON.parse(listUsers));
        }
    },[]);

    //Salvar lista no LocalStorage
    useEffect(() => {
        localStorage.setItem('@allUsers', JSON.stringify(users));
    }, [users]);

    //Buscar no BD todos os usuários
    useEffect(() => {
        async function allUsers(){
            const list = [];
    
            const querySnapshot = await getDocs(collection(db, "person"));
            querySnapshot.forEach((doc) => {
                list.push({
                    id: doc.id,
                    nome: doc.data().nome,
                    email: doc.data().email,
                    telefone: doc.data().telefone,
                    cidade: doc.data().cidade
                }) 
            });
            setUsers(list);
        }
        allUsers();
    }, [users])

//Deletar um usuario especifico
    const deleteUser = useCallback((id) => {
    deleteDoc(doc(db, "person", id));
    toast.success('Usuario apagado!');
    const find = users.filter(r => r.id !== id)
        setUsers(find)
    }, [users]);

    return(
        <div>
            <table>
                <thead>
                    <th scope="col">NOME</th>
                    <th scope="col">EMAIL</th>
                    <th scope="col">TELEFONE</th>
                    <th scope="col">CIDADE</th>
                    <th scope="col">#</th>
                </thead>
                <tbody>
                    {
                        users.map((user) => {
                            return(
                                <tr key={user.id}>
                                    <td data-label = "nome">{user.nome}</td>
                                    <td data-label = "email">{user.email}</td>
                                    <td data-label = "telefone">{user.telefone}</td>
                                    <td data-label = "cidade">{user.cidade}</td>
                                    <td data-label = "#">
                                        <button onClick={() => deleteUser(user.id)}>
                                            <FcFullTrash size='20'/>
                                        </button>
                                    </td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </div>
    )
}

export default Admin;