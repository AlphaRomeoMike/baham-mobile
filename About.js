import { StyleSheet, Text, View } from "react-native";

function About({ navigation }) {
    return (
        <View>
            <Text style={{ padding: 10 }}>
                <Text style={styles.heading}>Option 1: Eco-friendly focus {"\n\n"}</Text>
                <Text>Ditch the single seat, share the planet. Hop aboard Baham Ride Sharing, the ride-sharing app that gets you there and keeps the air clean.</Text>
                {"\n\n\n"}
                <Text style={styles.heading}>Option 2: Community-driven focus {"\n\n"}</Text>
                <Text>More than just miles, Baham Ride Sharing connects you to your city. Hop in with friendly locals, discover hidden gems along the way, and turn every ride into a conversation. ✨</Text>
                {"\n\n\n"}
                <Text style={styles.heading}>Option 3: Tech-driven focus {"\n\n"}</Text>
                <Text>Forget the wait, hail the future. Baham Ride Sharing is the smarter way to get around. Our AI magic matches you with the perfect ride in seconds, so you can spend less time waiting and more time exploring.</Text>
                {"\n\n\n"}
                <Text style={styles.heading}>Option 4: Affordable and convenient focus {"\n\n"}</Text>
                <Text>Leave the wallet worries at home, Baham Ride Sharing makes getting there a breeze. Share the ride, split the fare, and enjoy budget-friendly trips to every corner of town. </Text>
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    heading: {
        fontWeight: 'bold', 
        fontSize: 18
    }
})

export default About