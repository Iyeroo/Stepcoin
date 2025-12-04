import React, { useRef, useState } from "react";
import { View, Text, ScrollView, StyleSheet, TouchableOpacity ,Image,Animated} from "react-native";

const ITEM_HEIGHT = 80;
const WHEEL_HEIGHT = ITEM_HEIGHT * 7; // show ~7 items
const CENTER_OFFSET = (WHEEL_HEIGHT - ITEM_HEIGHT) / 2;
const PURPLE = "#7B2CFF";

export default function AgePicker({onContinue}) {
  const scrollRef = useRef(null);

  const [selected, setSelected] = useState(28);

  const ages = Array.from({ length: 60 }, (_, i) => i + 18);

  const onEnd = (e) => {
    const y = e.nativeEvent.contentOffset.y;
    const index = Math.round(y / ITEM_HEIGHT);
    const safeIndex = Math.max(0, Math.min(index, ages.length - 1));
    const finalY = safeIndex * ITEM_HEIGHT;

    scrollRef.current?.scrollTo({ y: finalY, animated: true });
    setSelected(ages[safeIndex]);
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
        How <Text style={{ color: PURPLE }}>Old</Text> Are You?
      </Text>
      <Text style={styles.sub}>Share your age with us.</Text>

      <View style={[styles.wheel, { height: WHEEL_HEIGHT }]}>
        {/* Center lines */}
        <View style={[styles.overlay, { top: CENTER_OFFSET }]}>
          <View style={styles.line} />
          <View style={styles.line} />
        </View>

        {/* Scrollable ages */}
        <ScrollView
          ref={scrollRef}
          showsVerticalScrollIndicator={false}
          snapToInterval={ITEM_HEIGHT}
          snapToAlignment="start"
          decelerationRate="fast"
          onMomentumScrollEnd={onEnd}
          contentContainerStyle={{
            paddingTop: CENTER_OFFSET,
            paddingBottom: CENTER_OFFSET,
          }}
        >
          {ages.map((age) => {
            const isSelected = age === selected;
            return (
              <View style={styles.itemContainer} key={age}>
                <Text
                  style={[
                    styles.itemText,
                    isSelected && styles.itemSelected,
                  ]}
                >
                  {age}
                </Text>
              </View>
            );
          })}
        </ScrollView>

        {/* Fixed "years" text in the center between purple lines */}
        <View style={[styles.fixedYears, { top: CENTER_OFFSET }]}>
          <Text style={styles.yearsText}>years</Text>
        </View>
      </View>

      <View style={styles.buttonRow}>
        <TouchableOpacity style={styles.skipButton}>
          <Text style={styles.skipText}>Skip</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.continueButton}  onPress={handleContinue}>
          <Text style={styles.continueText}>Continue</Text>
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
