const baseUrl = process.env.REACT_APP_BASE_URL;

// function sendOtpForSignUp(userInput) {
//   const url = `${baseUrl}/admin/signup`;
//   const response = fetch(url, {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify(userInput),
//   });
//   return response;
// }

function verifyOtp(userInput) {
  const url = `${baseUrl}/admin/verify`;
  const response = fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(userInput),
  });
  return response;
}

function login(userInput) {
  const url = `${baseUrl}/admin/login`;
  const response = fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(userInput),
  });
  return response;
}

function pwdResetOtpApi(userInput) {
  const url = `${baseUrl}/admin/pwdreset/otp`;
  const response = fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(userInput),
  });
  return response;
}

function pwdResetOtpVerifyApi(userInput) {
  const url = `${baseUrl}/admin/pwdreset/verify`;
  const response = fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(userInput),
  });
  return response;
}

export { verifyOtp, login, pwdResetOtpApi, pwdResetOtpVerifyApi };
