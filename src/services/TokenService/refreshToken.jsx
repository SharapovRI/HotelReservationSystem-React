async function refresh() {
  const payload = { RefreshToken: localStorage.getItem("refreshToken") };
  const response = await axios.post('https://localhost:44382/Authorization/refresh-token', payload)
    .then(response => response.data).catch(error => console.log(error));

  if (response) {
    localStorage.setItem("jwtToken", response.jwtToken);
    localStorage.setItem("refreshToken", response.refreshToken);
    window.location.reload();
  }
}