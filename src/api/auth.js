const BASE_URL = "https://univo-backend-avj0.onrender.com";

export const loginUser = async (email, password) => {
  try {
    const res = await fetch(`${BASE_URL}/api/auth/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ email, password })
    });

    return await res.json();
  } catch (err) {
    return {
      success: false,
      message: "Server error"
    };
  }
};
