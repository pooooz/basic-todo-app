export const loggerMiddleware = (storeAPI) => (next) => (action) => {
  console.log('------------\n');
  console.log('previous state', storeAPI.getState());
  console.log('dispatching', action);
  const result = next(action);
  console.log('new state', storeAPI.getState());
  console.log('------------\n\n');
  return result;
};
