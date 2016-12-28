import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../shared/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  form: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit() {
    this.form = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
      name: ['', Validators.required],
    });
  }

  onSubmit() {
    if (!this.form.valid) {
      console.log('invalid form');
      return;
    }

    let {email, password, name} = this.form.value;
    this.authService.register(email, password, name)
      .subscribe((state) => {
        if (state === true) {
          this.router.navigate(['']);

        } else {
          console.log('after register', state);

        }
      });
  }

}
