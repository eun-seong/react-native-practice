interface param {
  [key: string]: string;
}

const builder = (base_url: string, ...params: param[]): string => {
  return params.reduce((prev, cur) => {
    return `${prev}${Object.keys(cur)[0]}=${Object.values(cur)[0]}&`;
  }, `${base_url}?`);
};

export default builder;
