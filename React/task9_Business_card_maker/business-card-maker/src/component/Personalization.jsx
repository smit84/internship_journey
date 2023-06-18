export default function Personalization(props) {
  return (
    <div className="personalization wizard-area">
      <h3>Enter Details</h3>
      <label htmlFor="companyName">Company Name:</label>
      <input
        type="text"
        id="companyName"
        placeholder="Enter name of Company"
        value={props.companyName}
        onChange={props.handleCompanyNameChange}
      />
      <label htmlFor="logo">Logo:</label>

      <input
        type="text"
        id="logo"
        placeholder="Enter Font Awesome 4 Logo Class (Like, fa-coffee)
          Refer: 
          https://fontawesome.com/v4/icons/"
        value={props.logo}
        onChange={props.handleLogoChange}
      />
      <label htmlFor="wesite">Website :</label>

      <input
        type="text"
        id="website"
        placeholder="Enter Website URL"
        value={props.website}
        onChange={props.handleWebsiteChange}
      />
      <label htmlFor="fullName">Full Name :</label>

      <input
        type="text"
        id="fullName"
        placeholder="Enter Full Name"
        value={props.fullname}
        onChange={props.handleFullnameChange}
      />
      <label htmlFor="designation">Designation :</label>

      <input
        type="text"
        id="desigantion"
        placeholder="Enter Designation"
        value={props.designation}
        onChange={props.handleDesignationChange}
      />
      <label htmlFor="contact">Contact Number :</label>

      <input
        type="number"
        id="contact"
        placeholder="Enter Contact Number"
        value={props.contactNumber}
        onChange={props.handleContactNumberChange}
      />
      <label htmlFor="email">Email Address :</label>
      <input
        type="text"
        id="email"
        placeholder="Enter emailAddress"
        value={props.emailAddress}
        onChange={props.handleEmailAddressChange}
      />
    </div>
  );
}
