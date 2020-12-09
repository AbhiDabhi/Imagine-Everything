import React from 'react';
import { useHistory, withRouter } from "react-router-dom";

import './record-data-table.styles.scss';

import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';

const RecordTable = props => {
    const history = useHistory();

    return (
        <Paper className='root'>
          <TableContainer className='container'>
            <Table stickyHeader aria-label="Record List">
              <TableHead>
                <TableRow>
                  {props.columns.map((column) => (
                    <TableCell
                      key={column.id}
                      style={{ minWidth: column.minWidth }}
                      className='headStyle'
                    >
                      {column.label}
                    </TableCell>
                  ))}
                </TableRow>
              </TableHead>
              <TableBody>
                  {props.records.map((record) => {
                    return (
                        <TableRow hover tabIndex={-1} key={record.id}>
                          {props.columns.map((column) => {
                            const value = record[column.id];
                            return (  
                                <TableCell key={column.id}>
                                  <div className='row-link' onClick={() => history.push(`/${record.id}`)}>
                                    { value === 't' ? <FiberManualRecordIcon className='greenColor' /> :
                                      value === 'f' ? <FiberManualRecordIcon className='redColor' /> :
                                      value }
                                  </div>
                                </TableCell>
                            );
                          })}
                        </TableRow>
                    );
                  })}
              </TableBody>
            </Table>
          </TableContainer>
          <TablePagination
            className='pagination'
            rowsPerPageOptions={[5, 10, 25, 100, 200]}
            component="div"
            count={props.totalCount}
            rowsPerPage={props.rowsPerPage}
            page={props.page}
            onChangePage={props.handleChangePage}
            onChangeRowsPerPage={props.handleChangeRowsPerPage}
          />
        </Paper>
    );
}

export default withRouter(RecordTable)