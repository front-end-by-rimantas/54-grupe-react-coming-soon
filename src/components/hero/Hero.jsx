import logo from '../../assets/logo.png';
import { Clock } from '../clock/Clock';
import { Mouse } from '../mouse/Mouse';

export function Hero() {
    return (
        <section className="container bg-blue hero">
            <div className="row-short">
                <img className="logo" src={logo} alt="Logo" />
                <h1 className="center">Coming soon</h1>
                <p className="center">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Assumenda cum ut placeat, possimus maiores modi enim cumque. Voluptate expedita, molestiae cumque, veniam aliquid at ratione error eum eos eaque adipisci.</p>
                <Clock />
                <Mouse />
            </div>
        </section>
    );
}