import React, { useState } from "react";
import '../Styles/AddMore.css';

function AddMore() {
  const [parentInputs, setParentInputs] = useState([{ name: "" }]);
  const [childInputs, setChildInputs] = useState([]);

  const handleParentInputChange = (index, e) => {
    const newInputs = [...parentInputs];
    newInputs[index].name = e.target.value;
    setParentInputs(newInputs);
  };

  const handleChildInputChange = (parentId, index, e) => {
    const newInputs = [...childInputs];
    newInputs[parentId][index][e.target.name] = e.target.value;
    setChildInputs(newInputs);
  };

  const handleAddParent = () => {
    const newInputs = [...parentInputs, { name: "" }];
    setParentInputs(newInputs);
    setChildInputs([...childInputs, []]);
  };

  const handleAddChild = (parentId) => {
    const newInputs = [...childInputs];
    if (!newInputs[parentId]) {
      newInputs[parentId] = [];
    }
    newInputs[parentId].push({ name: "", age: "" });
    setChildInputs(newInputs);
  };

  const handleDeleteChild = (parentId, index) => {
    const newInputs = [...childInputs];
    newInputs[parentId].splice(index, 1);
    setChildInputs(newInputs);
  };

  const handleSubmit = (parentId) => {
    const parentInput = parentInputs[parentId];
    const childInput = childInputs[parentId];

    const newTableData = {
      parentName: parentInput.name,
      children: childInput.map((child) => ({
        name: child.name,
        age: child.age
      }))
    }

  };
  return (
    <div className="Main">
        <div className="Left-div">

            
        <button onClick={handleAddParent} className="btn-submit">Add parent</button>
        {parentInputs.map((parentInput, parentIndex) => (
            <div key={parentIndex} className = 'parent'>
        
            <input
                name={`parent-${parentIndex}`}
                value={parentInput.name}
                onChange={(e) => handleParentInputChange(parentIndex, e)}
            />
            <button className="btn-black" onClick={() => handleAddChild(parentIndex)}>Add child</button>
            {childInputs[parentIndex] &&
                childInputs[parentIndex].map((childInput, childIndex) => (
                 <div key={childIndex} className="child">
                
                    <input
                    name="name"
                    value={childInput.name}
                    onChange={(e) =>
                        handleChildInputChange(parentIndex, childIndex, e)
                    }
                    />
                    
                    <input
                    name="age"
                    value={childInput.age}
                    onChange={(e) =>
                        handleChildInputChange(parentIndex, childIndex, e)
                    }
                    />
                    <button
                    className="btn-delete"
                    onClick={() => handleDeleteChild(parentIndex, childIndex)}
                    >
                    Delete child
                    </button>
                </div>
                ))}
                
                <div className="Table">
                    <table>
                    <thead>
                        <tr key={parentIndex}>
                        <th >
                        {parentInput.name}
                        </th>
                        </tr>
                        
                    </thead>
                    {childInputs[parentIndex] && childInputs[parentIndex].length > 0 && (

                    <tbody>
                        {childInputs[parentIndex].map((childInput, childIndex) => (
                        <tr key={childIndex}>
                            <td>{childInput.name}</td>
                            <td>{childInput.age}</td>
                        </tr>
                        ))}
                    </tbody>
                    )}
                    </table>
                </div>
                
            
            </div>
        ))}
        </div>
        <div className="Right-div">
            <h1>SPECIFICATION</h1>
        </div>
      
    </div>
  );
}

export default AddMore;
