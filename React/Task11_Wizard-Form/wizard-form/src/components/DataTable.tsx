import DataTable, { TableColumn } from 'react-data-table-component'
import {TableRowData} from './Const'



export default function MyTable(props: { handleEditClick: (arg0: any) => void; handleDeleteClick: (arg0: any) => void; tableData: TableRowData[] }) {
    const columns: TableColumn<TableRowData>[]= [
        {
            name :'First Name',
            selector : row => row.firstName,
            sortable : true,
        },
        {
            name :'Last Name',
            selector : row => row.lastName,
            sortable : true,
        },
        {
            name :'Gender',
            selector : row => row.gender,
            sortable : true,
        },
        {
            name :'Email Id',
            selector : row => row.email,
            sortable : true,
        },
        {
            name :'Contact',
            selector : row => row.contactNo,
            sortable : true,
        },
        {
            name :'Dob',
            selector : row => row.dob,
            sortable : true,
        },
        {
            name :'Favourite Sport',
            selector : row => row.sports,
            sortable : true,
        },
        {
            name :'About You',
            selector : row => row.aboutYou,
            sortable : true,
        },
        {
            name :'T & C',
            selector : row => {return row.tnc ? 'Yes' : 'No'},
            sortable : true,
        },
        {
            name : 'Edit',
            button : true,
            cell : raw => <button 
             onClick={() => props.handleEditClick(raw.id)}>
            Edit
          </button>
        },
        {
            name : 'Delete',
            button : true,
            cell : raw => (<button
                className="btn-delete"
                type="button"
                onClick={() => props.handleDeleteClick(raw.id)}
              >
                Delete
              </button>)
        }
        
    ]

  return (
    <DataTable 
    columns={columns} 
    data={props.tableData} 
    pagination   
    />
  )
}










// function MyTable (tableData){
//     return(
//         <DataTable
//             columns={columns}
//             data={tableData}
//             />
//     )
// }