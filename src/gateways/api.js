import axios from "axios";
export default {
  name: "restService",
  methods: {
    getApi(url) {
      return axios.get(url, { timeout: 5000 });
    },
    postApi(url, payload) {
      return axios.post(url, payload, { timeout: 5000 });
    },
    putApi(url, payload) {
      return axios.put(url, payload, { timeout: 5000 });
    },
    deleteApi(url, payload) {
      return axios.delete(url, payload, { timeout: 5000 });
    },
  },
};
