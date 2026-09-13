# Simple Interest Calculator

A simple and interactive web-based application to calculate simple interest based on the principal amount, annual rate of interest, and tenure (in years).

---

## Project Overview

This project was developed as part of the **IBM & Coursera Full Stack / Front-End Developer Course**. It provides an intuitive calculator to help users determine the total interest and final amount for loans or investments.

---

## Formula

The application uses the standard simple interest formula:

```text
Simple Interest = (Principal * Rate * Time) / 100
Total Amount    = Principal + Simple Interest
```

Where:
- **Principal (P)**: Initial sum of money borrowed or invested.
- **Rate (R)**: Annual interest rate (%).
- **Time (T)**: Duration in years.

---

## Features

- **Dynamic Range Slider:** Adjust the interest rate interactively with live percentage feedback.
- **Input Validation:** Prevents negative or empty principal amounts with helpful alerts.
- **Automatic Year Computation:** Calculates the future maturity year based on the current calendar year.
- **Clean UI:** Responsive, accessible, and user-friendly interface.

---

## Repository Structure

```text
simple-interest-calculator/
├── index.html      # Main HTML layout and form controls
├── style.css       # Visual styles, responsiveness, and card layout
├── script.js       # Interest calculation logic and event handlers
└── README.md       # Project overview and documentation
```

---

## How to Run Locally

1. Clone the repository:
   ```bash
   git clone https://github.com/aqilk66-oss/simple-interest-calculator.git
   ```
2. Open index.html in your web browser.

---

## Author & Acknowledgments

- **Author:** [aqilk66-oss](https://github.com/aqilk66-oss)
- **Course:** IBM Full Stack / Front-End Developer Professional Certificate (Coursera)
- **License:** Apache License 2.0 / MIT
