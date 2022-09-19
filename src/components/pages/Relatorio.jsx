import React, { Component } from "react"
import 'bootstrap/dist/css/bootstrap.min.css'
import { Table } from "react-bootstrap";
import ReactDOM from 'react-dom/client'
import parse from 'html-react-parser';
import Cadastro from './Cadastro'
import './Relatorio.css'
import axios from "axios";
import Button from 'react-bootstrap/Button'
import GerarDadost from "../layout/Gerardadost";


class Relatorio extends Component {


    componentDidMount() {
        document.title = "Relatórios"
    }
    
    cadastro() {
        ReactDOM.createRoot(document.getElementById('mainPage')).render(
            <React.StrictMode>
                <Cadastro />
            </React.StrictMode>
        )
    }

    render() {

        return ( 
                <>
                    <h1 onClick={this.rendertable}>Relatório de Usuários</h1>
                    <Button className="botao" variant="primary" size="md" active onClick={this.cadastro}>
                        Cadastrar Usuário
                    </Button>
                    <hr style={{ width: "45vw" }}></hr>
                    <Table striped bordered hover variant="dark">
                        <thead>
                            <tr>
                                <th>Id</th>
                                <th>Nome</th>
                                <th>Usuário</th>
                                <th>Categoria</th>
                                <th>Editar</th>
                                <th>Excluir</th>
                            </tr>
                        </thead>
                        <tbody id="corpo">
                            <><GerarDadost/></>
                        </tbody>

                    </Table>
                </>
        );
    }
}

export default Relatorio