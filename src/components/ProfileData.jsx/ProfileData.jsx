import { useState } from "react";
import axios from "axios";
// import ReactSlider from "react-slider";
import "./ProfileData.scss";

function ProfileData() {
  const [formData, setFormData] = useState({
    name: "",
    belt: "",
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

    axios
      .post("http://localhost:1080/api/data", formData)
      .then((response) => {
        console.log("Data sent successfully", response.data);
      })
      .catch((error) => {
        console.error("Error sending data:", error);
      });
  };

  return (
    <>
      <div className="profile">
        <div className="profile__account">
          <button className="profile__back">{`< Account`}</button>
          <h2 className="profile__myProfile">My Profile</h2>
        </div>
        <form action="post" className="proForm" onSubmit={handleSubmit}>
          <label htmlFor="name" className="proForm__label">
            User Name
            <input
              type="text"
              id="name"
              className="proForm__name"
              placeholder="Enter your name"
              value={formData.name}
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
            />
          </label>
          <div className="proForm__belt--radios">
            <h4 className="proForm__belt--heading">Belt Colour</h4>
            <label htmlFor="white" className="proForm__belt">
              White
              <input
                type="radio"
                id="white"
                name="belt"
                className="proForm__belt--radio"
                value="white"
              />
            </label>

            <label htmlFor="blue" className="proForm__belt">
              Blue
              <input
                type="radio"
                id="blue"
                name="belt"
                className="proForm__belt--radio"
                value={formData.blue}
              />
            </label>
            <label htmlFor="purple" className="proForm__belt">
              Purple
              <input
                type="radio"
                id="purple"
                name="belt"
                className="proForm__belt--radio"
                value="purple"
              />
            </label>
            <label htmlFor="brown" className="proForm__belt">
              Brown
              <input
                type="radio"
                id="brown"
                name="belt"
                className="proForm__belt--radio"
                value="Brown"
              />
            </label>
            <label htmlFor="black" className="proForm__belt">
              Black
              <input
                type="radio"
                id="black"
                name="belt"
                className="proForm__belt--radio"
                value="Black"
              />
            </label>
          </div>
          <div className="proForm__experience">
            <h4 className="proForm__experience--heading">
              Your grappling experience
            </h4>
            <div className="proForm__yrBtns">
                <label htmlFor="lessOne" className="proForm__experience--radios">
                    <input type="radio" id="lessOne" name="years" className="proForm__yrRadio" />
                </label>
                <label htmlFor="one" className="proForm__experience--radios">
                    <input type="radio" id="one" name="years" className="proForm__yrRadio" />
                </label>
                <label htmlFor="two" className="proForm__experience--radios">
                    <input type="radio" id="two" name="years" className="proForm__yrRadio" />
                </label>
                <label htmlFor="three" className="proForm__experience--radios">
                    <input type="radio" id="three" name="years" className="proForm__yrRadio" />
                </label>
                <label htmlFor="four" className="proForm__experience--radios">
                    <input type="radio" id="four" name="years" className="proForm__yrRadio" />
                </label>
                <label htmlFor="five" className="proForm__experience--radios">
                    <input type="radio" id="five" name="years" className="proForm__yrRadio" />
                </label>

            </div>
          </div>


          <label htmlFor="gender" className="proForm__gender">
            <div className="proForm__genCont">
              <input
                type="radio"
                className="proForm__male"
                name="gender"
                value={formData.gender}
                onChange={(e) =>
                  setFormData({ ...formData, gender: e.target.value })
                }
              />

              <input
                type="radio"
                className="proForm__female"
                name="gender"
                value={formData.gender}
                onChange={(e) =>
                  setFormData({ ...formData, gender: e.target.value })
                }
              />
            </div>

          </label>
          <label htmlFor="age" className="proForm__age">
            Your Age
            <input
              type="range"
              min="1"
              max="100"
              id="age"
              className="proForm__slider"
              value={formData.age}
              onChange={(e) =>
                setFormData({ ...formData, age: e.target.value })
              }
            />
            <p className="proForm__age--value" defaultValue={"0"}>
              {formData.age}
            </p>
          </label>
          <label htmlFor="location" className="proForm__location">
            Location
            <input
              type="text"
              id="location"
              className="proForm__localInput"
              placeholder="Your Location?"
              value={formData.location}
              onChange={(e) =>
                setFormData({ ...formData, location: e.target.value })
              }
            />
          </label>
          <label htmlFor="school" className="proForm__school">
            School
            <input
              type="text"
              id="school"
              className="proForm__academy"
              placeholder="Your Academy?"
              value={formData.school}
              onChange={(e) =>
                setFormData({ ...formData, school: e.target.value })
              }
            />
          </label>
          <label htmlFor="bio" className="proForm__bio">
            Bio - About yourself
            <input
              type="text"
              className="proForm__bioInput"
              value={formData.bio}
              onChange={(e) =>
                setFormData({ ...formData, bio: e.target.value })
              }
            />
          </label>
          <label htmlFor="submit" className="proForm__submit">
            <button className="proForm__submitBtn">Update</button>
            <button className="proForm__reset">Reset</button>
          </label>
        </form>
      </div>
    </>
  );
}

export default ProfileData;
