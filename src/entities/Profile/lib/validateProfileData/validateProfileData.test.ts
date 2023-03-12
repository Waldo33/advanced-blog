import { Country } from 'entities/Country';
import { Currency } from 'entities/Currency';
import { ValidateProfileError } from 'entities/Profile/model/types/profile';
import { validateProfileData } from './validateProfileData';

const profileData = {
    username: 'admin',
    age: 22,
    lastname: 'Тестов',
    first: 'Тест',
    country: Country.Russia,
    currency: Currency.RUB,
    city: 'Moscow',
    avatar: '132',
};
describe('validateProfileData.test', () => {
    test('success', () => {
        const result = validateProfileData(profileData);

        expect(result).toEqual([]);
    });

    test('without firstname and lastname', () => {
        const result = validateProfileData({ ...profileData, first: '', lastname: '' });

        expect(result).toEqual([ValidateProfileError.INCORRECT_USER_DATA]);
    });

    test('without avatar', () => {
        const result = validateProfileData({ ...profileData, avatar: '' });

        expect(result).toEqual([ValidateProfileError.INCORRECT_AVATAR]);
    });

    test('without age', () => {
        const result = validateProfileData({ ...profileData, age: undefined });

        expect(result).toEqual([ValidateProfileError.INCORRECT_AGE]);
    });

    test('without username', () => {
        const result = validateProfileData({ ...profileData, username: undefined });

        expect(result).toEqual([ValidateProfileError.INCORRECT_USERNAME]);
    });

    test('without city', () => {
        const result = validateProfileData({ ...profileData, city: undefined, country: undefined });

        expect(result).toEqual([ValidateProfileError.INCORRECT_CITY]);
    });

    test('without all', () => {
        const result = validateProfileData({});

        expect(result).toEqual([
            ValidateProfileError.INCORRECT_USER_DATA,
            ValidateProfileError.INCORRECT_AGE,
            ValidateProfileError.INCORRECT_CITY,
            ValidateProfileError.INCORRECT_AVATAR,
            ValidateProfileError.INCORRECT_USERNAME,
        ]);
    });

    test('without data', () => {
        const result = validateProfileData(undefined);

        expect(result).toEqual([ValidateProfileError.NO_DATA]);
    });
});
