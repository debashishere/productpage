// scripts/seed.ts
import * as _ from 'lodash';
import { createConnection, ConnectionOptions } from 'typeorm';
import { configService } from '../shared/services/config.service';
import { UsersService } from '../api/users/users.service';
import { UserDTO } from '../api/users/dto/user.dto';
import { getUserData } from './getUserData';

import { User } from '../model/user.entity';

async function run() {
  const sampleUid = `216dc9da-e093-4ee2-9f96-060ec46a6a02`
  // drop old data
  const seedUser: UserDTO = {
    name: "user1",
    email: "user1@gmail.com",
    bio: "user bio",
    image: "/image"
  };

  const seedId = Date.now()
    .toString()
    .split('')
    .reverse()
    .reduce((s, it, x) => (x > 3 ? s : (s += it)), '');

  const opt = {
    ...configService.getTypeOrmConfig(),
    debug: true
  };

  const connection = await createConnection(opt as ConnectionOptions);
  const userService = new UsersService(connection.getRepository(User));

  const users = getUserData();
  for (let i = 0; i < users.length; i++) {
    await userService.create(users[i])
  }
}

run()
  .then(_ => console.log('...wait for script to exit'))
  .catch(error => console.error('seed error', error));