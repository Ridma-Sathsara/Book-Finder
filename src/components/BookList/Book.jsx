import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardMedia, CardContent, Typography, Box, Grid } from '@mui/material';
import "./BookList.css";

const Book = (book) => {
  // Changes made here:
  const authors = book.author && Array.isArray(book.author) ? book.author.join(", ") : "Unknown author";
  const editions = book.edition_count ? book.edition_count : "N/A";
  const publishYear = book.first_publish_year ? book.first_publish_year : "N/A";

  return (
    <Grid item xs={12} sm={6} md={4}>
      <Card sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', height: '100%', boxShadow: 3, '&:hover': { boxShadow: 6, transform: 'scale(1.05)', transition: 'transform 0.3s ease-in-out' } }}>
        <CardMedia
          component="img"
          height="300"
          image={book.cover_img}
          alt="cover"
        />
        <CardContent sx={{ textAlign: 'center', background: 'linear-gradient(to bottom, #ffffff, #BBDEFB)' }}>
          <Link to={`/book/${book.id}`} {...book}>
            <Typography variant="h6" component="div" sx={{ fontWeight: 'bold', fontSize: '18px' }}>
              {book.title}
            </Typography>
          </Link>
          <Typography variant="body2" color="text.secondary" sx={{ marginTop: '8px' }}>
            <Box component="span" sx={{ fontWeight: 'bold', fontSize: '1.175rem' }}>Author: {authors}</Box>
          </Typography>
          <Typography variant="body2" color="text.secondary">
            <Box component="span" sx={{ fontWeight: 'bold', fontSize: '1.175rem' }}>Total Editions: {editions}</Box>
          </Typography>
          <Typography variant="body2" color="text.secondary">
            <Box component="span" sx={{ fontWeight: 'bold', fontSize: '1.175rem' }}>First Publish Year: {publishYear}</Box>
          </Typography>
        </CardContent>
      </Card>
    </Grid>
  )
}

export default Book;
