import React from 'react'
import { useEffect } from 'react'
import axios from 'axios'
import { useState } from 'react'
import { Box } from '@mui/system'
import { Button, Typography } from '@mui/material'
import NewsCard from '../miscellanoues/NewsCard'

const News = () => {

    const [articles, setArticles] = useState([]);

    const getNews = async () => {
        // const { data } = await axios.get('https://newsapi.org/v2/everything?q=tesla&from=2022-12-15&sortBy=publishedAt&apiKey=ed42a68337724af5b03f3404e7d2e7d6')
        // console.log(data)
        // setArticles(data.articles)
    }

    useEffect(() => {
        getNews()
    }, [])

    return (
        <Box display={'flex'} flexDirection={'column'} marginX={'auto'} width={'60%'} paddingBottom={'3rem'} >
            <Box width={'100%'} height={'5rem'} display={'flex'} alignItems={'center'} justifyContent={'space-between'} >
                <Typography fontSize={'2rem'} >HOME</Typography>
                <Button variant="outlined">
                    Follow
                </Button>
            </Box>
            <Box display={'flex'} width={'100%'} flexDirection={'column'} gap={2}  >

                {/* News LIST WILL BE HERE */}
                <NewsCard />
                <NewsCard />
                <NewsCard />
            </Box>
        </Box>
    )
}

export default News
