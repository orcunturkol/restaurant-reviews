import http from "../http-common";

const getAll = () => {
    return http.get("/restaurants");
};

const deleteOne = (id) => {
    return http.delete("/restaurants/"+id);
}
export default {
    getAll,
    deleteOne
};