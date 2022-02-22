import React, { useState } from 'react';
import { /*Link,*/ useNavigate } from 'react-router-dom';
import { FiLogIn } from 'react-icons/fi';

import api from '../../services/api';

import './styles.css';

import logoImg from '../../assets/logo-wbg.png';
import consultorImg from '../../assets/girlsiting.jpeg';

export default function Logon(){
    const [id, setId] = useState('');
    const navigate = useNavigate();

    async function handleLogin(e) {
        e.preventDefault();

        try{
            const response = await api.post('sessions', { id });

            localStorage.setItem('consultorId', id);
            localStorage.setItem('consultorName', response.data.name);

            navigate('/profile');
        }catch(err) {
            alert('Falha no login');
        }
    }

    function handleValidationRegister() {
        
        var validate=prompt("Digite o codigo de Validação:");
        
        if (validate=='#Fortes1234') {
          navigate('/register');
          } else {
              alert("Contate o administrador de T.I.")
                navigate('/');
          }
        }
    return(
        <div className="logon-container">
            <section className="form">
            <img src={logoImg} alt='logo' />

            <form onSubmit={handleLogin}>
                <h1>Faça seu Logon</h1>

                <input 
                placeholder="Sua ID"
                value={id}
                onChange={e => setId(e.target.value)} 
                /> 
                <button className="button" type="submit">Entrar</button>
                
                <a onClick={handleValidationRegister} className="back-link">
                    <FiLogIn size={16} color="#FC9E4F"/>
                    Não tenho cadastro
                </a> 


            </form>
            </section>

            <img src={consultorImg} alt='Consultors ilustration' />
        </div>
    );
}