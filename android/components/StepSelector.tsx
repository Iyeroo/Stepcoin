import React, {  useRef, useState } from "react";
import { View, Text, FlatList, StyleSheet, TouchableOpacity ,Image,Animated} from "react-native";

const ITEM_HEIGHT = 80;
const WHEEL_HEIGHT = ITEM_HEIGHT * 7; // show ~7 items
const CENTER_OFFSET = (WHEEL_HEIGHT - ITEM_HEIGHT) / 2;
const PURPLE = "#7B2CFF";

export default function StepSelector({onContinue}) {
  const scrollRef = useRef<FlatList<number>>(null);




const STEPS_VALUES = Array.from({ length: 9001 }, (_, i) => 1000 + i);
const DEFAULT_STEPS = 5500;

const [selected, setSelected] = useState(DEFAULT_STEPS);
// 1000 → 10000


  const onEnd = (e) => {
    const y = e.nativeEvent.contentOffset.y;
    const index = Math.round(y / ITEM_HEIGHT);
    const safeIndex = Math.max(0, Math.min(index, STEPS_VALUES.length - 1));
    scrollRef.current?.scrollToIndex({ index: safeIndex, animated: true });
    setSelected(STEPS_VALUES[safeIndex]);
  };
  const handleContinue = () => 
  {
  onContinue?.();
    // Handle continue action, e.g., navigate to the next screen
  }

  return (
    <View style={styles.screen}>
          <View style={styles.topBar}>
                <Image source={require('../assets/icons/arrow.png')} style={styles.arrowIcon} />
                <View style={styles.progressContainer}>
                  <View style={styles.progressBackground}>
                    <Animated.View style={[styles.progressFill, { width: '38%' }]} />
                  </View>
                  <Text style={styles.stepText}>3/6</Text>
                </View>
              </View>
      <Text style={styles.title}>
        SET YOUR  <Text style={{ color: PURPLE }}>STEP</Text> Goal?
      </Text>
      <Text style={styles.sub}>Choose your daily steps.</Text>

      <View style={[styles.wheel, { height: WHEEL_HEIGHT }]}>
        {/* Center lines */}
        <View style={[styles.overlay, { top: CENTER_OFFSET }]}>
          <View style={styles.line} />
          <View style={styles.line} />
        </View>

        <FlatList
          ref={scrollRef}
          data={STEPS_VALUES}
          keyExtractor={(item) => String(item)}
          showsVerticalScrollIndicator={false}
          initialScrollIndex={DEFAULT_STEPS - STEPS_VALUES[0]}
          getItemLayout={(data, index) => ({ length: ITEM_HEIGHT, offset: ITEM_HEIGHT * index, index })}
          snapToInterval={ITEM_HEIGHT}
          decelerationRate="fast"
          onMomentumScrollEnd={onEnd}
          contentContainerStyle={{ paddingTop: CENTER_OFFSET, paddingBottom: CENTER_OFFSET }}
          renderItem={({ item }) => {
            const isSelected = item === selected;
            return (
              <View style={styles.itemContainer}>
                <Text style={[styles.itemText, isSelected && styles.itemSelected]}>{item}</Text>
              </View>
            );
          }}
        />

        {/* Fixed "years" text in the center between purple lines */}
        <View style={[styles.fixedYears, { top: CENTER_OFFSET }]}>
          <Text style={styles.yearsText}>steps</Text>
        </View>
      </View>

      <View style={styles.buttonRow}>
        <TouchableOpacity style={styles.skipButton}>
          <Text style={styles.skipText}>Skip</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.continueButton} onPress={handleContinue}>
          <Text style={styles.continueText} >Continue</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
    
  screen: {
   flex: 1,
    backgroundColor: '#FFF',
    paddingHorizontal: 24,
    paddingTop: 40,
    alignItems: 'center',
      },
  topBar: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  arrowIcon: {
    width: 24,
    height: 24,
    tintColor: '#000',
  },
  progressContainer: {
    flex: 1,
    alignItems: 'center',
  },
  progressBackground: {
    height: 6,
    width: 150,
    backgroundColor: '#E0E0E0',
    borderRadius: 3,
    marginBottom: 4,
  },
  progressFill: {
    height: 6,
    backgroundColor: '#7C4DFF',
    borderRadius: 3,
  },
  stepText: {
    fontSize: 12,
    color: '#555',
  },
  
  title: { fontSize: 26, fontWeight: "700", marginTop: 10 },
  sub: { color: "#9A9A9A", fontSize: 15, marginBottom: 10,},
  wheel: {  width: 200, position: "relative" },
  overlay: { position: "absolute", width: "100%", alignItems: "center" },
  line: { height: 1.5, width: "85%", backgroundColor: PURPLE, marginVertical: 20 },
  itemContainer: { height: ITEM_HEIGHT, justifyContent: "center", alignItems: "center" },
  itemText: { fontSize: 22, color: "#000" },
  itemSelected: { fontSize: 32, color: PURPLE, fontWeight: "700" },
  fixedYears: {
    position: "absolute",
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    marginLeft: 50,
    height: ITEM_HEIGHT,
  },
  yearsText: { fontSize: 22, color: PURPLE, fontWeight: "700" },
  buttonRow: {
    position: "absolute",
    bottom: 40,
    width: "90%",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  skipButton: { flex: 1, backgroundColor: "#F3E8FF", paddingVertical: 15, borderRadius: 30, marginRight: 10, alignItems: "center" },
  skipText: { color: PURPLE, fontSize: 16, fontWeight: "600" },
  continueButton: { flex: 1, backgroundColor: PURPLE, paddingVertical: 15, borderRadius: 30, marginLeft: 10, alignItems: "center" },
  continueText: { color: "#fff", fontSize: 16, fontWeight: "700" },
});
