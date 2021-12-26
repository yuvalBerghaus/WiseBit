const serviceUrl = 'http://localhost:8080';

const loginUser = (loginEmail, loginPassword) => {
    try {
        return fetch(`${serviceUrl}/api/auth/signin`, {
            method: "POST",
            credentials: "include",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                email: loginEmail,
                password: loginPassword,
            }),
        }).then((response) => {
            if (response.ok) {
                return false;
            } else {
                return true; // alert will popup
            }
        });
    } catch (err) {
        console.log("Error while fetching data");
    }
};

const handleLogin = (loginEmail, loginPassword) => {
    loginUser(loginEmail, loginPassword)
        .then(toAlert => {
            if (toAlert) {
                alert('Invalid username or password')
            } else {
                window.location.href = serviceUrl;
            }
        });
};

const logupUser = (username, email, phone, password) => {
    if(!username || !email || !password) {
        alert('Please fill all mandatory fields');
        return;
    }
    try {
        return fetch(`${serviceUrl}/api/auth/signup`, {
            method: "POST",
            credentials: "include",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                username: username,
                email: email,
                phone: phone,
                password: password
            }),
        }).then((response) => {
            
        });
    } catch (err) {
        console.log("Error while fetching data");
    }
};

/* Forms input animations */

const inputs = document.querySelectorAll(".input");

function addcl() {
    let parent = this.parentNode.parentNode;
    parent.classList.add("focus");
}

function remcl() {
    let parent = this.parentNode.parentNode;
    if (this.value == "") {
        parent.classList.remove("focus");
    }
}

inputs.forEach(input => {
    input.addEventListener("focus", addcl);
    input.addEventListener("blur", remcl);
});