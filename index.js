let navLinks = document.getElementById("navLinks");

function showMenu() {
    if (window.innerWidth <= 750) {  // Check if screen width is 750px or less
        navLinks.style.transform = "translateX(0)";
        navLinks.style.opacity = "1";
        navLinks.style.transition = "transform 0.5s ease, opacity 0.5s ease";
    }
}

function hideMenu() {
    if (window.innerWidth <= 750) {  // Check if screen width is 750px or less
        navLinks.style.transform = "translateX(100%)";
        navLinks.style.opacity = "0";
        navLinks.style.transition = "transform 0.5s ease, opacity 0.5s ease";
    }
}

let menuLinks = document.querySelectorAll('.nav-links ul li a');
menuLinks.forEach(link => {
    link.addEventListener('click', hideMenu);
});

// Optional: Add event listeners for window resize to handle dynamic screen size changes
window.addEventListener('resize', () => {
    if (window.innerWidth > 750) {
        navLinks.style.transform = "none";  // Reset for larger screens
        navLinks.style.opacity = "1";       // Ensure the menu is visible on larger screens
    }
});


// ------------text style----------------
let typed = new Typed("#element", {
    strings: ["Mohan Jaiswal", "WebDevper"],
    typeSpeed: 150,
    backSpeed: 90,
    loop: true,
});


// --------For  More Buton -------

document.querySelector('.more-project a').addEventListener('click', function (e) {
    e.preventDefault();
    
    const moreContent = document.querySelector('.moreContent');
    const moreBtn = document.querySelector('.more-project a');
    
    // Check the current maxHeight
    if (moreContent.style.maxHeight === '0px' || !moreContent.style.maxHeight) {
        // Expand the content
        moreContent.style.display = 'block';  // Ensure it's visible
        moreContent.style.maxHeight = moreContent.scrollHeight + 'px'; // Expand to the full height
        moreBtn.innerHTML = 'LESS PROJECT <svg width="25px" height="25px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M19.7071 15.7071C19.3166 16.0976 18.6834 16.0976 18.2929 15.7071L12 9.41421L5.70711 15.7071C5.31658 16.0976 4.68342 16.0976 4.29289 15.7071C3.90237 15.3166 3.90237 14.6834 4.29289 14.2929L11.2929 7.29289C11.6834 6.90237 12.3166 6.90237 12.7071 7.29289L19.7071 14.2929C20.0976 14.6834 20.0976 15.3166 19.7071 15.7071Z" fill="#53D3B9"/></svg>';
    } else {
        // Collapse the content
        moreContent.style.maxHeight = '0px'; // Collapse smoothly
        moreBtn.innerHTML = 'MORE PROJECT <svg width="25px" height="25px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M4.29289 8.29289C4.68342 7.90237 5.31658 7.90237 5.70711 8.29289L12 14.5858L18.2929 8.29289C18.6834 7.90237 19.3166 7.90237 19.7071 8.29289C20.0976 8.68342 20.0976 9.31658 19.7071 9.70711L12.7071 16.7071C12.3166 17.0976 11.6834 17.0976 11.2929 16.7071L4.29289 9.70711C3.90237 9.31658 3.90237 8.68342 4.29289 8.29289Z" fill="#53D3B9"/></svg>';
        
        // Hide the element after transition completes
        setTimeout(() => {
            moreContent.style.display = 'none';
        }, 1000); // Match the transition duration
    }
});


// --------------Post 
const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

// Middleware to parse form data
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Serve static files (HTML, CSS, and client-side JS)
app.use(express.static('public'));

// Nodemailer configuration
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'your-email@gmail.com', // Replace with your email
        pass: 'your-email-password',  // Replace with your email password or app password if 2FA enabled
    },
});

// Handle form submission (POST request)
app.post('/send', (req, res) => {
    const { name, email, subject, message } = req.body;

    const mailOptions = {
        from: email,
        to: 'webdevperofficial@gmail.com', // Recipient's email
        subject: subject,
        text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.log(error);
            res.send('Error sending email');
        } else {
            console.log('Email sent: ' + info.response);
            res.send('Email successfully sent');
        }
    });
});

// Start server
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
