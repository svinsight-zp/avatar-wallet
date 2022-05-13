import  React from 'react';
import  Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';



const NearCore = (props: any) => {
    return (
        <Grid container justifyContent='space-between' className="px1 mt1">
            <Button color="primary" variant="contained">Import Account</Button>
            <Button color="primary" variant="outlined">Create Account</Button>
        </Grid>
    )
}


export default NearCore;