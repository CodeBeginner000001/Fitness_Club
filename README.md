Sure, here's the updated README file with the additional information:

# Fitness Club Website

## Table of Contents
- [Overview](#overview)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Usage](#usage)
- [File Structure](#file-structure)
- [Contributing](#contributing)
- [Acknowledgements](#acknowledgements)
- [Contact](#contact)

## Overview
The Fitness Club Website is a comprehensive platform designed to help users find and learn about various exercises. Users can search for exercises based on body parts, equipment, and target muscles. Additionally, users can select from exercise cards displayed below the search bar to get detailed information about each exercise, including how to perform it, its name, related YouTube videos, and similar exercises.

## Features
- **Search Functionality:** Allows users to search for exercises based on body parts, equipment, and target muscles.
- **Exercise Cards:** Users can select exercises from cards displayed below the search bar.
- **Detailed Exercise Information:** Each exercise card provides detailed information, including the exercise name, how to perform it, related YouTube videos, and similar exercises.
- **Responsive Design:** Ensures a great user experience on both desktop and mobile devices.

## Technologies Used
- **React with Vite:** For building the frontend application.
- **CSS:** For styling the website and making it visually appealing.
- **JavaScript:** For adding interactivity and dynamic behavior.
- **RapidAPI:** For fetching exercise data from ExerciseDB API and related videos from YouTube Search and Download API.
- **NPM:** For managing project dependencies and scripts.

## Installation
1. **Clone the repository:**
   ```bash
   git clone https://github.com/CodeBeginner000001/Fitness_Club.git
   ```
2. **Navigate to the project directory:**
   ```bash
   cd Fitness_Club
   ```
3. **Install dependencies:**
   ```bash
   npm install
   ```
4. **Run the application:**
   ```bash
   npm run dev
   ```
5. **Build the application:**
   ```bash
   npm run build
   ```
6. **Preview the build:**
   ```bash
   npm run preview
   ```

## Usage
1. **Search for Exercises:**
   - Use the search bar to find exercises based on body parts, equipment, or target muscles.
2. **Select from Exercise Cards:**
   - Browse through the exercise cards displayed below the search bar.
   - Click on an exercise card to view detailed information about the exercise.
3. **View Exercise Information:**
   - Get detailed information on how to perform the exercise, its name, and related YouTube videos.
   - Explore similar exercises and equipment-based exercises.

## File Structure
```
fitness-club-website/
│
├── public/            # Public assets
├── src/               # Source files
│   ├── components/    # React components
│   ├── pages/         # React pages
│   ├── utils/         # Utility functions and helpers
│   ├── App.jsx        # Main application component
│   ├── index.css      # Global CSS
│   └── main.jsx       # Entry point for the application
├── .gitignore         # Git ignore file
├── package.json       # NPM package file
├── README.md          # README file
└── vite.config.js     # Vite configuration file
```

## Contributing
Contributions are welcome! If you would like to contribute to this project, please follow these steps:
1. Fork the repository.
2. Create a new branch: `git checkout -b feature/your-feature-name`
3. Commit your changes: `git commit -m 'Add some feature'`
4. Push to the branch: `git push origin feature/your-feature-name`
5. Open a pull request.

## Acknowledgements
- Exercise data is sourced from the [ExerciseDB API](https://rapidapi.com/justin-WFnsXH_t6/api/exercisedb).
- YouTube videos are fetched using the [YouTube Search and Download API](https://rapidapi.com/h0p3rwe/api/youtube-search-and-download).
- Powered by [RapidAPI](https://rapidapi.com/).

## Contact
For any questions or suggestions, please contact [ashu2100ag@gmail.com](mailto:ashu2100ag@gmail.com).

Enjoy exploring and learning with the Fitness Club Website!
