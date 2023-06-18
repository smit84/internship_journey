import { useState } from 'react';
import '../styles/Wizard.css';
import {
  TableRowData,
  initialFormData,
  renderStep,
  renderStepsTitle,
  renderButtons,
} from './Const';
import { validateStep1, validateStep2, validateStep3 } from './Validation';
import MyTable from './DataTable';


export default function WizardForm() {

  const [currentStep, setCurrentStep] = useState(1);
  const [rawId , setRawId] = useState<number | null>(null)
  const [formData, setFormData] = useState(initialFormData);
  const [tableData, setTableData] = useState<TableRowData[]>([]);

  const handleFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    
    if(!validateStep3(formData)){
      return
    }
    else{
      if (rawId === null) {
        const newRowData = {
          id: Date.now(),
          ...formData,
        };
        setTableData((prevData) => [...prevData, newRowData]);
      } else {
        
        setTableData((prevData) =>
          prevData.map((row) =>
            row.id === rawId ? { ...row, ...formData } : row
          )
        );
        setRawId(null);
      }
      setFormData(initialFormData);
      setCurrentStep(1);

    }    
  };
  const handleNextClick = () => {
    if(currentStep===1 && !validateStep1(formData)){
      return
    }
    if(currentStep===2 && !validateStep2(formData)){
      return
    }
    if(currentStep === 1 && validateStep1(formData)){
      setCurrentStep(2);
    }
    if(currentStep === 2 && validateStep1(formData)){
      setCurrentStep(3);
    }

   
  }

  const handleEditClick = (rawId : number) => {
    const rowEdit = tableData.find((row) => row.id === rawId);
    console.log(rowEdit);
    if (rowEdit) {
      setFormData(rowEdit);
      setCurrentStep(1);
      setRawId(rawId);
      console.log(rawId);
    }
        
  };
  const handleCancelClick = () =>{
    setFormData(initialFormData);
    setCurrentStep(1);
    setRawId(null);
  }
  const handleDeleteClick = (rawId: number) => {
    const rowDelete = tableData.find((row) => row.id === rawId);
    if(rowDelete === formData){
      setRawId(prev => prev=null);
      setCurrentStep(1);
    }
    setTableData((prevData) => prevData.filter((row) => row.id !== rawId));

    
  };
  

  const handleInputChange = (
    event: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value } = event.target;
    setFormData(prevFormData => ({
      ...prevFormData,
      [name]: value,
    }));
  };
  const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = event.target;
    setFormData(prevFormData => ({
      ...prevFormData,
      [name]: checked,
    }));
  };

  

  return (
    <>
      <div className="step-title">{renderStepsTitle(currentStep,setCurrentStep)}</div>
      <form onSubmit={handleFormSubmit}>
        <div className="step">
          {renderStep(
            currentStep,
            formData,
            handleInputChange,
            handleCheckboxChange
          )}
        </div>

        <div className="step-btn">
          {renderButtons(currentStep,rawId , setCurrentStep,handleCancelClick,handleNextClick )}
        </div>
      </form>
      <div className="table">
        <MyTable
        tableData = {tableData}
  
        handleDeleteClick = {handleDeleteClick}
        handleEditClick = {handleEditClick}
        />
        
        {/* <table>
          <thead>
            <tr>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Gender</th>
              <th>Email Id</th>
              <th>Contact No</th>
              <th>DOB</th>
              <th>Sports</th>
              <th>About You</th>
              <th>T & C</th>
              <th>Edit</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {renderRawData(tableData, handleEditClick, handleDeleteClick)}
          </tbody>
        </table> */}
      </div>
    </>
  );
}
