import React, { useState } from "react";
import image from "./images/Vector.svg";
import facebookLogo from "./images/Facebook.svg";
import instagramLogo from "./images/Instagram.svg";
import youtubeLogo from "./images/Youtube.svg";
import linkedinLogo from "./images/Linkdine.svg";
import twitterLogo from "./images/Twitter.svg";
import Olous from "./images/Olous Logo.png";

//D:\Olous_Ex\olous-ex\src\images
//olous-ex\src\images
const categories = [
  { value: "Consultant", label: "Consultant" },
  { value: "category2", label: "Category 2" },
  { value: "category3", label: "Category 3" },
  { value: "category4", label: "Category 4" },
];

const newCategories = [
  { value: "architectureDesign", label: "Architecture Design" },
  { value: "interiorDesign", label: "Interior Design" },
  { value: "BIM", label: "BIM" },
];

function Form() {
  const [isIndividual, setIsIndividual] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState("select category");
  const [selectedNewCategory, setSelectedNewCategory] = useState(
    "select new category"
  );
  const [showButton, setShowButton] = useState(false);

  function handleRadioChange(event) {
    setIsIndividual(event.target.value === "individual");
  }

  function handleSelectChange(event) {
    const selectedCategory = categories.find(
      (category) => category.value === event.target.value
    );
    setSelectedCategory(selectedCategory);
    setShowButton(true);
  }

  function handleNewSelectChange(event) {
    const selectedNewCategory = newCategories.find(
      (newCategory) => newCategory.value === event.target.value
    );
    setSelectedNewCategory(selectedNewCategory);
  }

  function handleButtonClick() {
    setSelectedCategory("select category");
    setShowButton(false);
  }

  function handleSubmit() {
    // Add form submission handling code here
  }
  return (
    <div>
      <h1>Need Vendor, Consultant, Contractor?</h1>
      <img
        src={image}
        alt="Description of the image"
        style={{ width: "500px", height: "60px" }}
      />
      <h2>
        Fill in your requirements and contact details, and we’ll help you
        connect with the right business!
      </h2>
      <div>
        <p style={{ display: "inline-block" }}>*Are You ?</p>
        <label style={{ marginLeft: "10px" }}>
          <input
            type="radio"
            value="individual"
            checked={isIndividual}
            onChange={handleRadioChange}
          />
          Individual
        </label>
        <label style={{ marginLeft: "10px" }}>
          <input
            type="radio"
            value="company"
            checked={!isIndividual}
            onChange={handleRadioChange}
          />
          Company
        </label>
      </div>
      <div>
        <p>*What are you looking for? Choose from below categories.</p>
        <select
          style={{ width: "400px" }}
          value={selectedCategory}
          onChange={handleSelectChange}
        >
          <option value="select category">Select category</option>
          {categories.map((category) => (
            <option key={category.value} value={category.value}>
              {category.label}
            </option>
          ))}
        </select>
        {showButton && (
          <div style={{ display: "flex", alignItems: "center" }}>
            <div
              style={{
                border: "1px solid #333",
                borderRadius: "4px",
                padding: "4px 8px",
              }}
            >
              <p style={{ margin: 0 }}>{selectedCategory.label}</p>
            </div>
            <button
              style={{
                border: "1px solid #333",
                borderRadius: "50%",
                width: "30px",
                height: "30px",
                lineHeight: "26px",
                textAlign: "center",
              }}
              onClick={handleButtonClick}
            >
              ×
            </button>
          </div>
        )}
      </div>

      <div>
        <p>*Select from below sub category to reach the right connect</p>
        <select
          style={{ width: "400px" }}
          value={selectedNewCategory}
          onChange={handleNewSelectChange}
        >
          <option value="select new category">Select new category</option>
          {newCategories.map((newCategory) => (
            <option key={newCategory.value} value={newCategory.value}>
              {newCategory.label}
            </option>
          ))}
        </select>
      </div>

      <div>
        <p>Write your requirement</p>
        <br />
        <input
          type="text"
          id="requirement"
          placeholder="Eg: I am looking for a RCC Contractor for a Residential project of 200,000 sq.ft."
        />
      </div>

      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <div>
          <label htmlFor="work-location">*Work location</label>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <input
              type="text"
              id="country"
              placeholder="Country"
              style={{ width: "47%" }}
            />
            <input
              type="text"
              id="city"
              placeholder="City"
              style={{ width: "47%" }}
            />
          </div>
        </div>
      </div>

      <div>
        <p>Expected Value of Works (Select from below)</p>
        <div style={{ display: "flex" }}>
          <div>
            <label htmlFor="currency">Currency</label>
            <br />
            <input
              type="text"
              id="currency"
              placeholder="₹ Rupee"
              style={{ width: "47%" }}
            />
          </div>
          <div>
            <label htmlFor="value">Value</label>
            <br />
            <select id="value" style={{ width: "47%" }}>
              <option value="1 lakh to 50 lakhs">1 lakh to 50 lakhs</option>
              <option value="50 lakhs to 1 crore">50 lakhs to 1 crore</option>
              <option value="1 crore to 10 crores">1 crore to 10 crores</option>
              <option value="Above 10 crores">Above 10 crores</option>
            </select>
          </div>
        </div>
      </div>

      <div>
        <p>*Your Contact Details</p>
        <div style={{ display: "flex" }}>
          <input
            type="text"
            placeholder="Country"
            style={{ marginRight: "20px" }}
          />
          <input type="text" placeholder="City" />
        </div>
        <div style={{ display: "flex" }}>
          <input
            type="text"
            placeholder="Name"
            style={{ marginRight: "20px" }}
          />
          <input type="text" placeholder="Company" />
        </div>
        <div style={{ display: "flex" }}>
          <input
            type="text"
            id="email"
            placeholder="Email"
            style={{ marginRight: "20px" }}
          />

          <br />
          <input type="text" id="phone" placeholder="+91 9898989898" />
        </div>
      </div>

      <div style={{ display: "flex", justifyContent: "center" }}>
        <button
          type="submit"
          style={{
            borderRadius: "20px",
            width: "145px",
            height: "50px",
            backgroundColor: "#D3D3D3",
            fontSize: '18px'
          }}
          onClick={handleSubmit}
        >
          Submit
        </button>
      </div>

      <div
        style={{
          backgroundColor: "black",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <img
          src={Olous}
          alt="Olous"
          style={{
            width: "100px",
            height: "25px",
            padding: "20px",
            margin: "0px 0px 0px 40px",
          }}
        />
        <div>
          <a href="#" style={{ color: "white", marginRight: "10px" }}>
            Terms & conditions
          </a>
          <a href="#" style={{ color: "white", marginRight: "10px" }}>
            Privacy policy
          </a>
          <a href="#" style={{ color: "white" }}>
            Support
          </a>
        </div>
        <div>
          <img
            src={facebookLogo}
            alt="Facebook Logo"
            style={{ width: "30px", height: "30px", marginRight: "10px" }}
          />
          <img
            src={instagramLogo}
            alt="Instagram Logo"
            style={{ width: "30px", height: "30px", marginRight: "10px" }}
          />
          <img
            src={youtubeLogo}
            alt="YouTube Logo"
            style={{ width: "30px", height: "30px", marginRight: "10px" }}
          />
          <img
            src={linkedinLogo}
            alt="LinkedIn Logo"
            style={{ width: "30px", height: "30px", marginRight: "10px" }}
          />
          <img
            src={twitterLogo}
            alt="Twitter Logo"
            style={{ width: "30px", height: "30px", marginRight: "40px" }}
          />
        </div>
      </div>
    </div>
  );
}

export default Form;
