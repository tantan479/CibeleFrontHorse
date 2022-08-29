import Header from '../layout/Header'
import Footer from '../layout/Footer'
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/esm/Container';
import Button from 'react-bootstrap/Button';
import './login.css'

function Login() {
    return (
        <>
            <Header />
            <br />
            <br />
            <Container class="container">
                <br />
                <h2 class="titulo">Fazer Login</h2>
                <Form>
                    <Form.Label class="label" column sm="2">
                        Usuário
                    </Form.Label>
                    <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
                        <Col>
                            <Form.Control type="text" placeholder="Digite seu usuário" />
                        </Col>
                    </Form.Group>

                    <Form.Label column sm="2">
                        Senha
                    </Form.Label>
                    <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
                        <Col>
                            <Form.Control type="password" placeholder="Senha" />
                        </Col>
                    </Form.Group>
                    {['radio'].map((type) => (
                        <div key={`reverse-${type}`} className="mb-3 op">
                            <Form.Check
                                label="Professor"
                                name="professor"
                                type={type}
                                id={`reverse-${type}-prof`} />
                            <Form.Check
                                label="Aluno"
                                name="professor"
                                type={type}
                                id={`reverse-${type}-aluno`} />
                        </div>
                    ))}
                    <>
                        <Button className="botao" variant="primary" size="lg" active>
                            Entrar
                        </Button>
                    </>

                </Form>
            </Container>
            <Footer />
        </>
    );
}

export default Login