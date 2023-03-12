import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { validateProfileData } from '../../../lib/validateProfileData/validateProfileData';
import { getProfileForm } from '../../selectors/getProfileForm/getProfileForm';
import { Profile, ValidateProfileError } from '../../types/profile';

export const updateProfileData = createAsyncThunk<Profile, void, ThunkConfig<ValidateProfileError[]>>(
    'profile/updateProfileData',
    async (_, { extra, rejectWithValue, getState }) => {
        const formData = getProfileForm(getState());

        const errors = validateProfileData(formData);

        if (errors.length) {
            return rejectWithValue(errors);
        }

        try {
            const response = await extra.api.put<Profile>('/profile', formData);

            if (!response.data) {
                throw new Error('error');
            }

            return response.data;
        } catch (e) {
            return rejectWithValue([ValidateProfileError.SERVER_ERROR]);
        }
    },
);
