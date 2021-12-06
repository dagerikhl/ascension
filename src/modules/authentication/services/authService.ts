import createAuth0Client, { Auth0Client, Auth0ClientOptions } from '@auth0/auth0-spa-js';
import { user, isAuthenticated, popupOpen } from '../stores/users';
import config from '../../../../auth_config.js';

// TODO Fix that session isn't remembered on refresh (or at all)

const createClient = async (): Promise<Auth0Client> =>
  createAuth0Client({
    domain: config.domain,
    client_id: config.clientId,
  });

const loginWithPopup = async (client: Auth0Client, options?: Auth0ClientOptions) => {
  popupOpen.set(true);

  try {
    await client.loginWithPopup(options);

    user.set(await client.getUser());
    isAuthenticated.set(true);
  } catch (error) {
    console.error(error);
  } finally {
    popupOpen.set(false);
  }
};

const logout = (client: Auth0Client) => client.logout();

const authService = {
  createClient,
  loginWithPopup,
  logout,
};

export default authService;
