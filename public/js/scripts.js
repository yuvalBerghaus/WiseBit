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

const userMenu = () => {
    $('#userMenu').toggle()
}

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

/* Categories */
const getCategoryNameByIndex = (index) => {
    if(index == 0)  return 'Home';
    if(index == 1)  return 'Grocery';
    if(index == 2)  return 'Hangout';
    if(index == 3)  return 'Patrol';
};

const renderCategories = () => {
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

            user.expenses.map((expense, index) => {
                $('#categories').append(
                    `
                        <div class="category">
                            <div class="single-chart">
                                <svg viewBox="0 0 36 36" class="circular-chart ${index % 2 == 0 ? 'green' : 'blue'}">
                                <path class="circle-bg"
                                    d="M18 2.0845
                                    a 15.9155 15.9155 0 0 1 0 31.831
                                    a 15.9155 15.9155 0 0 1 0 -31.831"
                                />
                                <path class="circle"
                                    stroke-dasharray="${parseFloat(expense.amount_spent/user.allowed_budget[index].sum*100).toFixed(1)}, 100"
                                    d="M18 2.0845
                                    a 15.9155 15.9155 0 0 1 0 31.831
                                    a 15.9155 15.9155 0 0 1 0 -31.831"
                                />
                                <text x="18" y="20.35" class="percentage">${parseFloat(expense.amount_spent/user.allowed_budget[index].sum*100).toFixed(1)}%</text>
                                </svg>
                            </div>
                            <div class="infoAndExpense">
                                <div class="categoryInfo">
                                    <p>${getCategoryNameByIndex(index)}</p>
                                    <p>${parseFloat(expense.amount_spent/user.allowed_budget[index].sum*100).toFixed(1)}% of budget</p>
                                </div>
                                <p class="expense">$${expense.amount_spent}</p>
                            </div>
                        </div>
                    `
                )
            })
 
        })
    })
}

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
/****/

inputs.forEach(input => {
    input.addEventListener("focus", addcl);
    input.addEventListener("blur", remcl);
});

const check = () => {
    const newExpense = {
        "categoryId": document.forms["myForm"]["type"].value,
        "price": document.forms["myForm"]["price"].value,
    };
    $.ajax({
        type: "PUT",
        url: "http://localhost:8080/api/users/",
        data: newExpense,
        success:(response)=>{
            window.location.href="http://localhost:8080";
        },
        error: (response) => {
            window.location.href="http://localhost:8080";
        }
    });

    return false;
}