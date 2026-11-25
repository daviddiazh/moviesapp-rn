import Animated from "react-native-reanimated";

const pulseAnimation = {
  '0%': { scale: 1, opacity: 1 },
  '50%': { scale: 1.05, opacity: 0.4 },
  '100%': { scale: 1, opacity: 1 },
};

export function PulsingBadge() {
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