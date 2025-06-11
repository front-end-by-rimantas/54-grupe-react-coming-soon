import logoWhite from '../../assets/logo-white.png';
import { Socials } from '../socials/Socials';

export function Footer() {
    return (
        <footer className="container footer bg-blue">
            <div className="row">
                <Socials />
                <a href="#" className="back-to-top fa fa-angle-up"></a>
            </div>
            <div className="row-short">
                <img className="logo" src={logoWhite} alt="Matrox logo" />
                <div className="trio">
                    <p>Copyright &copy; 2025 <a href="#">Matrox</a></p>
                    <p>All rights reserved</p>
                    <p>Designed by <a href="#">TrendyTheme</a></p>
                </div>
                <p className="center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus neque, accusbus officiis illo similique odit voluptatibus <a href="#">200+</a> laudantium placeat dignissimos saepe nulla corporis, voluptate facere <a href="#">Matrox</a> qui quasi!</p>
            </div>
        </footer>
    );
}