import 'bootstrap/dist/css/bootstrap.min.css'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import UpdateUser from './UpdateUser';
import React from "react"

function Sobrepor(props) {
    return (
        <Modal id="modal"
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
            width="auto"
        >
            <Modal.Header closeButton id="btn">
                <Modal.Title id="contained-modal-title-vcenter">
                    Edição de Usuários
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <UpdateUser />
            </Modal.Body>

        </Modal>
    );
}

function UserUp(usuario) {

    this.usuario = usuario
    const [modalShow, setModalShow] = React.useState(true);

    return (

        <>
            <Button className='botao' variant="primary" onClick={() => setModalShow(true)}>
                Cadastrar Usuários
            </Button>

            <Sobrepor
                show={modalShow}
                onHide={() => setModalShow(false)}
            />
        </>
    );
}


export default UserUp