
export default ClientError = (message, args, status) => {
  const instance = new Error(message);
  instance.args = args;
  instance.status = status;
  Object.setPrototypeOf(instance, Object.getPrototypeOf(this));
  return instance;
}
ClientError.prototype = Object.create(Error.prototype, {
  constructor: {
    value: Error,
    enumerable: false,
    writable: true,
    configurable: true
  }
});

if (Object.setPrototypeOf) {
  Object.setPrototypeOf(ClientError, Error);
} else {
  // eslint-disable-next-line no-proto
  ClientError.__proto__ = Error;
}
