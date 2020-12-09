import React from 'react';

import RecordTable from '../record-data-table/record-data-table.component';

import './record-list.styles.scss';

//collumns which will be appeared on the table
const columns = [
    { id: 'id', label: 'ID', minWidth: 150 },
    { id: 'email', label: 'Email', maxWidth: 80 },
    { id: 'active', label: 'Active', maxWidth: 50 },
  ];

const RecordList = props => {

  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);

  //event to set page number while changine page on table
  const handleChangePage = (event, newPage) => {
    setPage(newPage);
    props.handleLimitRowChange(newPage, rowsPerPage); //send updated page number to home compo.(perent class)
  };

  //event to set a limit of showing rows on a page
  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
    props.handleLimitRowChange(0, +event.target.value); //send updated limit number to home compo.(parent class)
  };  

  return (
    <RecordTable 
      columns = {columns} 
      records={props.records} 
      page={page} rowsPerPage={rowsPerPage}
      totalCount = {props.totalCount}
      handleChangePage={handleChangePage} 
      handleChangeRowsPerPage={handleChangeRowsPerPage} 
    />
  );
}

export default RecordList;
