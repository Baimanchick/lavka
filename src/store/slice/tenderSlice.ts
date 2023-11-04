import {
  createSlice,
  createAsyncThunk,
  createSelector,
} from "@reduxjs/toolkit";
import api from "../api";
// import { fetchVideo } from "../videoSlice/freeVideoSlice";
// Создаем асинхронный thunk для получения списка продуктов
export const fetchTenders = createAsyncThunk(
  "tenders/fetchTenders",
  async (_, { rejectWithValue }) => {
    try {
      // Выполняем GET-запрос к API для получения списка продуктов
      const response = await api.get("/tenders/");
      // Возвращаем полученные данные
      console.log(response);
      return response.data;
    } catch (error) {
      // Если произошла ошибка, используем rejectWithValue для возврата ошибки с дополнительной информацией
      //   return rejectWithValue(error.message);
    }
  }
);

interface TendersState {
  tenders: any[]; // Замените 'any' на тип данных, представляющих тендеры
  status: "idle" | "loading" | "succeeded" | "failed";
  error: string | null;
}

// Создаем slice для управления состоянием продуктов
const tenderSlice = createSlice({
  name: "tenders",
  initialState: {
    tenders: [],
    status: "idle",
    error: null,
  } as TendersState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchTenders.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchTenders.fulfilled, (state, action) => {
        // Если успешно получены данные, устанавливаем статус "succeeded" и сохраняем данные продуктов
        state.status = "succeeded";
        state.tenders = action.payload;
      });
    //   .addCase(fetchTenders.rejected, setError);
  },
});

export default tenderSlice.reducer;
