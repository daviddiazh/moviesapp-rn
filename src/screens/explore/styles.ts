import { StyleSheet } from "react-native";
import { SPACING } from "../../theme/spacing";

export const styles = StyleSheet.create({
    screen: {
        flex: 1
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingBottom: SPACING.MD
    },
})