import 'tailwindcss/tailwind.css';
import { Button, ButtonWrapper, Container, Form, FormWrapper, Input, Label, Textarea } from './style';


export default function Formulario() {
    return (
        <>
            <Container>

                <FormWrapper>
                    <Form action="#" method="POST">
                        {/* Primeiro Nome */}
                        <div>
                            <Label htmlFor="firstName">Primeiro Nome</Label>
                            <Input type="text" id="firstName" name="firstName" required />
                        </div>

                        {/* Último Nome */}
                        <div>
                            <Label htmlFor="lastName">Último Nome</Label>
                            <Input type="text" id="lastName" name="lastName" required />
                        </div>

                        {/* E-mail */}
                        <div>
                            <Label htmlFor="email">E-mail</Label>
                            <Input type="email" id="email" name="email" required />
                        </div>

                        {/* Mensagem */}
                        <div>
                            <Label htmlFor="message">Mensagem</Label>
                            <Textarea id="message" name="message" rows={4} required />
                        </div>

                        {/* Botão Enviar */}
                        <ButtonWrapper>
                            <Button type="submit">Enviar</Button>
                        </ButtonWrapper>
                    </Form>
                </FormWrapper>
            </Container>
        </>
    )
}