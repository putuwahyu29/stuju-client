import api from './api';

class PublicationService {
    getPublications() {
        return api.get('publication');
    }
    getMyPublications(username) {
        return api.get('publication/view/' + username);
    }
    findPublications(seacrh) {
        return api.post('publication/search/namelike', seacrh);
    }
    getPublicationInHome() {
        return api.get('publication/pagination/0/3');
    }
    getPublicationById(id) {
        return api.get('publication/' + id);
    }
    addPublication(publication) {
        return api.post('publication', publication);
    }
    deletePublication(id) {
        return api.delete('publication/delete/' + id);
    }
    deleteAllPublication() {
        return api.delete('publication/deleteall');
    }
    editPublication(publication) {
        return api.put('publication', publication);
    }
    getPublicationByTypeId(id) {
        return api.get('publication/search/type/' + id);
    }
    changePublicationType(id, type) {
        console.log(type)
        return api.post('publication/changetype/' + id, type);
    }
}
export default new PublicationService();