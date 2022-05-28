export const serverLogin = async (email, password) => {
  try {
    console.log('serverLogin')
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

export const serverSignUp = async (email, password, name, surname) => {
  try {
    console.log('serverSignUp')
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

export const serverPostCard = async (cardNumber, expiryDate, cardName, cvc, token ) => {
  try {
    console.log('serverPostCard')
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
