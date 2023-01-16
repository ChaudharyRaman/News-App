import { Button, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'

const NewsCard = () => {
    return (
        <Box display={'flex'} width={'100%'} bgcolor={'#1f1f1f'} borderRadius={'16px'}>
            <Box width={'40%'} gap={1} padding={2} display={'flex'} flexDirection={'column'}>
                <img width={'100%'} style={{ borderRadius: '12px' }} src="http://cdn.benchmark.pl/uploads/article/88478/MODERNICON/dc5e368337013feea12a9f250889146d6c474525.jpg" alt="ALT IMAGE" />
                <Typography fontSize={'0.8rem'} >Bloomberg</Typography>
                <Typography fontSize={'1.3rem'} lineHeight={'1.7rem'} >Tesla mówi o powodach obniżek cen swoich samochodów</Typography>
            </Box>
            <Box padding={2} width={'60%'} flex={1} display={'flex'} gap={2} flexDirection={'column'}>
                <Box width={'100%'}>
                    <Typography>Description</Typography>
                    <Typography>The S&P 500 declined sharply last year, but historical data
                        says the stock market could rebound in 2023."
                    </Typography>
                </Box>
                <Box width={'100%'}>
                    <Typography>Author - JANE DOE</Typography>
                </Box>
                <Box width={'100%'} display={'flex'} justifyContent={'space-between'}>
                    <Button variant="outlined">
                        SEE FULL COVERAGE
                    </Button>
                    <Button variant="contained">
                        SUBSCRIBE
                    </Button>
                </Box>
            </Box>
        </Box>
    )
}

export default NewsCard
