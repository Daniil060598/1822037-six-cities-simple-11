import { AuthorizationStatus } from '../../const';
import { UserProcess } from '../../types/state';
import { UserData } from '../../types/user-data';
import { makeFakeUser } from '../../utils/mocks';
import { checkAuthAction, loginAction, logoutAction } from '../api-actions';
import { userProcess } from './user-process';

const user = makeFakeUser();

describe('Reducer: user', () => {
  let state: UserProcess;

  beforeEach(() => {
    state = {
      authorizationStatus: AuthorizationStatus.Unknown,
      user: {} as UserData
    };
  });

  it('without additional parameters should return initial state', () => {
    expect(userProcess.reducer(undefined, { type: 'UNKNOWN_ACTION' }))
      .toEqual({
        authorizationStatus: AuthorizationStatus.Unknown,
        user: {} as UserData
      });
  });

  describe('checkAuthAction test', () => {
    it('should update authorizationStatus to "AUTH" and get user if checkAuthAction fulfilled', () => {
      expect(userProcess.reducer(state, { type: checkAuthAction.fulfilled.type, payload: user }))
        .toEqual({
          authorizationStatus: AuthorizationStatus.Auth,
          user
        });
    });
    it('should update authorizationStatus to "NO_AUTH" if checkAuthAction rejected', () => {
      expect(userProcess.reducer(state, { type: checkAuthAction.rejected.type }))
        .toEqual({
          authorizationStatus: AuthorizationStatus.NoAuth,
          user: {} as UserData
        });
    });
  });

  describe('loginAction test', () => {
    it('should update authorizationStatus to "AUTH" and get user if loginAction fulfilled', () => {
      expect(userProcess.reducer(state, { type: loginAction.fulfilled.type, payload: user }))
        .toEqual({
          authorizationStatus: AuthorizationStatus.Auth,
          user
        });
    });
    it('should update authorizationStatus to "NO_AUTH" if loginAction rejected', () => {
      expect(userProcess.reducer(state, { type: loginAction.rejected.type }))
        .toEqual({
          authorizationStatus: AuthorizationStatus.NoAuth,
          user: {} as UserData
        });
    });
  });

  describe('logoutAction test', () => {
    it('should update authorizationStatus to "NO_AUTH" if logoutAction fulfilled', () => {
      expect(userProcess.reducer(state, { type: logoutAction.fulfilled.type }))
        .toEqual({
          authorizationStatus: AuthorizationStatus.NoAuth,
          user: {} as UserData
        });
    });
  });
});
