import React, { Component } from 'react';

import { SearchBar } from '../../components/search-bar/search-bar.components';
import RecordList from '../../components/record-list/record-list.component';

import './home.styles.scss';

class HomePage extends Component {
    constructor() {
        super();

        this.state = {
          records: [],
          searchField: '',
          totalCount: 0,
          limit: 5,
          page: 0
        };
      }

      fetchRecords() {
        const { limit, page } = this.state;
        fetch(`http://localhost:3000/records?page=${page+1}&limit=${limit}`)
        .then(response => response.json())
        .then(records => this.setState({ records: records['RECORDS'], totalCount: records['TotalCount'] }));
      }
     
      //will fetch record automatically while rendering
      componentDidMount(){
        this.fetchRecords();
      }

      //event will get updated page and now number from its child and update the state value
      handleLimitRowChange = (page, row) => {
        this.setState({ page: page, limit: row }, this.fetchRecords);
      }

      handleChange = (e) => {
        this.setState({ searchField: e.target.value });
      }

      render() {
        const { records, searchField } = this.state;

        //filter the record for Search Bar
        const filteredRecords = records.filter(record => 
          record.id.includes(searchField) || record.email.includes(searchField));
        
        return (
          <div>
            <SearchBar handleChange = { this.handleChange } />
            
            <RecordList records={ filteredRecords } handleLimitRowChange = { this.handleLimitRowChange.bind(this) } totalCount = {this.state.totalCount} />
          </div>
        );
      }
}

export default HomePage;