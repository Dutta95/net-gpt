export const formValidator = (email, password) => {
    if (!/^[a-zA-Z0-9_.±]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$/.test(email)) return "Not a valid email address ❌"
    if (!/^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*\W)(?!.* ).{8,16}$/.test(password)) return "Not a valid password ❌"
    return null;
}