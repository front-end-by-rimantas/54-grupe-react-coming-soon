import { useState } from 'react';
import logo from '../../assets/logo.png';
import { Clock } from '../clock/Clock';
import { Mouse } from '../mouse/Mouse';

export function Hero() {
    const [count, setCount] = useState(100000);

    function handleCountClick() {
        if (count >= 10) {
            setCount(5);
        } else {
            setCount(n => n + 1);
        }
    }

    function handleCountReset() {
        setCount(0);
    }

    return (
        <section className="container bg-blue hero">
            <div className="row-short">
                <img className="logo" src={logo} alt="Logo" />
                <h1 className="center">Coming soon</h1>
                <button onClick={handleCountClick} className='big-btn'>Paspaudimu kiekis: {count}</button>
                <button onClick={handleCountReset}>Reset to zero</button>
                <p className="center">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Assumenda cum ut placeat, possimus maiores modi enim cumque. Voluptate expedita, molestiae cumque, veniam aliquid at ratione error eum eos eaque adipisci.</p>
                <Clock />
                <Mouse />
            </div>
        </section>
    );
}