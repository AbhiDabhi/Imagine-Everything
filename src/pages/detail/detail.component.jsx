import React from 'react';

import './detail.styles.scss';

import { DetailCard } from '../../components/detail-card/detail-card.component';

import CircularProgress from '@material-ui/core/CircularProgress';

class DetailPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            record: null,
            recordId: props.match.params.recordId
        }
    }

    componentDidMount() {
        fetch(`http://localhost:3000/records/${this.state.recordId}`)  
        .then(response => response.json())
        .then(record => this.setState({ record: record.RECORD }));
    }
    
    render() {
        const {record} = this.state;

        if(!record) {
           return (<div><CircularProgress /></div>);
        }

        return (
            <div className='transparent' >
                <DetailCard record = {record} />
            </div>
        );
    }
}

export default DetailPage;