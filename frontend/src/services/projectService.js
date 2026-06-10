import { sendMessageApi } from "../api/projectApi"

export const projectService = {
  sendMessage: async (formData) => {
    const res = await sendMessageApi(formData);
    return res;
  },
};
