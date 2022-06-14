export const fetchLogin = async (email, password) => {
  try {
    return fetch('https://loft-taxi.glitch.me/auth', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({email, password})
  })
  .then(res => res.json())
  } catch (error) {
    console.log(error)
  }
}

export const fetchSignUp = async (email, password, name, surname) => {
  try {
    return fetch('https://loft-taxi.glitch.me/register', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({email, password, name, surname})
    })
    .then(res => res.json())
    
  } catch (error) {
    console.log(error)
  }
}

export const fetchPostCard = async (cardNumber, expiryDate, cardName, cvc, token ) => {
  try {
    return fetch('https://loft-taxi.glitch.me/card', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({cardNumber, expiryDate, cardName, cvc, token})
    })
    .then(res => res.json())
    
  } catch (error) {
    console.log(error)
  }
}

export const fetchAddressList = async () => {
  try {
    return fetch('https://loft-taxi.glitch.me/addressList')
    .then(res => res.json())
    
  } catch (error) {
    console.log(error)
  }
}

export const fetchRoutes = async (from, to) => {
  try {
    return fetch(`https://loft-taxi.glitch.me/route?address1=${from}&address2=${to}`)
    .then(res => res.json())
    
  } catch (error) {
    console.log(error)
  }
}
