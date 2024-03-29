import { getUserInited } from 'entities/User/model/selectors/getUserInited/getUserInited';
import { getUserAuthData } from './model/selectors/getUserAuthData/getUserAuthData';
import { userReducer, userActions } from './model/slice/userSlice';
import { UserSchema, User } from './model/types/user';

export {
    userActions, userReducer, UserSchema, User, getUserAuthData, getUserInited,
};
