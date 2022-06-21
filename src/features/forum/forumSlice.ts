import { AllCategoriesType, CategoriesType, SectionType, AllThemeType, ThemeType, AllMessagesType, MessageType, ProgressType } from './types/index';
// import { ThemeType } from './types/index';
import { fetchGetNews } from './../news/newsSlice';
import { IGetThemes, IGetCategories, IGetMessages  } from './../../models/forum/index';
import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState, AppThunk } from '../../app/store';
import { getThemeBySectionId } from '../../api/forum/index';
import { getCategoryById } from '../../api/forum/index';
import { getMessageByThemeId } from '../../api/forum/index';
import { getProgress } from '../../api/forum/index';

// import {getThemeBySectionId} from '../../api/forum/index'
// import { getThemes } from './forumAPI';
// import { SectionType } from './types/index';

export const fetchGetProgress = createAsyncThunk(
  'user/addProgress',
  async () => {
    const response = await getProgress();
    return response;
  }
);

export const fetchGetCategories = createAsyncThunk(
  'forum/getCategories',
  async () => {
    const response = await getCategoryById();
    console.log(fetchGetCategories())
    return response;
  }
);

export const fetchGetThemes = createAsyncThunk(
  'forum/GetThemes',
  async (dto: IGetThemes) => {
    const response = await  getThemeBySectionId(dto);
    // The value we return becomes the `fulfilled` action payload
    return response;
  }
);

export const fetchGetMessages = createAsyncThunk(
  'forum/GetMessages',
  async (dto: IGetMessages) => {
    const response = await  getMessageByThemeId(dto);
    // The value we return becomes the `fulfilled` action payload
    return response;
  }
);

export interface forumState {
  progress: ProgressType,
  allCategories: AllCategoriesType,
  categories: CategoriesType,
  section: SectionType,
  allThemes: AllThemeType,
  themes: ThemeType,
  allMessages: AllMessagesType,
  messages: MessageType,
  isLoad: boolean,
  value: number;
  // forum: SectionType,
  //IGetThemes?: boolean;
  status: 'idle' | 'loading' | 'failed';
};

const initialState: forumState = {
  progress:{
    id: 0,
    value: 0,
    userId: 0,
  },
  isLoad: false,
  allCategories: {
    totalCount: 0,
    categories: [],
  },
  categories: {
    id: 0,
    title: '',
    sections: [],
  },
  section: {
    id: 0,
    title: '',
    description: '',
    countThemes: 0,
    categoryId: 0,
  },
  allThemes: {
    totalCount: 0,
    sectionId: 0,
    sectionTitle:'',
    sectionDescription: '',
    sectionCategoryId: 0,
    sectionCategoryName: '',
    themes: [],
  },
  themes: {
    id: 0,
    title: '',
    description: '',
    createDate: '',
    sectionId: 0,
    authorId: 0,
    authorName: '',
    countMessages: 0,  
  },
  allMessages: {
    totalCount: 0,
    themeId: 0,
    themeName: '',
    themeDescription: '',
    themeSectionId: 0,
    themeSectionName: '',
    themeAuthorId: 0,
    themeAuthorName: '',
    messages:[],
  },
  messages: {
    id: 0,
    text: '',
    createDate: '',
    authorId: 0,
    authorName: '',
    themeId: 0,
  },
  value: 0,
  status: 'idle',
};

export type initialStateType = typeof initialState;

// const SHOW_CATEGORY_COUNT = "SHOW-CATEGORY-COUNT";
// //const NOTHING_CHANGED = "NOTHING-CHANGED";

// const categoryReducer = ( state = initialState, action) => {
//   switch (action.type) {
//     case SHOW_CATEGORY_COUNT:
//       let showCategory = {
//         totalCount: getCategoryById(),
//       };
//       state.allCategories.totalCount.push(showCategory);
//       return state;
//       default:
//         return state;      
//   }
// }

// export const addCategoryCount = () => ({type:SHOW_CATEGORY_COUNT});

// The function below is called a thunk and allows us to perform async logic. It
// can be dispatched like a regular action: `dispatch(incrementAsync(10))`. This
// will call the thunk with the `dispatch` function as the first argument. Async
// code can then be executed and other actions can be dispatched. Thunks are
// typically used to make async requests.

export const forumSlice = createSlice({
  name: 'forum',
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {},

  extraReducers: {
    [fetchGetThemes.pending.type]: (state: initialStateType)=>{
      state.isLoad = true;
    },
    [fetchGetThemes.fulfilled.type]: (state: initialStateType, action)=>{
      state.isLoad = false;
      // console.log(action);
      // console.log('success');
      state.allThemes = action.payload;
    },
    [fetchGetThemes.rejected.type]: (state: initialStateType, action)=>{
      state.isLoad = false;
    },

    [fetchGetProgress.pending.type]: (state: initialStateType)=>{
      state.isLoad = true;
    },
    [fetchGetProgress.fulfilled.type]: (state: initialStateType, action)=>{
      state.isLoad = false;
      // console.log(action);
      // console.log('success');
      // state.allThemes = action.payload;
    },
    [fetchGetProgress.rejected.type]: (state: initialStateType, action)=>{
      state.isLoad = false;
    },



      [fetchGetCategories.pending.type]: (state: initialStateType)=>{
        state.isLoad = true;
      },
      [fetchGetCategories.fulfilled.type]: (state: initialStateType, action)=>{
        state.isLoad = false;
        // console.log(action);
        // console.log('success');
        state.allCategories = action.payload;
      },
      [fetchGetCategories.rejected.type]: (state: initialStateType, action)=>{
        state.isLoad = false;
      },



      [fetchGetMessages.pending.type]: (state: initialStateType)=>{
        state.isLoad = true;
      },
      [fetchGetMessages.fulfilled.type]: (state: initialStateType, action)=>{
        state.isLoad = false;
        // console.log(action.payload);
        //state.forum = action.payload;
      },
      [fetchGetMessages.rejected.type]: (state: initialStateType, action)=>{
        state.isLoad = false;
      },

  
  // The `extraReducers` field lets the slice handle actions defined elsewhere,
  // including actions generated by createAsyncThunk or in other slices.

  // extraReducers: (builder) => {
  //   builder
  //     .addCase(incrementAsync.pending, (state) => {
  //       state.status = 'loading';
  //     })
  //     .addCase(incrementAsync.fulfilled, (state, action) => {
  //       state.status = 'idle';
  //       state.value += action.payload;
  //     })
  //     .addCase(incrementAsync.rejected, (state) => {
  //       state.status = 'failed';
  //     });
  },
});
// console.log(20);
export const {} = forumSlice.actions;

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state: RootState) => state.counter.value)`
export const selectCount = (state: RootState) => state.counter.value;

// We can also write thunks by hand, which may contain both sync and async logic.
// Here's an example of conditionally dispatching actions based on current state.
// export const incrementIfOdd =
//   (amount: number): AppThunk =>
//   (dispatch, getState) => {
//     const currentValue = selectCount(getState());
//     if (currentValue % 2 === 1) {
//       dispatch(incrementByAmount(amount));
//     }
//   };

export default forumSlice.reducer;
