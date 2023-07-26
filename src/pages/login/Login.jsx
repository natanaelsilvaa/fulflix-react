import { useState  } from 'react';
import { Container, Form } from './LoginStyle';
import { Input }  from './../../componentes/input/Input';
import { Button } from '../../componentes/button/Button';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { auth } from '../../services/firebase';




export function Login() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const [signInWithEmailAndPassword, user, loading, error] = useSignInWithEmailAndPassword(auth);


    function handleSignIn(e) {
      e.preventDefault();
      signInWithEmailAndPassword(email, password);
      console.log(error)
    }

    if(loading) {
        return <p>Carregando.....</p>
    }


       


    return (
        <Container>
            <Form>
                <h1>FULLFLIX</h1>
                <h2>Entrar</h2>




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
                     text='Entrar!'
                     onClick={handleSignIn}
                  
                />
            
                    <p>Não possui conta?</p>
                    <Link to='/Register'>Cadastre-se agora!</Link>
          
            </Form>
        </Container>
        
    );



};

export default Login;