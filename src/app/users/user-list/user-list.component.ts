import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  users: any[] = [];
  users1: any[] = [];
  users2: any[] = [];
  users3: any[] = [];

  constructor(private router: Router, private userService: UserService) {}

  ngOnInit(): void {
    this.users = this.userService.users;
    this.users1 = this.userService.users1;
    this.users2 = this.userService.users2;
    this.users3 = this.userService.users3;
  }

  goToDetails(userId: number) {
    this.router.navigate(['/user-details', userId]);
  }
}