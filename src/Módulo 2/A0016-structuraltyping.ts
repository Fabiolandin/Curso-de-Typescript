//Structural Typing
type VerifyUserFn = (user: User, sentValue: User) => boolean;

type User = { username: string, password: string }

const verifyUser : VerifyUserFn = (user, setValue) => {
    return(
        user.username === setValue.username && user.password === setValue.password
    ) ;
};

const bdUser = { username: 'joao', password: '12345' }
const sentUser = { username: 'maria', password: '12345'}
const loggedIn = verifyUser(bdUser, sentUser)
console.log(loggedIn)