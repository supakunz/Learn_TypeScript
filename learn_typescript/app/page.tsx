import { Container, Grid } from '@mui/material';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import React from 'react'

async function getData() {
  const res = await fetch('https://www.melivecode.com/api/attractions')
  if (!res.ok) {
    throw new Error("Faild to fetch data");
  }
  return res.json()
}

interface attractions {
  id: number,
  name: string,
  detail: string,
  coverimage: string,
  latitude: number,
  longitude: number
}

async function Page() {
  const data = await getData()
  console.log(data)

  return (
    <Container maxWidth="lg">
      <h1 className='font-semibold text-[36px]'>Attractions</h1>
      <Grid container spacing={2}>
        {data.map((a: attractions) => (
          <Grid item xs={12} md={4} key={a.id}>
            <Card sx={{ maxWidth: 345 }}>
              <CardMedia
                sx={{ height: 140 }}
                image={a.coverimage}
                title={a.name}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {a.name}
                </Typography>
                <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                  {a.detail}
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small">Share</Button>
                <Button size="small">Learn More</Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  )
}

export default Page