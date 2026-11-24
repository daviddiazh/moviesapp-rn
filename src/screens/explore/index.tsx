import { Image, SectionList, Text, View } from "react-native"
import { TYPOGRAPHY } from "../../theme/typography"
import { SafeAreaView } from "react-native-safe-area-context"
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../navigation/StackNavigation";
import { SPACING } from "../../theme/spacing";
import { COLORS } from "../../theme/colors";
import { styles } from "./styles";
import SearchIcon from "../../components/Icons/SearchIcon";
import { useExploreContext } from "../../context/ExploreContext";

type NavigationProp = NativeStackNavigationProp<RootStackParamList>;

export const ExploreScreen = () => {
    const navigation = useNavigation<NavigationProp>();

    const sections = useExploreContext();
    
    return (
        <SafeAreaView style={styles.screen}>
            <View style={styles.header}>
                <Text style={[TYPOGRAPHY.h1, {marginTop: 20}]}>
                    Explore
                </Text>
                <SearchIcon color={COLORS.PRIMARY.default} width={SPACING.LG} onPress={() => navigation.navigate('Search')} />
            </View>
            
            <SectionList 
                sections={sections}
                keyExtractor={(_, idx) => `${idx}`}
                renderSectionHeader={({section}) => {
                    return (
                        <Text style={TYPOGRAPHY.h2}>{section.title}</Text>
                    )
                }}
                renderItem={({item, section: _}) => {
                    return (
                        <>
                            <Image
                                source={{ uri: item.image?.original }}
                                style={{
                                    width: 200,
                                    height: 250,
                                    resizeMode: 'cover',
                                }}
                            />
                            <Text style={TYPOGRAPHY.body}>{item.id} - {item.name}</Text>
                        </>
                    )
                }}
            />
        </SafeAreaView>
    )
}