>Keylogger Simulator (Educational Tool)

A simple web-based keylogger simulator built using HTML, CSS, and JavaScript. It demonstrates how keystrokes can be captured and displayed in real time within the browser for learning purposes only.

>⚠️ Disclaimer

This tool is strictly for educational purposes. It runs entirely in the browser and does not record, store, or transmit any data to a server.

>Features

Real-time keystroke detection from an input field

Displays each key pressed in a log area

Clear log functionality

Local-only operation (no network requests)

Safe DOM handling using textContent to prevent XSS

Clean and simple UI

>How It Works

The app listens for keyboard events (keydown) on the input field

Each key press is captured and appended to the log display

The log is updated dynamically in real time

A "Clear Log" button resets the displayed output

>Security Considerations

Uses textContent instead of innerHTML to prevent XSS attacks

No data is sent to any server

No persistent storage of keystrokes

Operates entirely within the browser

>Project Structure

index.html – Structure of the application

style.css – Styling and layout

script.js – Logic for capturing and displaying keystrokes

>How to Run

Download or clone the project

Open index.html in a web browser

Start typing in the input field to see keystrokes logged

Use the “Clear Log” button to reset the display

>Technologies Used

HTML5

CSS3

Vanilla JavaScript

>Future Improvements

Display special keys with labels (e.g., Backspace, Enter)

Add keystroke counters

Categorize keys (letters, numbers, symbols)

Export logs as a text file
