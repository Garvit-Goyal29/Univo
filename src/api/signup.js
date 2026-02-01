export const signupUser = async (userData) => {
  const res = await fetch("http://localhost:5001/api/signup","https://univo-backend-avj0.onrender.com/api/signup", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(userData)
  });

  return res.json();
};
