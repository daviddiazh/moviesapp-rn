import { FlatList, Image, SectionList, Text, TouchableOpacity, View } from "react-native"
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
import { ExploreElement } from "../../types/explore";


type ExploreItem = ExploreElement

interface ExploreSection {
    title: string;
    data: ExploreItem[];
}

type NavigationProp = NativeStackNavigationProp<RootStackParamList>;


export const ExploreScreen = () => {
    const navigation = useNavigation<NavigationProp>();

    const sections = useExploreContext();

    const renderCard = (section: ExploreSection, item: ExploreItem) => {
        let component;
        switch (section.title) {
            case 'Discover by Genre':
                component = (
                    <Text style={TYPOGRAPHY.h2}>
                        {item.name}
                    </Text>
                )
                break;
        
            default:
                component = (
                    <Image
                        source={{ uri: item.image?.medium }}
                        style={{
                            width: 125,
                            height: 200,
                            borderRadius: 10,
                        }}
                    />
                )
                break;
        }

        return component;
    }
    
    return (
        <SafeAreaView style={styles.screen}>
            <View style={styles.header}>
                <Text style={[TYPOGRAPHY.h1]}>
                    Explore
                </Text>
                <SearchIcon color={COLORS.PRIMARY.default} width={SPACING.LG} onPress={() => navigation.navigate('Search')} />
            </View>

            <SectionList<ExploreItem, ExploreSection>
                sections={sections as ExploreSection[]}
                keyExtractor={(item, idx) => `${item.name}+${idx}`}
                ListHeaderComponent={
                    <View style={{ width: '100%', marginBottom: 20 }}>
                        <Image
                            source={require('../../assets/banners/stranger-things.webp')}
                            style={{
                                width: '100%',
                                height: 200,
                                borderRadius: 10
                            }}
                            resizeMode="cover"
                        />
                    </View>
                }
                renderSectionHeader={({ section }) => (
                    <View style={{ marginBottom: SPACING.LG }}>
                        <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
                            <Text style={[TYPOGRAPHY.h2, {marginBottom: SPACING.SM}]}>
                                {section.title}
                            </Text>
                            <TouchableOpacity activeOpacity={.8} onPress={() => console.log({section})}>
                                <Text style={[TYPOGRAPHY.h3, {color: COLORS.PRIMARY.default}]}>See all</Text>
                            </TouchableOpacity>
                        </View>

                        <FlatList<ExploreItem>
                            horizontal
                            data={section.data ?? []}
                            keyExtractor={(movie, index) =>
                                `${movie.id ?? movie.name ?? index}`
                            }
                            showsHorizontalScrollIndicator={false}
                            renderItem={({ item }) => (
                                <View style={{ marginRight: 12 }}>
                                    {renderCard(section, item)}
                                </View>
                            )}
                        />
                    </View>
                )}
                renderItem={() => null}
            />
        </SafeAreaView>
    )
}