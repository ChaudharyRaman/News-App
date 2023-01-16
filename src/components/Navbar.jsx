import { Box, color } from '@mui/system'
import React from 'react'
// import ArticleIcon from '@mui/icons-material/Article';
// import AddBoxIcon from '@mui/icons-material/AddBox';
import { TextField, Typography } from '@mui/material';

const Navbar = () => {
    return (
        <Box borderBottom={1} sx={{ position:'sticky', top:'0', backgroundColor: "#202124", width: '100%',gap:'1rem', paddingTop: '5px', display: 'flex', flexDirection: 'column' }} >
            <Box sx={{ paddingLeft: '2rem', flex: '1', justifyContent: 'space-between', display: 'flex', alignItems: 'center' }}>
                <Box sx={{ display: 'flex', gap: '5px' }}>
                    {/* <ArticleIcon fontSize='large' color='primary' /> */}
                    <Typography fontSize={'large'} color={'white'} sx={{ alignSelf: 'center' }} >_NEWS_Z</Typography>
                </Box>
                <TextField InputLabelProps={{ style: { color: 'white' } }} sx={{ width: '50%', color: 'white', input: { color: 'white', backgroundColor: '#3c4043', borderRadius: '10px' } }} label="Search DOC" variant="filled" />
                <Box>
                    {/* <UserMenu /> */}
                </Box>
            </Box>
            <Box sx={{width:'70%', display: 'flex',alignSelf:'center',alignContent:'center', gap: '3rem', padding: '1rem 4rem',marginX:'auto' }}>
                <Typography color={'white'}>Home</Typography>
                <Typography color={'white'}>World</Typography>
                <Typography color={'white'}>Business</Typography>
                <Typography color={'white'}>Technology</Typography>
                <Typography color={'white'}>Entertainment</Typography>
                <Typography color={'white'}>Sports</Typography>
                <Typography color={'white'}>Science</Typography>
                <Typography color={'white'}>Health</Typography>
            </Box>
        </Box>
    )
}

export default Navbar
