import { Component, OnInit } from '@angular/core';
import { UserService } from '../_services/user.service';
import { User } from '../user/user';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  users : User[] = [];
  constructor(private userService: UserService) { }
  ngOnInit(): void {
    this.userService.getPublicContent().subscribe({
      next: data => {
        this.users = data;
      },
      error: err => {
        this.users = JSON.parse(err.error).message;
      }
    });
  }
}
