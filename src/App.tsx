import { Menu } from "./componentes/Menu";
import { Container } from "./componentes/Container";
import { Logo } from "./componentes/Logo";
import "./styles/global.css";
import "./styles/tema.css";
import { Clock } from "./componentes/Clock";
import { Input } from "./componentes/Input";
import { Ciclos } from "./componentes/Ciclos";
import { BotaoDefault } from "./componentes/BotaoDefault";
import { PlayCircle } from "lucide-react";
import { Footer } from "./componentes/Footer";

export function App() {
    return (
        <>
            <Container>
                <Logo />
            </Container>

            <Container>
                <Menu />
            </Container>

            <Container>
                <Clock />
            </Container>

            <Container>
                <form className="form" action="">
                    <div className="formRow">
                        <Input id="meuInput" labelText="task" type="text" placeholder="Digite Algo" />
                    </div>

                    <div className="formRow">
                        <p>Lorem ipsum dolor sit amet.</p>
                    </div>

                    <div className="formRow">
                        <Ciclos />
                    </div>

                    <div className="formRow">
                        <BotaoDefault icon={<PlayCircle />} />
                    </div>
                </form>
            </Container>

            <Container>
                <Footer />
            </Container>
        </>
    );
}
