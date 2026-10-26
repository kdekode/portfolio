import sytles from './Header.module.scss';

export default function Header(){
    return(
        <header className={sytles.header}>
            <div className={sytles.logo_main}>
                <span className={sytles.logo}>@Steev.Anderson (Andy)</span>
            </div>
            <div className={sytles.nav_main}>
                <ul className={sytles.nav_main__ul}>
                    <li><a href="#">Sobre mi</a></li>
                    <li>Portfolio
                        <ul className={sytles.nav_main__submenu}>
                            <li><a href="#">Premios Alfonso X</a></li>
                            <li><a href="#">Indexeo Marketing</a></li>
                            <li><a href="#">Cuorepilates.com</a></li>
                            <li><a href="#">Ventabanos.com</a></li>
                            <li><a href="#">60b0.com</a></li>
                        </ul>
                    </li>

                    
                </ul>
            </div>
        </header>
    );
}