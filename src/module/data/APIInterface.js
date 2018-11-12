function fetchHelper(url, { method = 'GET', body = null } = {}) {
  return fetch(url, {
    headers: {
      "Content-Type": "application/json",
    },
    method,
    body
  }).then(response => response.json())
}

function sendContactForm(data) {
  return fetchHelper('http://localhost:8888/contact', {
    method: 'POST',
    body: JSON.stringify(data)
  })
}

function getProducts() {
  return fetchHelper('http://localhost:8888/products')
}

export default {
  sendContactForm,
  getProducts,
}
