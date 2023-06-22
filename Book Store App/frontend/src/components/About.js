import React from "react";
import { Box, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import "./About.css"; // Import the custom CSS file

const About = () => {
  const theme = useTheme();

  return (
    <Box className="about-container">
      <Typography variant="h2" className="about-heading">
        Welcome to our Book Store App!
      </Typography>
      <Typography variant="h4" className="about-subheading">
        At our Book Store, we strive to provide an exceptional experience for
        book lovers and enthusiasts. Our user-friendly application allows you to
        explore a vast collection of books, add new books, and delete them as
        needed.Here's what sets us apart:
      </Typography>
      <Typography variant="h5" className="about-content">
        Easy Book Addition: Adding a new book to our catalog is a breeze.
        Whether you're an author, publisher, or simply a passionate reader, you
        can easily contribute to our collection by adding books and providing
        essential details like the book's title, author, price, and cover image.
        <br />
        <br />
        Simplified Book Deletion: We understand that book collections can evolve
        over time. If you no longer wish to keep a book in your personal
        library, our app allows you to effortlessly remove it from your list
        with just a few clicks. Keep your collection curated and up-to-date with
        ease.
      </Typography>
    </Box>
  );
};

export default About;
