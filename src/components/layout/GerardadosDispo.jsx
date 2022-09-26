import React, { Component } from "react"
import axios from "axios";
import './Gerardadost.module.css'

var data

class GerardadosDispo extends Component {
    state = {
        dispositivos: [],
    }

    async componentDidMount() {
        const resp = await axios.get('http://localhost:8000/dispositivos')
        this.setState({ dispositivos: resp.data })
    }

    async remove(id){
        console.log(this.usuario)
        var url = "http://localhost:8000/dispositivos/"
        url += id
        console.log(url)
        await axios.delete(url)
        this.forceUpdate(GerardadosDispo)
    }

    // async update(id)
    // {
    //     this.id = id
    //     var url = "http://localhost:8000/dispositivos/"
    //     url += id
    // }

    render() {

        const { dispositivos } = this.state

        return (
        <>
            {dispositivos.map(dispositivos => (
                <tr key={dispositivos.id}>
                    <td>
                        {dispositivos.id}
                    </td>
                    <td>
                        {dispositivos.nome}
                    </td>
                    <td>
                        {dispositivos.hash}
                    </td>
                    <td>
                        {dispositivos.descricao}
                    </td>
                    <td><a role="button" style={{backgroundColor: "#ea8f01", color: "white"}} onClick={() => this.update(dispositivos.id)}>Editar</a></td>
                    <td><a role="button" style={{backgroundColor: "red", color: "white"}} onClick={() => this.remove(dispositivos.id)}>Excluir</a></td>
                </tr>
            ))}
        </>
        );
    }
}

export default GerardadosDispo

