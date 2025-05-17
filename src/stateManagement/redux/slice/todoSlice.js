
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    list: [],
    userInput: '',
    editIndex: null,
};

const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        setUserInput: (state, action) => {
            state.userInput = action?.payload;
        },

        addOrUpdateItem: (state) => {
            const trimmedInput = state?.userInput?.trim();
            if (!trimmedInput) return;

            if (state?.editIndex !== null) {
                state.list[state.editIndex].value = trimmedInput;
                state.editIndex = null;
            }
            else {
                state.list.push({
                    id: (state?.list?.length + 1),
                    value: trimmedInput,
                });
            };

            state.userInput = '';
        },

        deleteItem: (state, action) => {
            state.list = state?.list?.filter((item) => item?.id !== action?.payload);
        },

        startEdit: (state, action) => {
            const index = action?.payload;

            state.userInput = state?.list?.[index]?.value;
            state.editIndex = index;
        },
    },
});

export const {
    setUserInput,
    addOrUpdateItem,
    deleteItem,
    startEdit,
} = todoSlice.actions;

export default todoSlice;