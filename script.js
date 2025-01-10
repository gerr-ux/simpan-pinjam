function login() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const errorElement = document.getElementById('login-error');

    // Simulasi login sederhana
    if (username === "user" && password === "pass") {
        errorElement.textContent = '';
        document.getElementById('login').classList.add('hidden');
        document.getElementById('home').classList.remove('hidden');
    } else {
        errorElement.textContent = 'Username atau password salah!';
    }
}

function logout() {
    document.getElementById('home').classList.add('hidden');
    document.getElementById('login').classList.remove('hidden');
}

function showTransactions() {
    document.getElementById('home').classList.add('hidden');
    document.getElementById('transactions').classList.remove('hidden');
}

function showProfile() {
    document.getElementById('home').classList.add('hidden');
    document.getElementById('profile').classList.remove('hidden');
}

function showHome() {
    document.getElementById('transactions').classList.add('hidden');
    document.getElementById('profile').classList.add('hidden');
    document.getElementById('home').classList.remove('hidden');
}

document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Simulasi login
    if (username === 'user' && password === 'pass') {
        window.location.href = 'beranda.html';
    } else {
        document.getElementById('error').innerText = 'Username atau password salah!';
    }
});