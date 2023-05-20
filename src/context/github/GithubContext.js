import { createContext, useReducer } from "react";
import githubReducer from "./GithubReducer";

const GithubContext = createContext()

export const GithubProvider = ({ children }) => {
    const initialState = {
        users: [],
        user: {},
        repos: [],
        loading: false
    }
    // useReducer hook, dispatch is like setUser
    const [state, dispatch] = useReducer(githubReducer, initialState)

    return (
        <GithubContext.Provider value={{
            ...state,
            dispatch,
            // users: state.users,
            // loading: state.loading,
            // user: state.user,
            // repos: state.repos,
            // searchUsers,
            // getUser,
            // getUserRepos,
        }}>
            {children}
        </GithubContext.Provider>)
}

export default GithubContext
