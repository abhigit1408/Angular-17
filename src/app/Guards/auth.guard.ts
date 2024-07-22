import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {
  const _router = inject(Router)
  let isLogin = sessionStorage.getItem('login');

  console.log(isLogin);

  if (isLogin == 'false' || isLogin == null) {
    alert('Please login...Redirecting to login page.')
    _router.navigate(['login']);
    return false;
  } else {
    return true;
  }
}

