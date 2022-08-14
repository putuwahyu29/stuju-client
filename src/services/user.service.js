import api from './api';

class UserService {
    getUsers() {
        return api.get('user');
    }
    getUserByUsername(username) {
        return api.get('user/' + username);
    }
}
export default new UserService();