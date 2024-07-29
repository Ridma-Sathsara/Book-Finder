import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Card, CardContent, Typography, Box,  } from '@mui/material';
import Loading from "../Loader/Loader";
import coverImg from "../../images/not found.jpeg";
import "./BookDetails.css";
import { FaArrowLeft } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';

const URL = "https://openlibrary.org/works/";

const BookDetails = () => {
  const { id } = useParams();
  const [loading, setLoading] = useState(false);
  const [book, setBook] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    setLoading(true);
    async function getBookDetails() {
      try {
        const response = await fetch(`${URL}${id}.json`);
        const data = await response.json();
        console.log(data);

        if (data) {
          const { description, title, covers, subject_places, subject_times, subjects } = data;
          const newBook = {
            description: description ? description.value : "No description found",
            title: title,
            cover_img: covers ? `https://covers.openlibrary.org/b/id/${covers[0]}-L.jpg` : coverImg,
            subject_places: subject_places ? subject_places.join(", ") : "No subject places found",
            subject_times: subject_times ? subject_times.join(", ") : "No subject times found",
            subjects: subjects ? subjects.join(", ") : "No subjects found"
          };
          setBook(newBook);
        } else {
          setBook(null);
        }
        setLoading(false);
      } catch (error) {
        console.log(error);
        setLoading(false);
      }
    }
    getBookDetails();
  }, [id]);

  if (loading) return <Loading />;

  return (
    <section className='book-details'>
      <div className='container'>
        <button type='button' className='flex flex-c back-btn' onClick={() => navigate("/book")}>
          <FaArrowLeft size={22} />
          <span className='fs-18 fw-6'>Go Back</span>
        </button>

        <Card sx={{
          display: 'flex',
          flexDirection: { xs: 'column', md: 'row' },
          boxShadow: 3,
          width: '100%',
          borderRadius: 1,
          overflow: 'hidden',
          mb: 3,
        }}>
          <Box sx={{ flexShrink: 0, width: { xs: '100%', md: '300px' } }}>
            <img src={book?.cover_img} alt="cover img" style={{ width: '100%', height: 'auto' }} />
          </Box>

          <CardContent sx={{ flex: 1, textAlign: 'left', padding: 2 }}>
            <Typography variant="h4" component="div" gutterBottom sx={{ fontSize: { xs: '2rem', md: '2.5rem' } }}>
              {book?.title}
            </Typography>
            <Typography variant="body1" color="text.secondary" paragraph sx={{ fontSize: { xs: '1rem', md: '1.2rem' } }}>
              {book?.description}
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{ fontSize: { xs: '1.2rem', md: '1.5rem' } }}>
              <Box component="span" sx={{ fontWeight: 'bold' }}>Subject Places: </Box>
              <Box component="span" sx={{ fontStyle: 'italic' }}>{book?.subject_places}</Box>
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{ fontSize: { xs: '1.2rem', md: '1.5rem' }, mt: 1 }}>
              <Box component="span" sx={{ fontWeight: 'bold' }}>Subject Times: </Box>
              <Box component="span" sx={{ fontStyle: 'italic' }}>{book?.subject_times}</Box>
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{ fontSize: { xs: '1rem', md: '1.3rem' }, mt: 1 }}>
              <Box component="span" sx={{ fontWeight: 'bold' }}>Subjects: </Box>
              <Box component="span">{book?.subjects}</Box>
            </Typography>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}

export default BookDetails;
