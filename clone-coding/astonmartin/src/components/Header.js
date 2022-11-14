import logo from '../images/logo.svg';
import './Header.css';
import background1 from '../images/background1.jpeg';
import { useEffect, useRef } from 'react';


function Header(){
    const headerRef = useRef();
    
    useEffect(() => {
        window.addEventListener('scroll', e=>{
            if(window.scrollY >= 1){
                headerRef.current.classList.add('opacity');
            }
            else{
                headerRef.current.classList.remove('opacity');
            }
        });
    }, []);
    return(
        <>
            <img src = {background1} className="background"/>
            <header className='header' ref={headerRef}>
                <div className='cont'>
                    <a href="#">브랜드 소개</a>
                    <a href="#">모델</a> 
                    <a href="#">서비스</a>
                </div>
                <a href="#"><img src={logo} width='150px' height='70px'></img></a>
                <div className='cont'>
                    <a href="#">Q 바이 애스턴마틴 </a>
                    <a href="#">뉴스</a>
                    <a href="#">문의</a>
                </div>
            </header>
        </>
    )
}

export default Header;