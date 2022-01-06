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

const displayBalance = () => {
    fetch(`${serviceUrl}/api/auth/userid`, { credentials: 'include' })
    .then(response => {
        return response.text();
    }).then(data => {
        fetch(`${serviceUrl}/api/users/${data}`)
        .then(response => {
            return response.text();
        })
        .then(str => {
            const user = JSON.parse(str);
            const sum = (prev, curr) => prev + curr.amount_spent;

            const desiredBudget = user.desired_budget;
            const expenses = user.expenses.reduce(sum, 0);
            const balance = desiredBudget - expenses;

            $('#balance').text(balance+'$')
            
        })
    })
}

displayBalance();

/* Insert user Id to display graph */
const updateGraph = () => {
    fetch(`${serviceUrl}/api/auth/userid`, { credentials: 'include' })
    .then(response => {
        return response.text();
    }).then(data => {
        const src = $('iframe').attr('src');
        newSrc = src.replace('ObjectId()', `ObjectId('${data}')`);
        $('iframe').attr('src', newSrc);
    })
}

updateGraph();

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
// alert("newExpense");
const check = () => {
    const newExpense = {
        "categoryId": document.forms["myForm"]["type"].value,
        "price": document.forms["myForm"]["price"].value,
    };
    // alert("newExpense");
    const res = $.ajax({
        type: "PUT",
        url: "http://localhost:8080/api/users/",
        data: newExpense,
        success:(response)=>{
            window.location.href="http://localhost:8080";
            console.log("hello");
        },
        error: (response) => {
            window.location.href="http://localhost:8080";
            // alert("dd");
            // fileErrorTreatment(response.status);
        }
    });

    return false;
}
