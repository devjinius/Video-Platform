import { people, getById, getAll } from './db';

const resolver = {
  people: () => {
    let result = getAll();
    return result;
  },
  person: (_, { id }) => getById(id),

  // async와 await 적용
  hello: async () => {
    let result = await getAll();
    console.log('===============');
    console.log(result);
    return result;
  }
};

export default resolver;
