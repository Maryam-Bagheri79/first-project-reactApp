import aks from '../../assets/images/photo_2021-04-13_18-21-12.jpg';
import './img.css';
const img =()=>{
    return(
        <div className="img-div">
            <img src={aks} alt="logo" />
        </div>
    );
};

export default img;
