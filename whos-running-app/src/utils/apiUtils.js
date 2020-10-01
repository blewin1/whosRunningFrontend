import axios from "axios";

const apiBase = "https://whos-running-app-api.herokuapp.com";

export const getCandidates = async () => {
    try {
        const res = await axios.get(`${apiBase}/candidates`);
        return res.data;
    } catch (err) {
        console.error(err);
    }
};

export const getUser = async () => {
    const userID = parseInt(localStorage.getItem("userID"));
    if (userID) {
        try {
            const res = await axios.get(`${apiBase}/users/${userID}`);
            const address = JSON.parse(res.data.address)
            console.log("address ",address )
            return {...res.data, address: address};
        } catch (err) {
            console.error(err);
        }
    }
};

export const login = async (email) => {
    try {
        const res = await axios.post(`${apiBase}/users/login`, { user: { email: email.toLowerCase() } });
        if (res.status === 200) {
            localStorage.setItem("userID", res.data.id);
            const address = JSON.parse(res.data.address)
            return {...res.data, address: address};
        } else {
            console.error("User login failed, try again?");
            return null;
        }
    } catch (err) {
        console.error(err);
        return null;
    }
}

//userInfo should be {name: '', email: '', address: {*same as input format from front page*} }

//TODO: address to JSON
export const createUser = async (userInfo) => {
    try {
        const address = JSON.stringify(userInfo.address)
        const email = userInfo.email.toLowerCase();
        const user = {...userInfo, address: address, email: email}
        console.log('USER: ', user)
        const res = await axios.post(`${apiBase}/users`, { user: user });
        if (res.status === 201) {
            localStorage.setItem("userID", res.data.id);
            return res.data;
        } else {
            console.error("User creation failed, try again?");
        }
    } catch (err) {
        console.error(err);
    }
};

export const addFavorite = async (userID, candidateID) => {
    try {
        const res = await axios.post(`${apiBase}/favorites`, {
            favorite: { user_id: userID, candidate_id: candidateID },
        });
        if (res.status === 201) {
            return res.data;
        } else {
            console.error("Favorite adding failed, try again?");
        }
    } catch (err) {
        console.error(err);
    }
};
