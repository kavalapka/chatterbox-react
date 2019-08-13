const getMessages = () => (next) => (action) => {
  console.log(
    `Тип события: ${action.type}, дополнительные данные события: ${action.payload.message}`,
  );
  return next(action);
};

export default getMessages;

