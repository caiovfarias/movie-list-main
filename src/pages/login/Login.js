import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Button from '../../components/Button';
import Input from '../../components/Input';
import { handleLogin } from '../../redux/auth'; // Corrija a importação para handleLogin
import { Container, SubContainer } from './StyledLogin';

function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { logged, loginError } = useSelector(state => state.auth)

  useEffect(() => {
    if (logged) {
      navigate('/home');
    }
  }, [logged, navigate])

  useEffect(() => {
    if (loginError === 'Erro ao fazer login') {
      alert('Erro ao fazer login');
    }
  }, [loginError]);

  const HandleAuth = () => {
    // Verifica se tanto o email quanto a senha foram preenchidos antes de fazer o login
    if (email.trim() !== "" && password.trim() !== "") {
      console.log('Dados do login:', { email, password });
      dispatch(handleLogin({ email, password }));
    } else {
      alert("Por favor, preencha o e-mail e a senha");
    }
  };
  
  
  

  const GetEmail = (e) => {
    setEmail(e.target.value)
  }

  const GetPassword = (e) => {
    setPassword(e.target.value);
    console.log('Senha definida:', e.target.value);
  }

  return (
    <Container>
      <SubContainer>
        <h1>Bem-vindo(a) ao <span className='logo'>Movie-List</span></h1>
        <Input
          onChange={GetEmail}
          type="email"
          className="inputEmail"
          name="inputEmail"
          required placeholder="E-mail"
        />
        <Input
          onChange={GetPassword}
          type="password"
          className="inputSenha"
          name="inputSenha"
          required placeholder="Senha"
        />
        <Button onClick={HandleAuth}>
          Entrar
        </Button>
      </SubContainer>
    </Container>
  );
}

export default Login;
