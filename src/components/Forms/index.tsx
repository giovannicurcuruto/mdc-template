import 'tailwindcss/tailwind.css';
import { Button, ButtonWrapper, Container, Form, FormWrapper, GridSuperior, Input, Label, Textarea } from './style';


export default function Formulario() {
    return (
        <>
            <Container>
                <FormWrapper>
                    <Form action="#" method="POST">
                        {/* Primeiro Nome */}
                        
                        <GridSuperior>
                            <Label htmlFor="firstName">Primeiro Nome </Label>
                            <Input type="text" id="firstName" name="firstName" required />
                        </GridSuperior>

                        {/* Último Nome */}
                        <GridSuperior>
                            <Label htmlFor="lastName">Último Nome </Label>
                            <Input type="text" id="lastName" name="lastName" required />
                        </GridSuperior>

                        {/* E-mail */}
                        <GridSuperior>
                            <Label htmlFor="email">E-mail </Label>
                            <Input type="email" id="email" name="email" required />
                        </GridSuperior>

                        {/* Mensagem */}
                        <GridSuperior>
                            <Label htmlFor="message">Mensagem </Label>
                            <Textarea id="message" name="message" rows={4} required />
                        </GridSuperior>

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