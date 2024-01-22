import AsyncStorage from "@react-native-async-storage/async-storage";

const UseStorage = () => {

    const getItem = async (key) => {
        try {
            const passwords = await AsyncStorage.getItem(key);
            return JSON.parse(passwords) || [];
        } catch (error) {
            console.log(error);
            return [];
        }
    }

    const saveItem = async (key, value) => {
        try {
            let passwords = await getItem(key);
            passwords.push(value);
            await AsyncStorage.setItem(key, JSON.stringify(passwords));
        } catch (error) {
            console.log(error);
        }
    }

    const deleteItem = async (key, item) => {
        try {
            let passwords = await getItem(key);
            let mypasswords = passwords.filter((password) => {
                return (password !== item);
            });
            await AsyncStorage.setItem(key, JSON.stringify(mypasswords));
            return mypasswords;
        } catch (error) {
            console.log(error);
        }
    }

    return { getItem, saveItem, deleteItem }


}

export default UseStorage;


