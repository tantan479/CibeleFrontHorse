import Col from 'react-bootstrap/Col'
import Form from 'react-bootstrap/Form'
import Row from 'react-bootstrap/Row'
import 'bootstrap/dist/css/bootstrap.min.css'
import Container from 'react-bootstrap/esm/Container'
import Button from 'react-bootstrap/Button'
import './Cadastro.module.css'
import React, { Component } from "react"
import * as data from '../../data/db.json'

class Cadastro extends Component {
    componentDidMount() {
        document.title = "Dashboard"
    }

    constructor() {
        super();
        this.state = {
        };
        this.onInputchange = this.onInputchange.bind(this);
    }

    onInputchange(event) {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    render() {
        return (
            <>
                <Container className="teste">
                    <br />
                    <h2 class="titulo">Cadastrar</h2>
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
                                name="professor"
                                type="radio"
                                id="prof"
                                onChange={this.onInputchange} />
                            <Form.Check
                                label="Aluno"
                                value="1"
                                name="professor"
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
            </>
        );
    }
}

export default Cadastro