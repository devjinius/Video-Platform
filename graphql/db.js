export const people = [
  {
    id: 0,
    name: 'sseon',
    age: 26,
    gender: 'male'
  },
  {
    id: 1,
    name: '1',
    age: 12,
    gender: 'male'
  },
  {
    id: 2,
    name: '2',
    age: 11,
    gender: 'male'
  },
  {
    id: 3,
    name: '3',
    age: 6,
    gender: 'male'
  },
  {
    id: 4,
    name: '4',
    age: 2,
    gender: 'male'
  }
];

// import models from 'models/';
// 여기는 현재 require로 구현했고 추후 수정
var models = require('../models/index.js');

// export const getById = id => {
//   const filteredPeople = people.filter(person => id === person.id)
//   return filteredPeople[0]
// }

export const getAll = () => {
  // test_seq 테이블에서 모두 가져옴
  // raw: true는 sequelize 오브젝트가 아닌 json형태로 바뀌어 출력됌\
  // return 형식은 항상 promise여야 async-await 적용가능
  return models.TEST_SEQ.findAll({ raw: true })
    .then(results => JSON.stringify(results))
    .catch(err => console.log(err));
};

export const getById = id => {
  //return models.User.findById(id).then(results => results).catch(err => console.log(err))
  return people;
};
