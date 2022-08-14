import api from './api';

class PublisherService {
    getPublishers() {
        return api.get('publisher');
    }
    getPublisherById(id) {
        return api.get('publisher/' + id);
    }
    deletePublisher(id) {
        return api.delete('publisher/delete/' + id);
    }
    addPublisher(publisher) {
        return api.post('publisher', publisher);
    }
}
export default new PublisherService();