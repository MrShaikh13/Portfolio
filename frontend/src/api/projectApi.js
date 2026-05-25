import api from "./axios";

export const getProjectsApi = () => {
   return api.get("/api/projects");
};

export const sendMessageApi = (formData) => {
   return api.post("/api/contact", formData);
};