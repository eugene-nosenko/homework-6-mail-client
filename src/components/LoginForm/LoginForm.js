// Реализуйте компонент формы логина.
// Используйте `/contexts/Auth` для получения метода authorize
// и статуса isAuthorized.

// Когда пользователь авторизован - перенаправьте его на роут /app

import React, { useState } from 'react';
import { AuthProvider, withAuth } from '../../context/Auth';

const LoginForm = ({ isAuthorized, authorize, authError }) => {
  console.log(authorize);
  const [email, setEmail] = useState('');
  console.log(email, 'email');
  // const [password, setPassword] = useState('');

  return (
    <div class="t-form">
      <p>
        <label for="email">
          <span>Почта</span>
        </label>
        <input
          type="text"
          name="email"
          class="t-input-email"
          value={'email'}
          //onChange={e => setEmail(e.target.value)}
        />
      </p>
      <p>
        <label for="password">
          <span>Пароль</span>
        </label>
        <input
          type="password"
          name="password"
          class="t-input-password"
          value={'password'}
          // onChange={e => setPassword(e.target.value)}
        />
      </p>
      {!isAuthorized && <p>{authError}</p>}
      <div class="LoginForm_buttons__67s-u">
        <button class="t-login" onClick={() => authorize()}>
          Войти
        </button>
      </div>
    </div>
  );
};
export default withAuth(LoginForm);
