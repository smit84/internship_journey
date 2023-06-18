import { ChangeEventHandler, MouseEventHandler, SetStateAction } from 'react';

export interface FormData {
  firstName: string;
  lastName: string;
  gender: string;
  email: string;
  contactNo: string;
  dob: string;
  sports: string;
  aboutYou: string;
  tnc: boolean;
}
export interface TableRowData extends FormData {
  id: number;
}
export const initialFormData: FormData = {
  firstName: '',
  lastName: '',
  gender: '',
  email: '',
  contactNo: '',
  dob: '',
  sports: '',
  aboutYou: '',
  tnc: false,
};
export const initialTableRowData: TableRowData = {
  id: 0,
  ...initialFormData,
};

export const sportsOptions = [
  { value: 'cricket', label: 'Cricket' },
  { value: 'chess', label: 'Chess' },
  { value: 'football', label: 'Football' },
  { value: 'badminton', label: 'Badminton' },
];

export const renderStep1 = (
  formData: FormData,
  handleInputChange: ChangeEventHandler<HTMLInputElement> | undefined
) => (
  <>
    <div className='input-wrapper'>
      <div className='label'>
        <label htmlFor="firstName">First Name : </label>
      </div>
      <div className='input'>
      <input
        type="text"
        name="firstName"
        id="firstName"
        placeholder="Enter FirstName"
        value={formData.firstName}
        onChange={handleInputChange}
      />
      </div>
     
    </div>
    <div className="input-wrapper">
      <div className='label'>
        <label htmlFor="lastName">Last Name : </label> 
      </div>
      <div className='input'>
        <input
          type="text"
          name="lastName"
          id="lastName"
          placeholder="Enter Last Name"
          value={formData.lastName}
          onChange={handleInputChange}
        />
      </div>
      
    </div>
    <div className='input-wrapper'>
    <div className='label'>
    <label>Gender : </label>
        </div>
      <div className='gender-radio input'>
      <label htmlFor="male">
          <input
            type="radio"
            name="gender"
            id="male"
            value="male"
            checked={formData.gender === 'male'}
            onChange={handleInputChange}
          />
          Male
        </label>
        <label htmlFor="female">
          <input
            type="radio"
            name="gender"
            id="female"
            value="female"
            checked={formData.gender === 'female'}
            onChange={handleInputChange}
          />
          Female
        </label>

      </div>
        
    </div>
  </>
);

export const renderStep2 = (
  formData: FormData,
  handleInputChange: ChangeEventHandler<HTMLInputElement> | undefined
) => (
  <>
    <div className="input-wrapper">
      <div className='label'>
        <label htmlFor="email">Email : </label>
      </div>
      <div className='input'>
        <input
          type="email"
          name="email"
          id="email"
          placeholder="Enter Email"
          value={formData.email}
          onChange={handleInputChange}
        />
      </div>
    
    </div>
    <div className="input-wrapper">
      <div className='label'>
        <label htmlFor="contactNo">Contact Number : </label>       
      </div>
      <div className='input'>
        <input
        type="tel"
        name="contactNo"
        id="contactNo"
        placeholder="Enter Contact Number"
        value={formData.contactNo}
        onChange={handleInputChange}
        />
      </div>
     
    </div>
    <div className="input-wrapper">
      <div className='label'>
        <label htmlFor="dob">Date of Birth : </label>
      </div>
      <div className='input'>
      <input
        type="date"
        name="dob"
        id="dob"
        value={formData.dob}
        onChange={handleInputChange}
      />
      </div>
    </div>
  </>
);

export const renderStep3 = (
  formData: FormData,
  handleInputChange: any,
  handleCheckboxChange: ChangeEventHandler<HTMLInputElement> | undefined
) => (
  <>
    <div className="input-wrapper">
      <div className='label'>
        <label htmlFor="sports">Favorite Sports : </label> 
      </div>
      <div className='input'>
        <select
          name="sports"
          id="sports"
          value={formData.sports}
          onChange={handleInputChange}
        >
          <option value="">Select a sport</option>

          {sportsOptions.map(option => (
            <option key={option.value} value={option.value}>
              {option.label}{' '}
            </option>
          ))}
        </select>

      </div>
     
    </div>
    <div className="input-wrapper">
      <div className='label'>
        <label htmlFor="aboutYou">About You : </label>     
      </div>
      <div className='input'>
        <textarea
        name="aboutYou"
        id="aboutYou"
        value={formData.aboutYou}
        onChange={handleInputChange}
      />
      </div>
    </div>
    <div className="input-wrapper tnc">
    
      <label htmlFor="tnc">I accept the Terms and Conditions</label>     
      <input
        type="checkbox"
        name="tnc"
        id="tnc"
        checked={formData.tnc}
        onChange={handleCheckboxChange}
      />
    </div>
  </>
);

export const renderStepsTitle = (currentStep: number ,setCurrentStep: { (value: SetStateAction<number>): void; (arg0: number): void; }) => (
  <>
    {currentStep === 1 && (
      <>
        <h2 onClick={()=>setCurrentStep(1)} className="active-step">STEP 1</h2>
        <h2 onClick={()=>setCurrentStep(2)}>STEP 2</h2>
        <h2  onClick={()=>setCurrentStep(3)}>STEP 3</h2>
      </>
    )}
    {currentStep === 2 && (
      <>
         <h2 onClick={()=>setCurrentStep(1)}>STEP 1</h2>
        <h2 onClick={()=>setCurrentStep(2)} className="active-step">STEP 2</h2>
        <h2  onClick={()=>setCurrentStep(3)}>STEP 3</h2>
      </>
    )}
    {currentStep === 3 && (
      <>
        <h2 onClick={()=>setCurrentStep(1)}>STEP 1</h2>
        <h2 onClick={()=>setCurrentStep(2)}>STEP 2</h2>
        <h2 onClick={()=>setCurrentStep(3)}  className="active-step" >STEP 3</h2>
      </>
    )}
  </>
);

export const renderStep = (
  currentStep: number,

  formData: FormData,
  handleInputChange: ChangeEventHandler<HTMLInputElement> | undefined,
  handleCheckboxChange: ChangeEventHandler<HTMLInputElement> | undefined
) => (
  <>
    {currentStep === 1 && renderStep1(formData, handleInputChange)}
    {currentStep === 2 && renderStep2(formData, handleInputChange)}
    {currentStep === 3 &&
      renderStep3(formData, handleInputChange, handleCheckboxChange)}
  </>
);

export const renderButtons = (
  currentStep: number,
  rawId :number | null,
  setCurrentStep: (arg0: {
    (prevStep: any): number;
    (prevStep: any): any;
  }) => void,
  handleCancelClick: MouseEventHandler<HTMLButtonElement> | undefined,
  handleNextClick: MouseEventHandler<HTMLButtonElement> | undefined
) => (
  <>
  <div className='btn-left'>
  {currentStep > 1 && (
      <button
        type="button"
        onClick={() => setCurrentStep(prevStep => prevStep - 1)}
      >
        Previous
      </button>
    )}

  </div>
  <div className='btn-right'>
  {currentStep < 3 && (
      <button
        type="button"
        onClick={handleNextClick}
      >
        Next
      </button>
    )}
    {currentStep === 3 && (
      <button className="btn-submit" type="submit">
        {rawId=== null ? "Submit" : "Update"}
      </button>
    )}
    {currentStep ===3 && rawId !=null && (
      <button className='btn-cancel btn-delete'
      onClick={handleCancelClick}
      >
        Cancel
      </button>
    ) 
    }

  </div>
   
   
  </>
);




