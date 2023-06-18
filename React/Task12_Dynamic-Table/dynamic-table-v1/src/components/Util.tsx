import { Slide } from '@mui/material';
import { TransitionProps } from '@mui/material/transitions';
import React, { Dispatch } from 'react';

export interface TableType {
  id: string;
  tName: string;
  cName: string;
  col: string[];
  rows: RowType[];
}
export interface RowType {
  id: string;
  title: string;
  rData: RowData[];
  parentId: string;
  childRow: string[];
}
export interface RowData{
  type:string;
  value:number
}

export interface MyTableProps {
  table: TableType;
  tables: TableType[];
  setTables: Dispatch<React.SetStateAction<TableType[]>>;
}
export interface MyTableHeadProps extends MyTableProps {
  isEdit: boolean;
  addType: boolean;
  setAddType: Dispatch<React.SetStateAction<boolean>>;
}
export interface MyTableRowProps extends MyTableProps {
  isEdit: boolean;
  row: RowType;
  countValue: RowData[];
  setCountValue: Dispatch<React.SetStateAction<RowData[]>>;
}
export interface MyRowCellProps extends MyTableProps{
  isEdit: boolean;
  data : RowData;
  row : RowType;
  index :number;
  
}

export const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement<any, any>;
  },
  ref: React.Ref<unknown>
) {
  return <Slide direction="up" ref={ref} {...props} />;
});
