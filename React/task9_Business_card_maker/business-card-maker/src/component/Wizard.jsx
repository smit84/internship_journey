import Personalization from "./Personalization";
import Tempalte from "./Template";
import Theme from "./Theme";

export default function Wizard(props) {
  return (
    <div className="wizard">
      {props.page === 0 && (
        <Tempalte
          template={props.template}
          handleTemplateChange={props.handleTemplateChange}
        />
      )}

      {props.page === 1 && (
        <Theme
          lightColor={props.lightColor}
          mainColor={props.mainColor}
          darkColor={props.darkColor}
          handleLightColorChange={props.handleLightColorChange}
          handleMainColorChange={props.handleMainColorChange}
          handleDarkColorChange={props.handleDarkColorChange}
          handleResetTheme={props.handleResetTheme}
        />
      )}
      {props.page === 2 && (
        <Personalization
          companyName={props.companyName}
          logo={props.logo}
          website={props.website}
          fullName={props.fullName}
          designation={props.designation}
          contactNumber={props.contactNumber}
          emailAddress={props.emailAddress}
          handleCompanyNameChange={props.handleCompanyNameChange}
          handleLogoChange={props.handleLogoChange}
          handleWebsiteChange={props.handleWebsiteChange}
          handleFullnameChange={props.handleFullnameChange}
          handleDesignationChange={props.handleDesignationChange}
          handleContactNumberChange={props.handleContactNumberChange}
          handleEmailAddressChange={props.handleEmailAddressChange}
        />
      )}

      <div className="button-area">
        {props.page === 0 && (
          <button onClick={() => props.setPage((prev) => prev + 1)}>
            Next
          </button>
        )}
        {props.page === 1 && (
          <div>
            <button onClick={() => props.setPage((prev) => prev - 1)}>
              Prev
            </button>
            <button onClick={() => props.setPage((prev) => prev + 1)}>
              Next
            </button>
          </div>
        )}
        {props.page === 2 && (
          <button onClick={() => props.setPage((prev) => prev - 1)}>
            Prev
          </button>
        )}
      </div>
    </div>
  );
}
