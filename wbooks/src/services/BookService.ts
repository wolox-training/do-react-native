import api from '@config/api';

const services = {
  getService: () => api.get('/service')
};

export default services;
