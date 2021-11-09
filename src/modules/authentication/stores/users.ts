import type { User } from '@auth0/auth0-spa-js';
import { writable, derived } from 'svelte/store';

export const isAuthenticated = writable(false);
export const user = writable<User>({});
export const popupOpen = writable(false);
export const error = writable();

export const tasks = writable([]);

export const userTasks = derived([tasks, user], ([$tasks, $user]) => {
  let loggedInUserTasks = [];

  if ($user && $user.email) {
    loggedInUserTasks = $tasks.filter((task) => task.user === $user.email);
  }

  return loggedInUserTasks;
});
