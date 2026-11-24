import { Text, TextInput, View } from "react-native"
import { Button, StyleSheet } from 'react-native';
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

const pulseAnimation = {
  '0%': { scale: 1, opacity: 1 },
  '50%': { scale: 1.05, opacity: 0.4 },
  '100%': { scale: 1, opacity: 1 },
};

function PulsingBadge() {
  return (
    <Animated.View style={{
      width: 100,
      height: 100,
      borderRadius: 50,
      backgroundColor: '#ef4444',
      animationName: pulseAnimation,
      animationDuration: 2000,
      animationIterationCount: 'infinite',
    }} />
  );
}

const BOX_HEIGHT = 40;

export const SearchScreen = () => {
    const [containerWidth, setContainerWidth] = useState(0);
    const [query, setQuery] = useState('');

    const navigation = useNavigation();
    const width = useSharedValue(BOX_HEIGHT);

    const animatedStyle = useAnimatedStyle(() => {
        return {
            width: withTiming(width.value, {
                duration: 600,
            }),
        };
    });

    const toggleWidth = () => {
        width.value = width.value === BOX_HEIGHT ? containerWidth : BOX_HEIGHT;
    };

    useEffect(() => {
        if(containerWidth) {
            toggleWidth()
        }
    }, [containerWidth]);

    return (
        <SafeAreaView 
            style={{ flex: 1 }}
            onLayout={(event) => {
                setContainerWidth(event?.nativeEvent?.layout?.width);
            }}
        >
            <View style={styles.header}>
                {/* <Text style={TYPOGRAPHY.h1}>
                    Search
                </Text> */}
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

            {/* <Text style={TYPOGRAPHY.h3} onPress={() => navigation.goBack()}>
                Go back
            </Text> */}
        </SafeAreaView>
    )
}


const styles = StyleSheet.create({
  header: {
    width: '100%',
    alignItems: 'flex-end',
  },
  box: {
    height: BOX_HEIGHT,
    backgroundColor: COLORS.BACKGROUND.surface,
    borderRadius: BOX_HEIGHT / 2,

    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
    overflow: 'hidden',
  },
});