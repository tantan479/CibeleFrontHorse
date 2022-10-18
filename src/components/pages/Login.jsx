import Header from '../layout/Header'
import Footer from '../layout/Footer'
import Col from 'react-bootstrap/Col'
import Form from 'react-bootstrap/Form'
import Row from 'react-bootstrap/Row'
import 'bootstrap/dist/css/bootstrap.min.css'
import Container from 'react-bootstrap/esm/Container'
import Button from 'react-bootstrap/Button'
import './login.css'
import React, { Component } from "react"
import * as data from '../../../db.json'
import Menu from '../layout/Menu'
import ReactDOM from 'react-dom/client'

const obj1 = data.usuarios

class Login extends Component {

    componentDidMount() {
        document.title = "Login"
    }

    constructor() {
        super();
        this.state = {
        };
        this.onInputchange = this.onInputchange.bind(this);
        this.verificar_senha = this.verificar_senha.bind(this);
    }

    onInputchange(event) {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    verificar_senha() {
        let p1 = 0;
        let a = 0;

        for (let i = 0; i < obj1.length; i++) {
            if (this.state['usuario'].toLowerCase() == obj1[i]['usuario'].toLowerCase()) {
                p1 = i;
                a = 1;
            }
        }

        if (a == 0) {
            alert("Usuario Errado")
        }

        if (a == 1) {
            if (this.state['senha'] == obj1[p1]['senha'] & this.state['categoria'] == obj1[p1]['categoria']) {
                ReactDOM.createRoot(document.getElementById('root')).render(
                    <React.StrictMode>
                         <Menu />       {/*          teoria: e se a definição da rota estiver aqui... autenticação        */}
                    </React.StrictMode>
                )
            } else {
                alert("Senha ou tipo de usuario incorretos")

            }
        }
    }

    render() {
        return (
            
            <div className="App" style={{backgroundImage: `url(/src/assets/logo.jpeg)`}}>

                <>
                    <Header />
                    <br />
                    <br />
                        <Container>
                            <br />
                            <h2 class="titulo">Fazer Login</h2>
                            <Form>
                                <Form.Label class="label" column sm="2">
                                    Usuário
                                </Form.Label>
                                <Form.Group as={Row} className="mb-3" controlId="formPlaintextUser">
                                    <Col>
                                        <Form.Control name="usuario" type="text" placeholder="Digite seu usuário" value={this.state.user} onChange={this.onInputchange} />
                                    </Col>
                                </Form.Group>

                                <Form.Label column sm="2">
                                    Senha
                                </Form.Label>
                                <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
                                    <Col>
                                        <Form.Control name="senha" type="password" placeholder="Senha" value={this.state.password} onChange={this.onInputchange} />
                                    </Col>
                                </Form.Group>
                                <div className="mb-3 op">
                                    <Form.Check
                                        label="Professor"
                                        value="0"
                                        name="categoria"
                                        type="radio"
                                        id="prof"
                                        onChange={this.onInputchange} />
                                    <Form.Check
                                        label="Aluno"
                                        value="1"
                                        name="categoria"
                                        type="radio"
                                        id="aluno"
                                        onChange={this.onInputchange} />
                                </div>
                                <>
                                    <Button className="botao" variant="primary" size="lg" active onClick={this.verificar_senha}>
                                        Entrar
                                    </Button>
                                </>

                            </Form>
                        </Container>
                    <Footer />
                </>
            </div>
        );
    }
}

export default Login
