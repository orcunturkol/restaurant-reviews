import http from "../http-common";

const getAll = () => {
    return http.get("/restaurants");
};

export default {
    getAll
}