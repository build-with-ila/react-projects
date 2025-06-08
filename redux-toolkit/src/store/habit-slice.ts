import {createSlice, createAsyncThunk, PayloadAction} from '@reduxjs/toolkit'

export interface Habit {
    id: string;
    name: string;
    frequency: 'daily' | 'weekly';
    completedDates: string[];
    createdAt: string;
}

interface HabitState {
    habits: Habit[];
    isLoading: boolean;
    error: string | null;
}
const initialState: HabitState = {
    habits: [],
    isLoading: false,
    error: null,
}

const habitSlice = createSlice({
    name: 'habits',
    initialState,
    reducers: {
        addHabit: (state, action:PayloadAction<{name: string, frequency: 'daily' | 'weekly'}>) => {
            const newHabit: Habit = {
                id: Date.now().toString(),
                name: action.payload.name,
                frequency: action.payload.frequency,
                completedDates: [],
                createdAt: new Date().toISOString(),
            };
            state.habits.push(newHabit);
        },
        removeHabit: (state, action: PayloadAction<string>) => {
            state.habits = state.habits.filter(
                (habit) => habit.id !== action.payload
            );
        },
        toggleHabit
    },
});

export const {addHabit} = habitSlice.actions;
export default habitSlice.reducer;