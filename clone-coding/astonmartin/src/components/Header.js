import logo from '../images/logo.svg';
import './Header.css';
function Header(){
    return(
        <>
            <header className='header'>
                <div className='con1'>
                    <p>브랜드 소개</p>
                    <p>모델</p>
                    <p>서비스</p>
                </div>
                <img src={logo} width='150px' height='70px'></img>
            </header>
        </>
    )
}

export default Header;