import logo from '../images/logo.svg';
import './Header.css';
import background1 from '../images/01_DBX707.jpeg';
import background2 from '../images/02_DB11.jpeg';
import background3 from '../images/03_DBS.jpeg';
import background4 from '../images/04_DBX.jpeg';
import background5 from '../images/05_Valkyrie.jpeg';
import background6 from '../images/06_Vantage.jpeg'
import { useEffect, useRef } from 'react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import {Swiper, SwiperSlide} from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';


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
            <div className='slider'>
                <img src = {background1} id="background"/>
                <img src = {background2} id="background"/>
                <img src = {background3} id="background"/>
                <img src = {background4} id="background"/>
                <img src = {background5} id="background"/>
                <img src = {background6} id="background"/>
            </div>
            <header className='header' ref={headerRef}>
                <div className='cont'>
                    <a href="#" className='hdel'>브랜드 소개</a>
                    <a href="#" className='hdel'>모델</a> 
                    <a href="#" className='hdel'>서비스</a>
                </div>
                <a href="#"><img src={logo} width='150px' height='70px'></img></a>
                <div className='cont'>
                    <a href="#" className='hdel'>Q 바이 애스턴마틴 </a>
                    <a href="#" className='hdel'>뉴스</a>
                    <a href="#" className='hdel'>문의</a>
                </div>
            </header>
        </>
    )
}

export default Header;