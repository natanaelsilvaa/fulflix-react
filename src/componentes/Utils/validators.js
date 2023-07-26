const ValidarEmail = (email) => {
    return email?.toString().includes('@') && email?.toString().includes('.')
}

const ValidarPassword = (password) => {
    return password?.toString().length > 6
}

export {
    ValidarEmail,
    ValidarPassword,
}