import { useState } from 'react';
import { Container, Form } from './RegisterStyle';
import { Input } from './../../componentes/input/Input';
import { Button } from '../../componentes/button/Button';
import { Link } from 'react-router-dom';
;




export function Register() {
    const [displayName, setDisplayName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');

    
    const handleSubmit = (e) => {
        e.preventDefault()

        setError('')

        const user = {
            displayName,
            email,
            password
        }

        if(confirmPassword !== password) {
            setError('As senhas precisam ser iguais!')
        }
        console.log(user)
    }



    return (

        <Container>
            <Form onSubmit={handleSubmit}>
            <h1>Faça seu Cadastro</h1>
            <p>Crie seu Usúario e divirta-se vendo seus Filmes favoritos</p>
                {/* <h1>FULLFLIX</h1> */}

                <label>
                    <span>Nome</span>
                    <Input
                        type='name'
                        name='name'
                        required
                        placeholder='Digite seu Nome'
                        value={displayName}
                        onChange={(e) => setDisplayName(e.target.value)}
                    />
                </label>
                <label>
                    <span>Email</span>
                    <Input
                        type='email'
                        name='email'
                        required
                        placeholder='Email'
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </label>

                <label>
                    <span>Senha</span>
                    <Input
                        type='password'
                        name='password'
                        required
                        placeholder='Senha'
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </label>
                <label>
                    <span>Confirme sua senha</span>
                    <Input
                        type='password'
                        name='password'
                        placeholder='Confirme sua senha'
                        required
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                    />
                </label>
                <Button
                    type='submit'
                    text='Cadastrar'

                />
                
                {error && <span className='error'>{error}</span>}

                <p>Já possui conta?</p>
                <Link to='/login'>Faça seu Login</Link>

            </Form>
        </Container>

    );



};

export default Register;