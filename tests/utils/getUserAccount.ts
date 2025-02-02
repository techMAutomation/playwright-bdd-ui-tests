interface UserAccount {
    username: string;
    password: string;
}

export const getUserAccount = (): UserAccount => {
    if (!process.env.USERNAME || !process.env.PASSWORD) {
        throw Error('USERNAME or PASSWORD are not defined!');
    }
    return {
        username: process.env.USERNAME,
        password: process.env.PASSWORD,
    }
}
