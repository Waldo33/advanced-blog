import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ScrollSaveSchema, ScrollPositionAction } from '../types/scrollSaveSchema';

const initialState: ScrollSaveSchema = {
    scroll: {},
};

export const scrollSaveSlice = createSlice({
    name: 'scrollSave',
    initialState,
    reducers: {
        setScrollPosition: (state, action: PayloadAction<ScrollPositionAction>) => {
            state.scroll[action.payload.path] = action.payload.position;
        },
    },
});

export const { actions: scrollSaveActions, reducer: scrollSaveReducer } = scrollSaveSlice;
