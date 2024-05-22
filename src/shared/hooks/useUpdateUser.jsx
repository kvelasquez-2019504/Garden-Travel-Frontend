import { useState } from "react";
import { updateUser as updateUserRequest } from "../../services/api";

export const useUpdateUser = () => {
    const [updatedUser, setUpdatedUser] = useState();
    const [isFetching, setIsFetching] = useState(false);

    const updateUser = async (token, userData) => {
        setIsFetching(true);
        try {
            const response = await updateUserRequest(token, userData);
            if (response.error) {
                console.log(response.error);
            } else {
                setUpdatedUser(response.data);
            }
        } catch (error) {
            console.error('Error updating user:', error);
        } finally {
            setIsFetching(false);
        }
    };

    return {
        updatedUser,
        isFetching,
        updateUser
    };
};
