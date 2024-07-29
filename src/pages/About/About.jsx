import React from 'react';
import "./About.css";
import aboutImg from "../../images/about.jpg";
import { Card, CardContent, Typography, Box } from '@mui/material';

const About = () => {
  return (
    <section className='about'>
      <div className='container'>
        <div className='section-title'>
          <h2>About</h2>
        </div>

        <Card sx={{ 
          display: 'flex', 
          flexDirection: { xs: 'column', md: 'row' }, 
          boxShadow: 3, 
          width: '100%', 
          borderRadius: 1, 
          overflow: 'hidden', 
          mb: 3 
        }}>
          <Box sx={{ flexShrink: 0, width: { xs: '100%', md: '300px' } }}>
            <img src={aboutImg} alt="about" className='about-img' style={{ width: '100%', height: 'auto' }} />
          </Box>
          <CardContent sx={{ flex: 1, textAlign: 'left', padding: 2 }}>
            <Typography variant="h5" component="div" sx={{ mb: 2, fontSize: '2rem' }}>
              <h2 className='about-title fs-26 ls-1'>About REVIEWREADS</h2>
            </Typography>
            <Typography variant="body1" component="p" className='fs-17' sx={{ mb: 2, fontSize: '1.525rem' }}>
              REVIEWREADS is your ultimate destination for insightful and comprehensive book reviews. Whether you're an avid reader searching for your next great read or a casual book lover looking for recommendations, 
              REVIEWREADS offers a wealth of information and opinions on a wide variety of genres. Our platform features detailed reviews, ratings, and discussions that help you make informed decisions about which books to add to your reading list. 
              Dive into a community of book enthusiasts, discover hidden gems, and share your own reviews to contribute to our growing database. At REVIEWREADS, we believe that every book has a story to tell, and we're here to help you find it.
            </Typography>
          </CardContent>
        </Card>

        <div className="additional-content">
          {/* You can add more content here if needed */}
        </div>
      </div>
    </section>
  );
}

export default About;
