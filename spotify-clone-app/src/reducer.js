export const initialState = {
    user: null,
    playlists: [],
    playing: false,
    item: null,
    //remove after finishing; for testing purposes only...
    //token: "BQArXaviVpkJQ0O99pIvo0dd3KYLTxmL9iLCapmW8JnpGyXf34…msDfNFYQDDI2yU6AdwtDun4BQ6TJ1dmFuQgXZFe-S3SCjijAQ",
}

const reducer = (state, action) => {
    console.log(action);

    switch(action.type) {
        case 'SET_USER':
            return {
                ...state,
                user: action.user,
            };
        case 'SET_TOKEN':
            return {
                ...state,
                token: action.token,
            };
        case 'SET_PLAYLISTS':
            return {
                ...state,
                playlists: action.playlists,
            };
        case 'SET_DAILY_MIX_2':
            return {
                ...state,
                daily_mix_2: action.daily_mix_2,
            }
        default:
            return state;
    }
}

export default reducer;