import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  users = [
    {id: 1, name: 'John Doe', image: 'assets/image.png', email: 'john@gmail.com', linkedin: 'JohnDoe_20', age: '20', gender: 'Masculino', nationality: 'Peruano'},
  ];
  users1 = [
    {id: 2, name: 'Jane Smith', image: 'assets/image1.png',email: 'jane@gmail.com', linkedin: 'JaneSmith_18', age: '18', gender: 'Femenino', nationality: 'Estadounidese'},
  ];
  users2 = [
    {id: 3, name: 'Alice Johnson', image: 'assets/image2.png',email: 'alice@gmail.com', linkedin: 'AliceJohnson_20', age: '20', gender: 'Femenino', nationality: 'Peruana'},
  ];
  users3 = [
    {id: 4, name: 'Bob Brown', image: 'assets/image3.png', email: 'bob@gmail.com', linkedin: 'BobBrown_23', age: '23', gender: 'Masculino', nationality: 'Peruano'},
  ];

  getAllUsers(): any[] {
    return [
      ...this.users,
      ...this.users1,
      ...this.users2,
      ...this.users3
    ];
  }

  getUserById(id: number): any {
    const allUsers = this.getAllUsers();
    return allUsers.find(user => user.id === id);
  }
}