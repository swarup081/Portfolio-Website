const scriptURL = 'https://script.google.com/macros/s/AKfycbwMH0gIttvmMJzcZaHFg9N40RRpwf3iKBnOGjFMyMEqGpGWPKy28wFy9E3CfZTQ6pSC/exec'
const form = document.forms['submit-to-google-sheet']

form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response => console.log('Success!', response))
    .catch(error => console.error('Error!', error.message))
})
