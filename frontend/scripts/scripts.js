const serviceUrl = 'http://localhost:8080';
let User = {};

const loginUser = (loginEmail, loginPassword) => {
  try {
    return fetch(`${serviceUrl}/api/auth/login`, {
      method: "POST",
      credentials: "include",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email: loginEmail,
        password: loginPassword,
      }),
    }).then((response) => {
      console.log(response.body);
      if (response.ok) {
        return response;
      } else if (response.status === 400 || response.status === 401) {
        return false; // Alert will popup
      }
    });
  } catch (err) {
    console.log("Error while fetching data");
  }
};

const handleLogin = (loginEmail, loginPassword) => {
    const popupAlert = () => {
        loginUser(loginEmail, loginPassword)
          .then((response) => response.json())
          .then(user => {
            if(!user.error) {    // Authenticated
              User = user ;
              // 
            } else {
              alert('Invalid username or password')
            }
        });
    };
    popupAlert();
};