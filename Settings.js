import { StyleSheet, View, Text, TextInput, Button, ToastAndroid } from "react-native";

function Settings({ navigation }) {
    const redirectToLogin = () => {
        ToastAndroid.show('Settings have been updated, please relogin to continue', ToastAndroid.LONG);
        navigation.navigate('Login');
    }
    
    return (
        <View style={{ padding: 30 }}>
            <Text>API URL</Text>
            <TextInput style={styles.input} placeholder="Please enter API url" keyboardType="url"></TextInput>
            <View style={styles.flex}>
                <Button color="#14213d" title="Save" onPress={redirectToLogin}></Button>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
        borderRadius: 5
    },
    flex: {
        width: 100,
        paddingStart: 10
    }
})

export default Settings