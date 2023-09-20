import { useSelector } from "react-redux"
export const isAuthenticated = () => {
    // Check if the token is not null (you can replace this with your own token check logic)
    const { token } = useSelector((state) => {
        return state.auth
    })
    return token !== null;
};