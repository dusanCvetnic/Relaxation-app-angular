import { Injectable } from '@angular/core';
import { User } from '../models/user.model';

@Injectable()
export class UserService {

    static dummyUserList: Array<User> = [
        {
          id: 1,
          email: 'beba@beba.com',
          password: 'bebe123',
          name: 'Beba',
          surname: 'Bebic',
          birthDate: new Date('1998-09-04 09:00'),
          address: 'Adresa 1',
          interests: ['sport', 'music', 'fun', 'movie']
        },
        {
          id: 2,
          email: 'dcvetnic@admin.com',
          password: 'dcvetnic',
          name: 'Dusan',
          surname: 'Cvetnic',
          birthDate: new Date('1994-09-13 09:00'),
          address: 'Adresa 2',
          interests: ['sport', 'music', 'fun', 'movie', 'culture']
        },
        {
          id: 3,
          email: 'pera@mail.com',
          password: 'pera123',
          name: 'Pera',
          surname: 'Peric',
          birthDate: new Date('1999-05-24 09:00'),
          address: 'Adresa 3',
          interests: ['sport', 'fun']
        },
        {
          id: 4,
          email: 'mika@mail.com',
          password: 'mika123',
          name: 'Mika',
          surname: 'Mikic',
          birthDate: new Date('1992-12-13 09:00'),
          address: 'Adresa 4',
          interests: ['music', 'movie']
        },
      ];

      currentUser: User;

getUserName(user: User): string {
    return user.email;
}

getUserById(id: number): User {
    let foundUser: User;
    UserService.dummyUserList.forEach(user => {
        if (user.id === id){
            foundUser = user;
        }
    });
    this.currentUser = foundUser;
    return foundUser;
}

getUser(userEmail: string): User {
    this.currentUser = UserService.dummyUserList.find(userToFind => userToFind.email === userEmail);
    return this.currentUser;
}

isPasswordCorrect(userEmail: string, password: string): boolean {
    return UserService.dummyUserList.find(userToFind =>
        (userToFind.email === userEmail && userToFind.password === password)) !== undefined;
}

registerUser(
  email: string,
  password: string,
  name: string,
  surname: string,
  birthDate: Date,
  address: string,
  interests: string[]): User {
    let maxId: number = 0;
    UserService.dummyUserList.forEach(user => {
       if (maxId < user.id) {
           maxId = user.id;
       }
    });

    const id = ++maxId;
    const user: User = {id, email, password, name, surname, birthDate, address, interests};

    UserService.dummyUserList.push(user);
    console.log(user);
    return user;
}

}
