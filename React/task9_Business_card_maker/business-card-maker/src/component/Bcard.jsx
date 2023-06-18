import { useState } from "react";
import Display from "../component/Diplsay";
import Wizard from "../component/Wizard";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";

export default function Bcard() {
  const [page, setPage] = useState(0);
  const [template, setTemplate] = useState("clean");
  const [lightColor, setLightColor] = useState("#f6f6f6");
  const [mainColor, setMainColor] = useState("#0096d6");
  const [darkColor, setDarkColor] = useState("#4d4d4d");
  const [companyName, setCompanyName] = useState("");
  const [logo, setLogo] = useState("");
  const [website, setWebsite] = useState("");
  const [fullName, setFullName] = useState("");
  const [designation, setDesignation] = useState("");
  const [contactNumber, setContactNumber] = useState("");
  const [emailAddress, setEmailAddress] = useState("");

  const handleTemplateChange = (event) => {
    setTemplate(event.target.value);
  };
  const handleLightColorChange = (event) => {
    setLightColor(event.target.value);
  };
  const handleMainColorChange = (event) => {
    setMainColor(event.target.value);
  };
  const handleDarkColorChange = (event) => {
    setDarkColor(event.target.value);
  };
  const handleResetTheme = (event) => {
    setLightColor("#f6f6f6");
    setMainColor("#0096d6");
    setDarkColor("#4d4d4d");
  };

  const handleCompanyNameChange = (event) => {
    setCompanyName(event.target.value);
  };
  const handleLogoChange = (event) => {
    setLogo(event.target.value);
  };
  const handleWebsiteChange = (event) => {
    setWebsite(event.target.value);
  };
  const handleFullnameChange = (event) => {
    setFullName(event.target.value);
  };
  const handleDesignationChange = (event) => {
    setDesignation(event.target.value);
  };
  const handleContactNumberChange = (event) => {
    setContactNumber(event.target.value);
  };
  const handleEmailAddressChange = (event) => {
    setEmailAddress(event.target.value);
  };
  const handleDownload = () => {
    const isUrlValid = (url) => {
      try {
        new URL(url);
        return true;
      } catch (e) {
        return false;
      }
    };
    const isEmailValid = (email) => {
      const re = /\S+@\S+\.\S+/;
      return re.test(email);
    };

    if (
      !companyName ||
      companyName.length < 2 ||
      companyName.length > 20 ||
      /[^A-Za-z0-9. ]/.test(companyName)
    ) {
      alert("Please enter a valid company name");
      return;
    }

    // Validation for Logo
    if (
      !logo ||
      logo.length < 2 ||
      logo.length > 20 ||
      /[^A-Za-z0-9-]/.test(logo)
    ) {
      alert("Please enter a valid logo name");
      return;
    }

    // Validation for Website
    if (!website || !isUrlValid(website)) {
      alert("Please enter a valid website URL");
      return;
    }

    // Validation for Full Name
    if (
      !fullName ||
      fullName.length < 2 ||
      fullName.length > 20 ||
      /[^A-Za-z ]/.test(fullName)
    ) {
      alert("Please enter a valid full name");
      return;
    }

    // Validation for Designation
    if (
      !designation ||
      designation.length < 2 ||
      designation.length > 20 ||
      /[^A-Za-z ]/.test(designation)
    ) {
      alert("Please enter a valid designation");
      return;
    }
    // Validation for Contact Number
    if (
      !contactNumber ||
      contactNumber.length !== 10 ||
      /[^0-9]/.test(contactNumber)
    ) {
      alert("Please enter a valid 10-digit contact number");
      return;
    }
    // Validation for Email Address
    if (!emailAddress || !isEmailValid(emailAddress)) {
      alert("Please enter a valid email address");
      return;
    }

    const doc = new jsPDF({
      orientation: "landscape",
      unit: "mm",
      format: "a4"
    });

    const card = document.getElementById("card");

    html2canvas(card).then((canvas) => {
      const imgData = canvas.toDataURL("image/png");
      doc.addImage(imgData, "PNG", 0, 0, 210, 297);
      doc.save("business-card.pdf");
    });
  };

  const handleReset = () => {
    setTemplate("clean");
    setLightColor("#f6f6f6");
    setMainColor("#0096d6");
    setDarkColor("#4d4d4d");
    setCompanyName("");
    setLogo("");
    setWebsite("");
    setFullName("");
    setDesignation("");
    setContactNumber("");
    setEmailAddress("");
    setPage(0);
  };

  return (
    <div className="bcard">
      <Wizard
        page={page}
        setPage={setPage}
        template={template}
        handleTemplateChange={handleTemplateChange}
        lightColor={lightColor}
        mainColor={mainColor}
        darkColor={darkColor}
        handleLightColorChange={handleLightColorChange}
        handleMainColorChange={handleMainColorChange}
        handleDarkColorChange={handleDarkColorChange}
        handleResetTheme={handleResetTheme}
        companyName={companyName}
        logo={logo}
        website={website}
        fullName={fullName}
        designation={designation}
        contactNumber={contactNumber}
        emailAddress={emailAddress}
        handleCompanyNameChange={handleCompanyNameChange}
        handleLogoChange={handleLogoChange}
        handleWebsiteChange={handleWebsiteChange}
        handleFullnameChange={handleFullnameChange}
        handleDesignationChange={handleDesignationChange}
        handleContactNumberChange={handleContactNumberChange}
        handleEmailAddressChange={handleEmailAddressChange}
      />
      <Display
        companyName={companyName}
        logo={logo}
        website={website}
        fullName={fullName}
        designation={designation}
        contactNumber={contactNumber}
        emailAddress={emailAddress}
        handleReset={handleReset}
        handleDownload={handleDownload}
        lightColor={lightColor}
        mainColor={mainColor}
        darkColor={darkColor}
        template={template}
      />
    </div>
  );
}
