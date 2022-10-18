import React, { Component } from "react"
import 'bootstrap/dist/css/bootstrap.min.css'
import { Table } from "react-bootstrap";
import ReactDOM from 'react-dom/client'
import Cadastro from './Cadastro'
import './Relatorio.css'
import GerarDadost from "../layout/Gerardadost";
import CadSobre from "./CadSobre"

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
                <CadSobre />
                <hr style={{ width: "45vw" }}></hr>
                <Table responsive variant="dark" className="noWrap">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Nome</th>
                            <th>Usuário</th>
                            <th>Categoria</th>
                            <th>Editar</th>
                            <th>Excluir</th>
                        </tr>
                    </thead>
                    <tbody id="corpo">
                        <>
                            <GerarDadost />
                        </>
                    </tbody>
                </Table>
            </>
        );
    }
}

export default Relatorio