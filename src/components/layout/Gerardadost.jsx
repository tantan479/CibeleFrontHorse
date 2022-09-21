import React, { Component } from "react"
import axios from "axios";
import './Gerardadost.module.css'

var data

class GerarDadost extends Component {
    state = {
        usuarios: [],
    }

    async componentDidMount() {
        const resp = await axios.get('http://localhost:8000/usuarios')
        this.setState({ usuarios: resp.data })
    }

    async remove(id){
        this.id = id
        var url = "http://localhost:8000/usuarios/"
        url += id
        console.log(url)
        await axios.delete(url)
    }

    render() {

        const { usuarios } = this.state

        return (
        <>
            {usuarios.map(usuario => (
                <tr key={usuario.id}>
                    <td>
                        {usuario.id}
                    </td>
                    <td>
                        {usuario.nome}
                    </td>
                    <td>
                        {usuario.usuario}
                    </td>
                    {usuario.categoria == 0 && <td>Professor</td>}
                    {usuario.categoria == 1 && <td>Aluno</td>}
                    <td><a role="button" style={{backgroundColor: "#ea8f01", color: "white"}}>Editar</a></td>
                    <td><a role="button" style={{backgroundColor: "red", color: "white"}} onClick={() => this.remove(usuario.id)}>Excluir</a></td>
                </tr>
            ))}
        </>
        );
    }
}

export default GerarDadost

