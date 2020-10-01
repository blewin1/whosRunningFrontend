import axios from "axios";

const apiBase = "https://whos-running-app-api.herokuapp.com";

export const getCandidates = async () => {
    try {
        const res = await axios.get(`${apiBase}/candidates`);
        console.log(`getCandidate: `, res.data);
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
            console.log(`getUser: `, res.data);
            return res.data;
        } catch (err) {
            console.error(err);
        }
    }
};

//userInfo should be {name: '', email: '', address: {*same as input format from front page*} }

//TODO: address to JSON
export const createUser = async (userInfo) => {
    try {
        const res = await axios.post(`${apiBase}/users`, { user: userInfo })
        if (res.status === 201) {
            localStorage.setItem("userID", res.data.id)
            return res.data;
        } else {
            console.error('User creation failed, try again?')
        }
    } catch (err) {
        console.error(err)
    }
}

export const addFavorite = async (userID, candidateID) => {
    try {
        const res = await axios.post(`${apiBase}/favorites`, { favorite: {user_id: userID, candidate_id: candidateID} })
        if (res.status === 201) {
            return res.data;
        } else {
            console.error('Favorite adding failed, try again?')
        }
    } catch (err) {
        console.error(err)
    }
}