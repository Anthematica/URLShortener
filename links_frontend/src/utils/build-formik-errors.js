function buildFormikErrors(errors) {
  return Object.entries(errors).reduce((acc, [field, [error]]) => {
    acc[field] = error;

    return acc;
  }, {});
}

export { buildFormikErrors };
