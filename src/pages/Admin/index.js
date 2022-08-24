import { collection, getDocs, doc, deleteDoc  } from "firebase/firestore";
import { useCallback, useEffect, useState } from "react";
import { useNavigate  } from "react-router-dom";
import { toast } from 'react-toastify';
import { db } from "../../services/firebaseConfig";
import { ContainerAdmin, InformationAdmin } from "./styleAdmin";
import { BsTrashFill, BsCloudArrowUpFill, BsFileEarmarkPlusFill } from "react-icons/bs";

function Admin(){
    const [users, setUsers] = useState([]);
    let navigate = useNavigate();

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

    function backCadastro(){
        navigate("/", {replace: true})
    }

    //Buscar no BD todos os usuários
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

//Deletar um usuario especifico
    const deleteUser = useCallback((id) => {
    deleteDoc(doc(db, "person", id));
    toast.success('Usuario apagado!');
    const find = users.filter(r => r.id !== id)
        setUsers(find)
    }, [users]);

    return(
        <ContainerAdmin>
            <h1>Usuários cadastrados</h1>
            <InformationAdmin>
                <button onClick={allUsers}><BsCloudArrowUpFill size='25' /><span>Atualizar dados</span></button>
                <h2>{users.length <= 0 ? "" : `Total de cadastro: ${users.length}`}</h2>
                <button onClick={backCadastro}>{<BsFileEarmarkPlusFill size='25'/>}<span>Inserir cadastro</span></button>
            </InformationAdmin>
            <table>
                <thead>
                    <tr>
                        <th scope="col">NOME</th>
                        <th scope="col">EMAIL</th>
                        <th scope="col">TELEFONE</th>
                        <th scope="col">CIDADE</th>
                        <th scope="col">#</th>
                    </tr>
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
                                            <BsTrashFill size='20' color='#363636' />
                                        </button>
                                    </td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
            </ContainerAdmin>
    )
}

export default Admin;