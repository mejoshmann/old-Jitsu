import { useState } from "react";
import axios from "axios";
// import ReactSlider from "react-slider";
import "./ProfileData.scss";


function ProfileData() {


    const [formData, setFormData] = useState({
        name: "",
        experience: "",
        gender: "",
        age: "",
        location: "",
        school: "", 
        bio: "",
    });
    console.log(formData);


    const handleSubmit = (e) => {
        e.preventDefault();

        axios.post("http://localhost:1080/api/data", formData)
            .then((response) => {
                console.log("Data sent successfully", response.data);
            })
            .catch((error) => {
                console.error("Error sending data:", error);
            });

    }

    return(
        <>
        <div className="profile">
            <div className="profile__account">
                <button className="profile__back">{`< Account`}</button>
                <h2 className="profile__myProfile">My Profile</h2>
            </div>
         <form action="post" className="proForm" onSubmit={handleSubmit}>
            <label htmlFor="name" className="proForm__label">User Name
                <input type="text" id="name" className="proForm__name" placeholder="Enter your name" value={formData.name} onChange={(e)=> setFormData({...formData, name: e.target.value})} />
            </label>
            <label htmlFor="experience" className="proForm__experience">Your grappling experience
            <div className="proForm__yrBtns">
            <button className="proForm__lessYear proForm__yrBtn" value={formData.experience} onChange={(e) => setFormData({...formData, experience: e.target.value})} >{`< 1 year`}</button>
            <input type="radio" placeholder="1 Year"/>
            <button className="proForm__plusYear proForm__yrBtn" value={formData.experience} onChange={(e) => setFormData({...formData, experience: e.target.value})}>1 year</button>
            <button className="proForm__twoYear proForm__yrBtn" value={formData.experience} onChange={(e) => setFormData({...formData, experience: e.target.value})}>2 years</button>
            <button className="proForm__threeYear proForm__yrBtn" value={formData.experience} onChange={(e) => setFormData({...formData, experience: e.target.value})}>3 Years</button>
            <button className="proForm__fourYear proForm__yrBtn" value={formData.experience} onChange={(e) => setFormData({...formData, experience: e.target.value})}>4 Years</button>
            <button className="proForm__fivePlus proForm__yrBtn" value={formData.experience} onChange={(e) => setFormData({...formData, experience: e.target.value})}>5 + </button>
            </div>
            </label>
            <label htmlFor="gender" className="proForm__gender">Your Gender
            <div className="proForm__genCont">
            <button className="proForm__male" value={formData.gender} onChange={(e) => setFormData({...formData, gender: e.target.value})}>Male</button>
            <button className="proForm__female" value={formData.gender} onChange={(e) => setFormData({...formData, gender: e.target.value})}>Female</button>
            </div>
            </label>
            <label htmlFor="age" className="proForm__age">Your Age
            <input type="range" min="1" max="100" id="age" className="proForm__slider" value={formData.age} onChange={(e) => setFormData({...formData, age: e.target.value})}/>  
            <p className="proForm__age--value" defaultValue={"0"}>{formData.age}</p>
            </label>
            <label htmlFor="location" className="proForm__location">Location 
            <input type="text" id="location" className="proForm__localInput" placeholder="Your Location?" value={formData.location} onChange={(e) => setFormData({...formData, location: e.target.value})}/>    
            </label>
            <label htmlFor="school" className="proForm__school">School
            <input type="text" id="school" className="proForm__academy" placeholder="Your Academy?" value={formData.school} onChange={(e) => setFormData({...formData, school: e.target.value})}/>    
            </label>
            <label htmlFor="bio" className="proForm__bio">Bio - About yourself
            <input type="text" className="proForm__bioInput" value={formData.bio} onChange={(e) => setFormData({...formData, bio: e.target.value})}/>
            </label>
            <label htmlFor="submit" className="proForm__submit">
            <button className="proForm__submitBtn">Update</button>
            <button className="proForm__reset">Reset</button>
            </label>    
         </form>
        </div>
        </>
    )
}

export default ProfileData;