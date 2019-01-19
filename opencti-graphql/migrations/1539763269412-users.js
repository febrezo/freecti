import { addUser, deleteUserByEmail } from '../src/domain/user';

module.exports.up = async next => {
  await addUser(
    {},
    {
      username: 'Julien',
      password: 'julien',
      firstname: 'Julien',
      lastname: 'Richard',
      email: 'richard.julien@gmail.com',
      grant: ['ROLE_ROOT', 'ROLE_ADMIN']
    }
  );
  await addUser(
    {},
    {
      username: 'Samuel Hassine',
      password: 'samuel',
      firstname: 'Samuel',
      lastname: 'Hassine',
      email: 'samuel.hassine@gmail.com',
      grant: ['ROLE_ROOT', 'ROLE_ADMIN']
    }
  );
  next();
};

module.exports.down = async next => {
  await deleteUserByEmail('richard.julien@gmail.com');
  await deleteUserByEmail('samuel.hassine@gmail.com');
  next();
};
