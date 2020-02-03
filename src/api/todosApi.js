export function localApi(http) {
  return {
    get: () => {
      return http.get('/api/todos');
    },

    create: newTodo => {
      return http.post('/api/todos', newTodo);
    }
  };
}
