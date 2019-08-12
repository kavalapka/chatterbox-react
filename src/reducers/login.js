export const initialState = {
  name: 'Unknown User',
};
export function loginReducer(state = initialState) {
  return state;
}

// const user = (state = initialState, action) => {
//   console.log('reducer login');
//   switch (action.type) {
//     case 'LOGIN_USER':
//       return [
//         ...state,
//         {
//           userName: action.userName,
//           login: false,
//         },
//       ];
//     case 'LOGIN_USER_SUCCESS':
//       return [
//         ...state,
//         {
//           userName: action.userName,
//           login: true,
//         },
//       ];
//     default:
//       return state;
//   }
// };
//
// export default user;
