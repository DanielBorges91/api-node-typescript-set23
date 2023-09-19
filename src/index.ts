interface User {
    birthYear: number
}

function calculateAgeOfUser(user: User) {
    return new Date().getFullYear() - user.birthYear
}

calculateAgeOfUser('Daniel') // O Javascript não consegue identificar se o parâmetro informato é adequado a função.
calculateAgeOfUser({}) // O Javascript não consegue sozinho identificar a falta dos parâmetros.

const result = calculateAgeOfUser({
    birthYear: 1994
})