import { useState } from 'react';
import { Container, Form, LinkCuston } from './RegisterStyle';
import { Input } from './../../componentes/input/Input';
import { Button } from '../../componentes/button/Button';
import { Link, useNavigate } from 'react-router-dom';
import { initializeApp } from 'firebase/app';
import { firebaseConfig } from '../../services/firebase';
import { createUserWithEmailAndPassword, getAuth } from 'firebase/auth';
import { Footer } from '../../componentes/footer/Footer';




export function Register() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate()

    const app = initializeApp(firebaseConfig);

    const auth = getAuth(app);

    const register = async () => {
        createUserWithEmailAndPassword(auth, email, password).then((response) => {
            window.alert('Registro feito com sucesso!')
            navigate('/')
        }).catch((error) => {
            console.log(error)
        })

    }




    return (

        <Container>
            <Form>
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
                    />
                </label>
                <label>
                    <span>Email</span>
                    <Input
                        type='email'
                        name='email'
                        required
                        placeholder='Email'
                        onChange={(e) => setEmail(e)}
                    />
                </label>

                <label>
                    <span>Senha</span>
                    <Input
                        type='password'
                        name='password'
                        required
                        placeholder='Senha'
                        onChange={(e) => setPassword(e)}
                    />
                </label>
                <label>
                    <span>Confirme sua senha</span>
                    <Input
                        type='password'
                        name='password'
                        placeholder='Confirme sua senha'
                        required
                        onChange={(e) => setPassword(e)}
                    />
                </label>
                <Button
                    type='submit'
                    text='Cadastrar'
                    onClick={register}

                />
                
                <p>Já possui conta?</p>
                <Link to='/login'>Faça seu Login</Link>

            </Form>
        </Container>

    );



};

export default Register;