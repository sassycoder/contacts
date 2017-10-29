export default ($http) => {
  return {
    create: (model) => {
      return $http.post('/api/contacts', model);
    },
    retrieve: () => {
      return $http.get('/api/contacts');
    },
    update: (model) => {
      return $http.put('/api/contacts', model);
    },
    removeContact: (model) => {
      return $http.delete('/api/contacts/' + model._id);
    }
  };
};
