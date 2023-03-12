import { Country } from 'entities/Country';
import { Currency } from 'entities/Currency';
import { StateSchema } from 'app/providers/StoreProvider';
import { getProfileForm } from './getProfileForm';

describe('getProfileForm.test', () => {
    const formData = {
        username: 'admin',
        age: 22,
        lastname: 'Тестов',
        first: 'Тест',
        country: Country.Russia,
        currency: Currency.RUB,
        city: 'Moscow',
    };

    test('', () => {
        const state: DeepPartial<StateSchema> = {
            profile: {
                form: formData,
            },
        };
        expect(getProfileForm(state as StateSchema)).toEqual(formData);
    });
});
