import { socialsData } from '../../data/socialsData';
import './socials.css';

export function Socials() {
    return (
        <div className="socials">
            {socialsData.map(link => <a key={link.icon} className={'fa fa-' + link.icon} href={link.href} target="_blank"></a>)}
        </div>
    );
}
