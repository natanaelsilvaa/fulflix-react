import { useState  } from 'react';
import { Container, Form } from './RegisterStyle';
import { Input } from './../../componentes/input/Input';
import { Button } from '../../componentes/button/Button';
import { Link, useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { auth } from '../../services/firebase';

export function Register() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate()
    const [ createUserWithEmailAndPassword, user, loading, error] = useCreateUserWithEmailAndPassword(auth)

     function handleSignInOut(e) {
        e.preventDefault();
        createUserWithEmailAndPassword( email, password).then((response) => {
            alert('cadastrado')
            navigate('/Home')
        }).catch((error) => {
            console.log(error)
        })
    }

    if(loading) {
        return <p>Carregando.....</p>
    }

    if(user) {
        return console.log(user)
    }

    if(error) {
        return console.log(error)
    }


    return (
        <Container>
            <Form>
                {/* <h1>FULLFLIX</h1> */}
                <h2>Faça seu Cadastro</h2>
             
                
                
            <div>
                <Input
                    name='email'
                    placeholder='Email'
                    type='email'
                    onChange={(e) => setEmail(e.target.value)}
                />
            </div>  
            <div>
                <Input
                    name='password'
                    placeholder='Senha'
                    type='password'
                    onChange={(e) => setPassword(e.target.value)}
                />
            </div>  
                <Button 
                    type='submit'
                    text='Cadastrar'
                    onClick={handleSignInOut}
                    
                /> 
                   <Link to='/'>Já possui uma conta? Faça seu Login</Link>
            </Form>
        </Container>
    );



};

export default Register;