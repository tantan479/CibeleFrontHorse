import Col from 'react-bootstrap/Col'
import Form from 'react-bootstrap/Form'
import Row from 'react-bootstrap/Row'
import 'bootstrap/dist/css/bootstrap.min.css'
import Container from 'react-bootstrap/esm/Container'
import Button from 'react-bootstrap/Button'
import './Cadastro.css'
import React, { Component } from "react"
import axios from "axios"
import { useState } from "react";

class Cadastro extends Component {
    componentDidMount() {
        document.title = "Dashboard"
    }

    constructor() {
        super();
        this.state = {
        };
        this.onInputchange = this.onInputchange.bind(this);
        this.cadastrar = this.cadastrar.bind(this);
    }

    onInputchange(event) {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    async cadastrar() {
        
        let url = "http://localhost:8000/usuarios"
        let form = this.state;
        console.log(form);
        try {
            await axios.post(url, form)
            alert("Usuário cadastrado")
        } catch (error) {
            console.log(error)
        }
    }

    render() {
        return (
            <>
                <Form className='teste'>
                    <Form.Label class="label" column sm="2">
                        Nome
                    </Form.Label>
                    <Form.Group as={Row} className="mb-3" controlId="formPlaintextName">
                        <Col>
                            <Form.Control name="nome" type="text" placeholder="Digite seu Nome" value={this.state.name} onChange={this.onInputchange} />
                        </Col>
                    </Form.Group>

                    <Form.Label column sm="6">
                        Usuário
                    </Form.Label>
                    <Form.Group as={Row} className="mb-3" controlId="formPlaintextUser">
                        <Col>
                            <Form.Control name="usuario" type="text" placeholder="Digite seu Usuário" value={this.state.user} onChange={this.onInputchange} />
                        </Col>
                    </Form.Group>

                    <Form.Label column sm="6">
                        Crie uma senha
                    </Form.Label>
                    <Form.Group as={Row} className="mb-3" controlId="formPlaintextUser">
                        <Col>
                            <Form.Control name="senha" type="password" placeholder="Senha" value={this.state.password} onChange={this.onInputchange} />
                        </Col>
                    </Form.Group>

                    <Form.Label column sm="6">
                        Confirmar Senha
                    </Form.Label>
                    <Form.Group as={Row} className="mb-3" controlId="formPlaintextUser">
                        <Col>
                            <Form.Control name="senha2" type="password" placeholder="Senha" />
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
                        <Button className="botao" variant="primary" size="lg" active onClick={this.cadastrar}>
                            Cadastrar
                        </Button>
                    </>
                </Form>

            </>
        );
    }
}

export default Cadastro