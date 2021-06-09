import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { AccountService } from '../_services/account.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  @Output() cancelRegister = new EventEmitter<boolean>();
  model: any = {};

  constructor(private accountService: AccountService) {}

  ngOnInit(): void {}

  onRegister() {
    this.accountService.register(this.model).subscribe(
      (response) => {
        this.onCancel();
      },
      (err) => {
        console.log(err);
      }
    );
  }

  onCancel() {
    this.cancelRegister.emit(false);
  }
}
