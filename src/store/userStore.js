import {UserApi, Credentials} from "@/backend/user";

const UserStore = {
    async logIn(username, password) {
        const credentials = new Credentials(username, password);
        try {
            await UserApi.login(credentials);
        } catch (err) {
            alert(err.description);
            return false;
        }

        return true;
    },

    async logOut() {
        return true;
    }
}

export default UserStore