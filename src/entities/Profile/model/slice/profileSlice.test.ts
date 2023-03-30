import { ProfileSchema, updateProfileData } from 'entities/Profile';
import { Country } from 'entities/Country';
import { Currency } from 'entities/Currency';
import { ValidateProfileError } from 'entities/Profile/model/types/profile';
import { profileActions, profileReducer } from './profileSlice';

describe('profileSlice.test', () => {
    const data = {
        username: 'admin',
        age: 22,
        lastname: 'Тестов',
        first: 'Тест',
        country: Country.Russia,
        currency: Currency.RUB,
        city: 'Moscow',
        avatar: '123',
        id: '1',
    };

    test('test set readonly', () => {
        const state: DeepPartial<ProfileSchema> = {
            readonly: true,
        };
        expect(
            profileReducer(
                state as ProfileSchema,
                profileActions.setReadonly(false),
            ),
        ).toEqual({ readonly: false });
    });

    test('test cancel edit', () => {
        const state: DeepPartial<ProfileSchema> = {
            data,
            form: {
                username: '',
            },
        };
        expect(
            profileReducer(
                state as ProfileSchema,
                profileActions.cancelEdit(),
            ),
        ).toEqual({
            readonly: true,
            validateErrors: undefined,
            data,
            form: data,
        });
    });

    test('test update profile', () => {
        const state: DeepPartial<ProfileSchema> = {
            form: {
                username: '',
            },
        };
        expect(
            profileReducer(
                state as ProfileSchema,
                profileActions.updateProfile({
                    username: '132123',
                }),
            ),
        ).toEqual({
            form: {
                username: '132123',
            },
        });
    });

    test('test update profile service pending', () => {
        const state: DeepPartial<ProfileSchema> = {
            isLoading: false,
            validateErrors: [ValidateProfileError.SERVER_ERROR],
        };
        expect(
            profileReducer(
                state as ProfileSchema,
                updateProfileData.pending,
            ),
        ).toEqual({
            isLoading: true,
            validateErrors: undefined,
        });
    });

    test('test update profile service fulfilled', () => {
        const state: DeepPartial<ProfileSchema> = {
            isLoading: true,
        };
        expect(
            profileReducer(
                state as ProfileSchema,
                updateProfileData.fulfilled(data, ''),
            ),
        ).toEqual({
            isLoading: false,
            readonly: true,
            validateErrors: undefined,
            data,
            form: data,
        });
    });
});
