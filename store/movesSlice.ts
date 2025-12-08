import getMoves from '@/api/getMoves';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export type Board = {
    id: number;
    name: string;
    description: string;
    thumbnailPhoto: string;
};

export type BoardsState = {
    boards: any[];
};

const initialState: BoardsState = {
    boards: getMoves(),
};

const boardsSlice = createSlice({
    name: 'boards',
    initialState,
    reducers: {
        addBoard(state, action: PayloadAction<Board>) {
            state.boards.push(action.payload);
        },
        removeBoard(state, action: PayloadAction<number>) {
            state.boards = state.boards.filter(
                (board) => board.id !== action.payload
            );
        },
        updateBoard(state, action: PayloadAction<Board>) {
            const index = state.boards.findIndex(
                (board) => board.id === action.payload.id
            );
            if (index !== -1) {
                state.boards[index] = action.payload;
            }
        },
    },
});

export const { addBoard, removeBoard, updateBoard } = boardsSlice.actions;
export default boardsSlice.reducer;
