import AsyncStorage from "@react-native-async-storage/async-storage";

const useStoragelogin = () => {

    const getItem = async (key) => {
        try {
            const data = await AsyncStorage.getItem(key);
            return JSON.parse(data) || {};
        } catch (error) {
            console.log(error);
            return {};
        }
    };

    const removeItem = async (key) => {
        try {
            await AsyncStorage.removeItem(key);
        } catch (error) {
            console.log(error);
        }
    }

    const saveItem = async (key, value) => {
        try {
            await AsyncStorage.setItem(key, JSON.stringify(value));
        } catch (error) {
            console.log(error);
        }
    };


    return { getItem, saveItem , removeItem};
}

export default useStoragelogin;


