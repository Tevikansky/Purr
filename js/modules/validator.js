const validator = () => {
  const inputs = document.querySelectorAll("[name=name], [name=venue_name], [name=venue_city], [name=state_city], [name=subject]")
  const email = document.querySelector('[name=email]')

  console.log(inputs)
  inputs.forEach((input) => {
    input.addEventListener('input', (e) => {
      e.target.value = e.target.value.replace(/[_\/'"№., 0-9а-яА-Я]+/g, '')

    })
  })

  email.addEventListener('input', (e) => {
    e.target.value = e.target.value.replace(/[^\@\-\_\.\!\~\*\'\w]+/gi, '')
  })


}

validator()