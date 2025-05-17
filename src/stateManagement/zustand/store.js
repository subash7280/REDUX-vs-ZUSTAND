import { create } from 'zustand';
import { devtools, persist } from 'zustand/middleware';

const store = (set) => ({
    userInput: '',
    list: [],
    editIndex: null,

    setUserInput: (value) =>
        set({ userInput: value }, false, 'setUserInput'),

    addOrUpdateItem: () =>
        set((state) => {
            if (state.userInput.trim() === '') return state;

            if (state.editIndex !== null) {
                const updatedList = state.list.map((item, index) =>
                    index === state.editIndex ? { ...item, value: state.userInput } : item
                );
                return {
                    list: updatedList,
                    editIndex: null,
                    userInput: '',
                };
            } else {
                const newItem = {
                    id: Math.random(),
                    value: state.userInput,
                };
                return {
                    list: [...state.list, newItem],
                    userInput: '',
                };
            }
        }, false, 'addOrUpdateItem'),

    deleteItem: (id) =>
        set(
            (state) => ({
                list: state.list.filter((item) => item.id !== id),
            }),          // (1) The updater function — how state changes
            false,        // (2) replace? — false = merge the state (not replace entirely)
            'deleteItem'  // (3) action name for Redux DevTools
        ),

    startEdit: (index) =>
        set(
            (state) => ({
                userInput: state.list[index].value,
                editIndex: index,
            }),
            false,
            'startEdit'
        ),
});

const useTodoStore = create(
    devtools(
        persist(
            store,
            {
                name: 'todo-local-storage', // 👈 this is for persist (localStorage key)
            }
        ),
        {
            name: 'todo-devtools-storage', // 👈 this is for devtools (Redux DevTools tab label)
        },
    ),
);

export default useTodoStore;