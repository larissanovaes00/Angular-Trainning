import { Component, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { Users } from 'src/app/models/users/users.model';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  users: Users[] = []
  usersSlice: Users[] = [];
  length = this.users.length;
  pageSize = 10;
  pageIndex = 0;
  pageSizeOptions = [10, 20, 30];
  showFirstLastButtons = true;

  constructor(private service: UsersService) { }

  ngOnInit(): void {
    this.service.getUsers().subscribe((user: Users[]) => {
      this.users = user;
      this.usersSlice = this.users.slice(0,12);
      this.length = this.users.length;
    })
  }

  onPageChange(event: PageEvent){
    const startIndex = event.pageIndex * event.pageSize;
    let endIndex = startIndex + event.pageSize;
    if(endIndex > this.users.length)endIndex = this.users.length
    this.usersSlice = this.users.slice(startIndex, endIndex)
  }
}


