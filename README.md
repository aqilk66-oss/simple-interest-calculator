# TravelBloom - Travel Recommendation Web Application

TravelBloom is an interactive, responsive web application designed to help travelers find tailored recommendations for vacation destinations around the world. Whether users are searching for tropical beaches, historic sacred temples, or exciting country getaways, TravelBloom delivers curated suggestions with images and descriptions.

---

## Features

1. **Intuitive Navigation Bar:**
   - Links for **Home**, **About Us**, and **Contact Us**.
   - Destination **Search bar input** with instant keyword matching.
   - Dedicated **Search** and **Clear** action buttons.

2. **Smart Destination Recommendations:**
   - Recommends at least two tropical beaches (e.g. Bora Bora, Copacabana) when searching for "beach" or "beaches".
   - Recommends sacred historic temples (e.g. Angkor Wat, Taj Mahal) when searching for "temple" or "temples".
   - Recommends major global cities and destinations (e.g. Sydney, Tokyo) when searching for "country" or "countries".

3. **Dedicated Pages:**
   - **Home (`index.html`):** Hero section with exploration motto and search functionality.
   - **About Us (`about.html`):** Company overview, mission statement, and team member bios.
   - **Contact Us (`contact.html`):** Contact details and a functional message inquiry form (Name, Email, Message).

4. **External API/JSON Integration:**
   - Fetches destination data dynamically from `travel_recommendation_api.json`.

---

## Project Structure

```text
travel-recommendation/
??? index.html                     # Home page
??? travel_recommendation.html     # Alternative entry point
??? about.html                     # About Us page
??? contact.html                   # Contact Us page with message form
??? travel_recommendation.css      # Modern responsive stylesheet
??? travel_recommendation.js       # Search handling, DOM manipulation, JSON fetch
??? travel_recommendation_api.json # Destinations dataset (countries, temples, beaches)
??? README.md                      # Project documentation
```

---

## Authors & Acknowledgments

- **Developer:** Muhammad Aqil Khan ([aqilk66-oss](https://github.com/aqilk66-oss))
- **Course:** IBM Front-End / Full Stack Developer Professional Certificate (Coursera)
- **License:** Apache License 2.0
