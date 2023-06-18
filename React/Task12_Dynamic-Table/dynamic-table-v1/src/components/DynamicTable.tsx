import { useState } from 'react';
import { TableType } from './Util';
import Form from './Form';
import MyTable from './MyTable';

export default function DynamicTable() {
  const [tables, setTables] = useState<TableType[]>([]);

  return (
    <div>
      <Form setTables={setTables} />
      {tables.length > 0 &&
        tables.map(table => (
          <MyTable
            key={table.id}
            table={table}
            tables={tables}
            setTables={setTables}
          />
        ))}
    </div>
  );
}
