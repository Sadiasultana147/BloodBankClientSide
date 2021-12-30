import AsyncStorage from '@react-native-async-storage/async-storage'
export const getMyStringValue = async (key) => {
    try {
        return await AsyncStorage.getItem('key')
    } catch (e) {
        console.log(e)
    }



}
export const getMyObject = async (key) => {
    try {
        const jsonValue = await AsyncStorage.getItem('key')
        return jsonValue != null ? JSON.parse(jsonValue) : null
    } catch (e) {

    }

    console.log(e)

}
export const setStringValue = async (value) => {
    try {
        await AsyncStorage.setItem('key', value)
    } catch (e) {
        // save error
    }

    console.log('Done.')
}

export const setObjectValue = async (value) => {
    try {
        const jsonValue = JSON.stringify(value)
        await AsyncStorage.setItem('key', jsonValue)
    } catch (e) {
        console.log(e)
    }


}

export const removeValue = async () => {
    try {
        await AsyncStorage.removeItem('@MyApp_key')
    } catch (e) {
        console.log(e)
    }


}
export const clearAll = async () => {
    try {
        await AsyncStorage.clear()
    } catch (e) {
        console.log(e)
    }


}
