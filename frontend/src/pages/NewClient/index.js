import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';
import api from '../../services/api'; 

import logoImg from '../../assets/logo-wbg.png';

import './styles.css';
 
export default function NewClient(){
    const [name, setName] = useState('');
    const [cpf, setCpf] = useState('');
    const [telefone, setTelefone] = useState('');
    const [beneficio, setBeneficio] = useState('');
    const [descript, setDescript] = useState('');

    const navigate = useNavigate();

    const consultorId = localStorage.getItem('consultorId');

    async function handleNewClient(e) {
        e.preventDefault();

        const data = {
            name,
            cpf,
            telefone,
            beneficio,
            descript,
        };
        try {
            await api.post('clients', data, {
                headers: {
                    Authorization: consultorId,
                }
            })

            navigate('/profile');
        } catch(err) {
            alert('Erro no cadastro, tente novamente.');
        }
    }

    return (
        <div className="new-client-container">
        <div className="content">
            <section>
                <img src={logoImg} alt="logo" />
    
                <h1>Cadastrar novo cliente</h1>
                <p>Parabéns! Você captou um cliente. Agora é hora de registra-lo e não perde-lo de vista.</p>
    
                <Link className="back-link" to="/profile">
                <FiArrowLeft size={16} color="#FC9E4F"/>
                Voltar para home
            </Link>
            </section>
            <form onSubmit={handleNewClient}>
                <input 
                placeholder="Nome do cliente" 
                value={name}
                onChange={e => setName(e.target.value)}
                />
                <input 
                placeholder="CPF" 
                value={cpf}
                onChange={e => setCpf(e.target.value)}
                />
                <input 
                placeholder="Telefone" 
                value={telefone}
                onChange={e => setTelefone(e.target.value)}
                />
                <input 
                placeholder="Nº de Beneficio" 
                value={beneficio}
                onChange={e => setBeneficio(e.target.value)}
                />
                <textarea 
                placeholder="Descrição"
                value={descript}
                onChange={e => setDescript(e.target.value)}
                />
                
    
                <button className="button" type="submit">Cadastrar</button>
            </form>
        </div>
    </div>
    );
   
}