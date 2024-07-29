import React, { useEffect } from 'react';
import {  Typography,  Box, CssBaseline } from '@mui/material';
import Navbar from "../Navbar/Navbar";
import SearchForm from "../SearchForm/SearchFrom";
import "./Header.css";

const Header = () => {
  useEffect(() => {
    function getRandom(min, max) {
      return Math.random() * (max - min) + min;
    }

    function createStar() {
      const star = document.createElement('div');
      star.classList.add('star');
      star.style.setProperty('--top-offset', `${getRandom(0, 100)}vh`);
      star.style.setProperty('--star-tail-length', `${getRandom(5, 10)}em`);
      star.style.setProperty('--fall-duration', `${getRandom(6, 12)}s`);
      star.style.setProperty('--fall-delay', `${getRandom(0, 10)}s`);
      return star;
    }

    function addStars(count) {
      const container = document.querySelector('.stars');
      for (let i = 0; i < count; i++) {
        const star = createStar();
        container.appendChild(star);
      }
    }

    // Create 50 stars
    addStars(50);
  }, []);

  return (
    <div className='holder'>
      <CssBaseline />
      <header className='header'>
        <Navbar />
        <Box
          className='header-content'
          sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            color: 'white',
            textAlign: 'center',
            position: 'relative',
          }}
        >
          <div className='stars'>
            {/* Stars will be dynamically added here */}
          </div>
          <Typography
            variant="h2"
            component="h2"
            className='header-title'
          >
            Find your book of choice.
          </Typography>
          <br />
          <Typography
            variant="body1"
            component="p"
            className='header-text'
          >
            <Typography variant="body1"
            component="p"
            sx={{
              marginTop: '-1.8rem',
              marginBottom: '2.8rem',
              opacity: 0.8,
              maxWidth: '770px',
              fontSize: '1.125rem', // equivalent to fs-18
              fontWeight: 300, // equivalent to fw-3
              position: 'relative',
              zIndex: 1,
            }}>
              "Explore a world of knowledge with our vast collection of books, offering insights and inspiration across every genre and topic imaginable."
            </Typography>
          </Typography>
          <SearchForm />
        </Box>
      </header>
    </div>
  );
}

export default Header;