import api from './api';

class TypeService {
    getTypes() {
        return api.get('type');
    }
    getTypeById(id) {
        return api.get('type/' + id);
    }
    deleteType(id) {
        return api.delete('type/delete/' + id);
    }
    addType(type) {
        return api.post('type', type);
    }
}
export default new TypeService();