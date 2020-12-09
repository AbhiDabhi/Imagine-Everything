import React from 'react';

import './detail-card.styles.scss';

import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Grid from '@material-ui/core/Grid';
import Divider from '@material-ui/core/Divider';
import ListSubheader from '@material-ui/core/ListSubheader';

 export const DetailCard = (props) => {
    let record = props.record;

    return (
        <Grid container align='center'>
            <Grid item xs={6}>
                <Card className='card' variant="outlined">
                <CardContent>
                    <Grid container className='gridStyle'>
                        <Grid item xs={4}><b>ID:</b></Grid>
                        <Grid item xs={8}>{record.id}</Grid>
                    </Grid>
                    <Divider />
                    <Grid container className='gridStyle'>
                        <Grid item xs={4}><b>Created DateTime:</b></Grid>
                        <Grid item xs={8}>{record.created}</Grid>
                    </Grid>
                    <Divider />
                    <Grid container className='gridStyle'>
                        <Grid item xs={4}><b>Email:</b></Grid>
                        <Grid item xs={8}>{record.email}</Grid>
                    </Grid>
                    <Divider />
                    <Grid container className='gridStyle'>
                        <Grid item xs={4}><b>Risk:</b></Grid>
                        <Grid item xs={8}>{record.risk}</Grid>
                    </Grid>
                    <Divider />
                    <Grid container className='gridStyle'>
                        <Grid item xs={4}><b>Risk Level:</b></Grid>
                        <Grid item xs={8}>{record.risk_level}</Grid>
                    </Grid>
                    <Divider />
                    <Grid container className='gridStyle'>
                        <Grid item xs={4}><b>Active:</b></Grid>
                        <Grid item xs={8}>{record.active === 't' ? 'True' : 'False' }</Grid>
                    </Grid>
                    </CardContent>
                </Card>
            </Grid>

            <Grid item xs={6}>
                <Card className='card' variant="outlined">
                    <CardContent>
                        <ListSubheader className='subHeader'><b>Meta Data</b></ListSubheader>

                        <Grid container className='gridStyle'>
                            <Grid item xs={4}><b>Content:</b></Grid>
                            <Grid item xs={8}>{record.meta.content}</Grid>
                        </Grid>
                        <Divider />
                        <Grid container className='gridStyle'>
                            <Grid item xs={4}><b>User Agent:</b></Grid>
                            <Grid item xs={8}>{record.meta.user_agent}</Grid>
                        </Grid>
                        <Divider />
                        <Grid container className='gridStyle'>
                            <Grid item xs={4}><b>IP External:</b></Grid>
                            <Grid item xs={8}>{record.meta.ip_external}</Grid>
                        </Grid>
                        <Divider />
                        <Grid container className='gridStyle'>
                            <Grid item xs={4}><b>IP Internal:</b></Grid>
                            <Grid item xs={8}>{record.meta.ip_internal}</Grid>
                        </Grid>
                        <Divider />
                        <Grid container className='gridStyle'>
                            <Grid item xs={4}><b>Browser UID:</b></Grid>
                            <Grid item xs={8}>{record.meta.browser_uuid}</Grid>
                        </Grid>
                    </CardContent>
                </Card>
            </Grid>
        </Grid>
    );
}