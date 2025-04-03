// DOM Elements
const userBtn = document.getElementById('userBtn');
const chefBtn = document.getElementById('chefBtn');
const loginTab = document.getElementById('loginTab');
const signupTab = document.getElementById('signupTab');
const loginRoleInput = document.getElementById('loginRoleInput');
const signupRoleInput = document.getElementById('signupRoleInput');
const loginButton = document.getElementById('loginButton');
const signupButton = document.getElementById('signupButton');
const loginForm = document.getElementById('loginFormContainer');
const signupForm = document.getElementById('signupFormContainer');
const chefAdditionalInfo = document.getElementById('chefAdditionalInfo');
const landingPage = document.getElementById('landingPage');
const userDashboard = document.getElementById('userDashboard');
const chefDashboard = document.getElementById('chefDashboard');
const userDisplayName = document.getElementById('userDisplayName');
const chefDisplayName = document.getElementById('chefDisplayName');
const filterBtns = document.querySelectorAll('.filter-btn');
const switchToSignup = document.getElementById('switchToSignup');
const switchToLogin = document.getElementById('switchToLogin');

// Auth tab switching
loginTab.addEventListener('click', () => {
    loginTab.classList.add('active');
    signupTab.classList.remove('active');
    loginForm.classList.add('active');
    signupForm.classList.remove('active');
});

signupTab.addEventListener('click', () => {
    signupTab.classList.add('active');
    loginTab.classList.remove('active');
    signupForm.classList.add('active');
    loginForm.classList.remove('active');
});

// Switch between forms links
switchToSignup.addEventListener('click', (e) => {
    e.preventDefault();
    signupTab.click();
});

switchToLogin.addEventListener('click', (e) => {
    e.preventDefault();
    loginTab.click();
});

// Role toggle functionality
userBtn.addEventListener('click', () => {
    userBtn.classList.add('active');
    chefBtn.classList.remove('active');
    loginRoleInput.value = 'user';
    signupRoleInput.value = 'user';
    chefAdditionalInfo.style.display = 'none';
});

chefBtn.addEventListener('click', () => {
    chefBtn.classList.add('active');
    userBtn.classList.remove('active');
    loginRoleInput.value = 'chef';
    signupRoleInput.value = 'chef';
    chefAdditionalInfo.style.display = 'block';
});

// Ensure the correct form is displayed on page load
window.addEventListener('load', () => {
    if (loginTab.classList.contains('active')) {
        loginForm.classList.add('active');
        signupForm.classList.remove('active');
    } else {
        signupForm.classList.add('active');
        loginForm.classList.remove('active');
    }
});

// Login functionality
loginButton.addEventListener('click', (e) => {
    e.preventDefault();
    const role = loginRoleInput.value;
    landingPage.style.display = 'none';
    if (role === 'user') {
        userDashboard.style.display = 'block';
    } else if (role === 'chef') {
        chefDashboard.style.display = 'block';
    }
});

// Signup functionality
signupButton.addEventListener('click', (e) => {
    e.preventDefault();
    const role = signupRoleInput.value;
    landingPage.style.display = 'none';
    if (role === 'user') {
        userDashboard.style.display = 'block';
    } else if (role === 'chef') {
        chefDashboard.style.display = 'block';
    }
});
