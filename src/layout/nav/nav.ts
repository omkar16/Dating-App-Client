import { Component, Inject, OnInit, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AccountService } from '../../../src/core/services/account-service';
import { inject } from '@angular/core';
import { Signal } from '@angular/core';

@Component({
  selector: 'app-nav',
  imports: [FormsModule],
  templateUrl: './nav.html',
  styleUrl: './nav.css',
})
export class Nav {
  private accountService: AccountService = inject(AccountService);
  protected creds: any = {};

  login() {
    this.accountService.login(this.creds).subscribe({
      next: (response: any) => console.log(response),
      error: (error: any) => alert(error.message),
    });
    //this.accountService.login(this.creds).subscribe({});
  }
}
