import React, {useMemo} from 'react';
import PropTypes from 'prop-types';
import { IMeterRecord } from '../../services/mainContentService';
import { useTable } from 'react-table'

type OmitID<T extends { id: string }> = Omit<T, "id">;

export interface ITableProps {
  readonly data: OmitID<IMeterRecord>[];
  readonly isLoading?: boolean;
}

const propTypes = {
  row: PropTypes.bool,
  isLoading: PropTypes.bool,
};

export const Table: React.FC<ITableProps> = (props) => {
  const {
    data,
  } = props;

  const columns = useMemo(
    () => [
      {
        Header: 'createdAt',
        accessor: 'createdAt', 
      },
      {
        Header: 'name',
        accessor: 'name',
      },
      {
        Header: 'pulses',
        accessor: 'pulses',
      },
      {
        Header: 'recordType',
        accessor: 'recordType',
      },
      {
        Header: 'serial',
        accessor: 'serial',
      },
      {
        Header: 'unit',
        accessor: 'unit',
      },
    ],
    []
  )

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
  } = useTable<any>({
    columns,
    data,
  })

  return (
    <table {...getTableProps()}>
      <thead>
        {headerGroups.map(headerGroup => (
          <tr {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map(column => (
              <th {...column.getHeaderProps()}>{column.render('Header')}</th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody {...getTableBodyProps()}>
        {rows.map((row, i) => {
          prepareRow(row)
          return (
            <tr {...row.getRowProps()}>
              {row.cells.map(cell => {
                return <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
              })}
            </tr>
          )
        })}
      </tbody>
    </table>
  );
};

Table.displayName = 'Table';
Table.propTypes = propTypes;
