function register(ev) {
    const section = ev.currentTarget.parentNode
    const username = section.children.username.value
    const password = section.children.password.value
    const passwordConfirmation = section.children.passwordConfirmation.value
    console.log({username, password, passwordConfirmation})
    password == passwordConfirmation ? confirm(`Usuário ${username}, cadastrado com sucesso!`)
    :  confirm(`Senhas divergentes!`)
    
}


const button = document.getElementById('register-button')

button.addEventListener('click', register)

function removeEvent() {
    button.removeEventListener('click', register)
    alert("Event Remove")
}