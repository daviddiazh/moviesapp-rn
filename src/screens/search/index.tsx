import { Text, View } from "react-native"
import { TYPOGRAPHY } from "../../theme/typography"
import { SafeAreaView } from "react-native-safe-area-context"
import { useNavigation } from "@react-navigation/native";

export const SearchScreen = () => {
    const navigation = useNavigation();

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View style={{ flex: 1 }}>
                <Text style={TYPOGRAPHY.h1}>
                    Search
                </Text>
                <Text style={TYPOGRAPHY.h3} onPress={() => navigation.goBack()}>
                    Go back
                </Text>
            </View>
        </SafeAreaView>
    )
}