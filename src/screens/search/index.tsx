import { FlatList, Image, Text, TextInput, View } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"
import { useNavigation } from "@react-navigation/native";
import Animated, {
    useSharedValue,
    useAnimatedStyle,
    withTiming,
} from 'react-native-reanimated';
import { TYPOGRAPHY } from "../../theme/typography"
import { useEffect, useState } from "react";
import { COLORS } from "../../theme/colors";
import { SPACING } from "../../theme/spacing";
import SearchIcon from "../../components/Icons/SearchIcon";
import { fetchApi } from "../../api";
import { endpoints } from "../../constants";
import { SearchElement } from "../../types/search";
import GoBackIcon from "../../components/Icons/GoBackIcon";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../navigation/StackNavigation";
import StartIcon from "../../components/Icons/StartIcon";
import { useDebounce } from "../../hooks/useDebounce";
import { BOX_HEIGHT, styles } from "./styles";


type NavigationProp = NativeStackNavigationProp<RootStackParamList>;


export const SearchScreen = () => {
    const [containerWidth, setContainerWidth] = useState(0);
    const [query, setQuery] = useState('');
    const [data, setData] = useState([]);

    const debouncedQuery = useDebounce(query, 800);

    const navigation = useNavigation<NavigationProp>();
    const width = useSharedValue(BOX_HEIGHT);

    const animatedStyle = useAnimatedStyle(() => {
        return {
            width: withTiming(width.value, {
                duration: 600,
            }),
        };
    });

    const toggleWidth = () => {
        width.value = width.value === BOX_HEIGHT ? (containerWidth - 40) : BOX_HEIGHT;
    };

    const renderStars = (average = 0) => {
        if (!average) {
            return <Text style={TYPOGRAPHY.secondary}>There's not rating yet</Text>
        }
        
        const rating = Math.min(5, Math.max(0, average / 2));
        const filledStars = Math.round(rating);

        return Array.from({ length: 5 }, (_, idx) => (
            <StartIcon
                key={idx}
                color={idx < filledStars ? 'yellow' : 'gray'}
            />
        ));
    }

    useEffect(() => {
        if(containerWidth) {
            toggleWidth()
        }
    }, [containerWidth]);

    useEffect(() => {
        if (!debouncedQuery.trim()) {
            setData([]);
            return;
        }

        fetchApi(`${endpoints.search}${debouncedQuery}`)
            .then(setData)
            .catch(console.log);
    }, [debouncedQuery]);

    return (
        <SafeAreaView 
            style={{ flex: 1 }}
            onLayout={(event) => {
                setContainerWidth(event?.nativeEvent?.layout?.width);
            }}
        >
            <View style={styles.header}>
                <GoBackIcon
                    color={COLORS.COMMON.white}
                    style={[{ alignSelf: 'center', paddingRight: SPACING.MD }]}
                    onPress={() => navigation.navigate('Explore')}
                />
                <Animated.View style={[styles.box, animatedStyle]}>
                    <SearchIcon color={COLORS.PRIMARY.default} width={SPACING.LG} />
                    <TextInput
                        placeholder="Buscar..."
                        placeholderTextColor={COLORS.COMMON.white}
                        autoFocus
                        onChangeText={setQuery}
                        style={{
                            flex: 1,
                            marginLeft: 8,
                            color: COLORS.COMMON.white,
                            height: '100%',
                        }}
                    />
                </Animated.View>
            </View>

            <FlatList<SearchElement>
                data={data ?? []}
                keyExtractor={(item, index) =>
                    `${item?.show?.id ?? item?.show?.name ?? index}`
                }
                contentContainerStyle={{marginVertical: SPACING.LG,}}
                ListHeaderComponent={() => {
                    return (
                        data?.length ? <Text style={[TYPOGRAPHY.h2, {marginBottom: SPACING.MD}]}>Results</Text> : null
                    )
                }}
                renderItem={({ item }) => (
                    <View style={styles.card}>
                        <Image
                            source={{ uri: item?.show?.image?.original }}
                            style={{
                                width: 100,
                                height: 100,
                                borderRadius: 10,
                                objectFit: 'fill'
                            }}
                        />
                        <View>
                            <Text style={TYPOGRAPHY.h3}>{item?.show.name}</Text>
                            <Text style={[TYPOGRAPHY.secondary, {marginVertical: 10}]}>{item?.show?.genres?.[0] ?? "There's not genre yet"}</Text>
                            <View style={styles.ratingContainer}>
                                {renderStars(item?.show?.rating?.average ?? 0)}
                            </View>
                        </View>
                    </View>
                )}
            />
        </SafeAreaView>
    )
}
