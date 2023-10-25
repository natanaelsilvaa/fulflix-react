import { useState  } from 'react';
import { Container, Form } from './LoginStyle';
import { Input }  from './../../componentes/input/Input';
import { Button } from '../../componentes/button/Button';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';




export function Login() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const  navigate = useNavigate()


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
                    value={email}
                    onChange={(e) => setEmail(e)}
                />
            </div>

            <div> 
                <Input
                    type='password'
                    name='password'
                    placeholder='Senha' 
                    value={password}
                    onChange={(e) => setPassword(e)}
                />
            </div>  
                <Button 
                    type='submit'
                     text='Entrar'
                     onClick={() => navigate('/Home')}
                  
                />
                    <p>Não possui conta?</p>
                    <Link to='/Register'>Cadastre-se agora!</Link>
          
            </Form>
        </Container>
        
    );



};

export default Login;