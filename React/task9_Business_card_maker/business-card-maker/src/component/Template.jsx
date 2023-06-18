export default function Tempalte({ template, handleTemplateChange }) {
  return (
    <>
      <div className="template wizard-area">
        <div className="wizard-title">
          <h3> Select Template </h3>
        </div>
        <div className="wizaard-content">
          <select value={template} onChange={handleTemplateChange}>
            <option value="clean">Clean</option>
            <option value="standard">Standard</option>
          </select>
        </div>
      </div>
    </>
  );
}
