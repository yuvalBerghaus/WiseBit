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

const logupUser = (username, email, password, desiredBudget) => {
    if(!desiredBudget) {
        desiredBudget = 1000;
    }
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
                password: password,
                desired_budget: desiredBudget
            }),
        }).then(() => {
            window.location.href = serviceUrl;
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
const check = () => {
    // const newExpense = {
    //     "categoryId": document.forms["myForm"]["type"].value,
    //     "price": document.forms["myForm"]["price"].value,
    // };
    console.log("newExpense");
    // const res = $.ajax({
    //     type: "PUT",
    //     url: "http://localhost:8080/api/users",
    //     data: newExpense,
    //     success:(res)=>{
    //         fetch("http://localhost:8080");
    //     },
    //     error: (response) => {
    //         fetch("http://localhost:8080");
    //         // fileErrorTreatment(response.status);
    //     }
    // });

    return false;
}
