import { useState, useContext } from "react";

import FormGrouping from "../../components/FormGrouping";
import Input from "../../components/Input";
import Button from "../../components/Button";
import { AuthContext } from "../../context/auth";
import { Alert } from "../../utils/Alert";
import isEmailValid from "../../utils/isEmailValid";

import logo from "../../assets/images/logo-bio.png"

import { Container, Form, Logo } from "./styles";

export default function Login() {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  const { login } = useContext(AuthContext);

  const handleLogin = (e) => {
    e.preventDefault();
    if (!email && !senha) {
      Alert('Atenção', 'O e-mail e senha são obrigatórios.', 'warning');
    } else if (!senha) {
      Alert('Atenção', 'A senha é obrigatória.', 'warning');
    } else if (!email) {
      Alert('Atenção', 'O e-mail é obrigatório.', 'warning');
    } else {
      if(isEmailValid(email)){
        login(email, senha);
      }else{
        Alert('Atenção', 'O e-mail informado é inválido.', 'warning');
      }
    }
  }

  return (
    <Container>
      <Form onSubmit={handleLogin}>
        <Logo>
          <img src={logo} alt="Logo principal semana-bio" />
        </Logo>

        <FormGrouping>
          <Input
            autoFocus
            placeholder="E-mail"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </FormGrouping>

        <FormGrouping>
          <Input
            placeholder="Senha"
            type="password"
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
          />
        </FormGrouping>

        <FormGrouping>
          <Button
            type="submit"
            onClick={handleLogin}
          >
            Acessar
          </Button>
        </FormGrouping>
      </Form>
    </Container>
  )
}
