import http from 'http';
import axios from 'axios';
import PORT from '../config/port';
const API_URL = `http://localhost:${PORT}/api/members`;

class Service {
  getAllMembers() {
    return new Promise((resolve, reject) => {
      http.get(API_URL, res => {
        res.setEncoding("utf8");
        let body;
        res.on("error", e => console.error(e));
        res.on("data", data => body = data);
        res.on("end", () => {
          try {
            console.log(body)
            body = JSON.parse(body);
          } catch (err) {
            reject(err);
          }
          resolve(body);
        });
      })
    })
  }

  getMember(name) {
    return axios.post(`${API_URL}/find`, {
      name: name,
    })
      .catch(err => console.error(err));
  }
}

export default Service;