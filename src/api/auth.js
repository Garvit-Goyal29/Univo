export async function loginUser(email, password) {
  const response = await fetch("http://localhost:5001/api/auth/login","https://univo-backend-avj0.onrender.com/api/auth/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ email, password })
  });

  return response.json();
}