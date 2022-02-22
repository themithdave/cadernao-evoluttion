import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FiPower, FiTrash2 } from 'react-icons/fi';

import api from '../../services/api';

import './styles.css';

import logoImg from '../../assets/logo-wbg.png';

 export default function Profile(){
    const [clients, setClients] = useState([])

    const consultorId = localStorage.getItem('consultorId');
    const consultorName = localStorage.getItem('consultorName');

    const navigate = useNavigate();

    useEffect(() => {
        api.get('profile', {
            headers: {
                Authorization: consultorId,
            }
        }).then(response =>{
            setClients(response.data);
        })
    }, [consultorId]);

    async function handleDeleteClient(id) {
        try{
            await api.delete(`clients/${id}`, {
                headers: {
                    Authorization: consultorId,
                }
            });

            setClients(clients.filter(client => client.id !==id));
        }catch(err) {
            alert('Erro ao deletar cliente, temte novamente.');
        }
    }

        function handleLogout() {
            localStorage.clear();
            navigate('/');
        }
     return (
         <div className="profile-container">
             <header>
                <img src={logoImg} alt="logo" />
                <span>Bem vindo(a), {consultorName}</span>

                <Link className="button" to="/newclient">Cadastrar novo cliente</Link>
                <button onClick={handleLogout} type="button">
                    <FiPower size={18} color="#FC9E4F"/>
                </button>
             </header>

             <h1>Clientes cadastrados:</h1>

                <ul>
                    {clients.map(client =>(
                        <li key={client.id}>
                        <strong>Nome:</strong>
                        <p>{client.name}</p>

                        <strong>CPF:</strong>
                        <p>{client.cpf}</p>

                        <strong>Telefone:</strong>
                        <p>{client.telefone}</p>

                        <strong>Nº beneficio:</strong>
                        <p>{client.beneficio}</p>

                        <strong>Descrição:</strong>
                        <p>{client.descript}</p>

                                 <button onClick={() => handleDeleteClient(client.id)} type="button">
                                    <FiTrash2 size={20} color="#a8a8b3"/>
                                 </button>
                    </li>
                    ))}
                </ul>
         </div>
     );
 }