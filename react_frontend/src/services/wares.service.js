import http from "../http-common";

class WaresDataServiceClass {
    getAll() {
        return http.get("/wares");
    }

    get(id) {
        return http.get(`/wares/${id}`);
    }

    create(data) {
        return http.post("/tutorials", data);
    }

    update(id, data) {
        return http.put(`/wares/${id}`, data);
    }
    
    delete(id) {
        return http.delete(`/wares/${id}`);
    }
    
    deleteAll() {
        return http.delete(`/wares`);
    }

    findByTitle(title) {
        return http.get(`/wares?title=${title}`);
    }
}

const WaresDataService = new WaresDataServiceClass();

export default WaresDataService;