import React, { useState } from "react";
import { Link, useNavigate } from 'react-router-dom';
import {FiArrowLeft} from 'react-icons/fi'

import api from '../../services/api';
import './styles.css';

import logoImg from '../../assets/logo-wbg.png';

export default function Register() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');

    const navigate = useNavigate();

    async function handleRegister(e) {
        e.preventDefault();

        const data = ({
            name,
            email,
        });
        
        try {
            const response = await api.post('consultors', data);

            alert(`Seu ID de acesso: ${response.data.id}`);

            navigate('/');
        } catch(err) {
            alert("Erro no cadastro, tente novamente.");
        }   

       

    }

   
    return (
        <div className="register-container">
            <div className="content">
                <section>
                    <img src={logoImg} alt="logo" />

                    <h1>Cadastro</h1>
                    <p>Faça seu cadastro e desfrute do cadernão da Evoluttion!</p>

                    <Link className="back-link" to="/">
                    <FiArrowLeft size={16} color="#FC9E4F"/>
                    Voltar para inicio
                </Link>
                </section>
                <form onSubmit={handleRegister}>
                    <input 
                    placeholder="Insira seu nome"
                    value={name}
                    onChange={e => setName(e.target.value)} 
                    />
                    <input 
                    type="email" 
                    placeholder="E-mail" 
                    value={email}
                    onChange={e => setEmail(e.target.value)} 
                    />

                    
                    <button className="button" type="submit">Cadastrar</button>
                </form>
            </div>
        </div>
    );
}

