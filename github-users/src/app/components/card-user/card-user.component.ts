import { ModalComponent } from './../modal/modal.component';
import { UsersService } from './../../services/users.service';
import { Component, Input, OnInit } from '@angular/core';
import { Users } from 'src/app/models/users/users.model';
import { MatDialog, MatDialogConfig, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-card-user',
  templateUrl: './card-user.component.html',
  styleUrls: ['./card-user.component.scss'],
})
export class CardUserComponent implements OnInit {

  @Input() user!: Users;

  constructor(public dialog: MatDialog) {}

  ngOnInit(): void {  }

  openDialog(): void {
    this.dialog.open(ModalComponent, {
      width: '250px',
      data: this.user,
    });
  }
}
