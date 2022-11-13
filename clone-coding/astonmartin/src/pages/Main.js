import box_img1 from '../images/box_img1.jpeg';
import box_img2 from '../images/box_img2.jpeg';
import './Main.css';
function Main(){
    return(
        <>
            <div className='content'>
                <div className='content-box'>
                    <img src={box_img1}/>
                    <p>Aston Martin Seoul Showroom</p>
                    <h3>애스터마틴 서울 전시장</h3>
                </div>
                <div className='content-box'>
                    <img src={box_img2}/>
                    <p>Aston Martin Seoul Service Center</p>
                    <h3>애스터마틴 서울 서비스센터</h3>
                </div>
            </div>
        </>
    )
}
export default Main;