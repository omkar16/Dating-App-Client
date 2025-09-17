import { Component, Inject, OnInit, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AccountService } from '../../../src/core/services/account-service';
import { inject } from '@angular/core';
import { Signal } from '@angular/core';
import { RouterLink, Router } from '@angular/router';
import { RouterLinkActive } from '@angular/router';
import { ToastService } from '../../core/services/toast-service';
@Component({
  selector: 'app-nav',
  imports: [FormsModule, RouterLink, RouterLinkActive],
  templateUrl: './nav.html',
  styleUrl: './nav.css',
})
export class Nav {
  protected accountService: AccountService = inject(AccountService);
  private router = inject(Router);
  private toast = inject(ToastService);

  protected creds: any = {};

  login() {
    this.accountService.login(this.creds).subscribe({
      next: (response: any) => {
        this.router.navigateByUrl('/members');
        this.toast.success('Logged in successfully');
        this.creds = {};
      },
      error: (error: any) => {
        console.log(error);
        this.toast.error(error.error);
      },
    });
    //this.accountService.login(this.creds).subscribe({});
  }

  logout() {
    this.accountService.logout();
    this.router.navigateByUrl('/');
  }
}
