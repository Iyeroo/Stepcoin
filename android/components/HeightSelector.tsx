import React, { useRef, useState,useEffect } from "react";
import { View, Text, ScrollView, StyleSheet, TouchableOpacity ,Image,Animated} from "react-native";

const ITEM_HEIGHT = 80;
const WHEEL_HEIGHT = ITEM_HEIGHT * 7; // show ~7 items
const CENTER_OFFSET = (WHEEL_HEIGHT - ITEM_HEIGHT) / 2;
const PURPLE = "#7B2CFF";

export default function HeightSelector({onContinue}) {
  const scrollRef = useRef(null);

  const [selected, setSelected] = useState(28);
const [unit, setUnit] = useState("cm"); // "cm" or "ft"
const heights = unit === "cm" ? Array.from({ length: 251 }, (_, i) => i) // 0-250 cm
                               : Array.from({ length: 9*12 }, (_, i) => i); // 0-8 ft in inches

useEffect(() => {
  if(scrollRef.current){
    scrollRef.current.scrollTo({ y: 0, animated: false });
    setSelected(heights[0]);
  }
}, [unit]);

  const onEnd = (e) => {
    const y = e.nativeEvent.contentOffset.y;
    const index = Math.round(y / ITEM_HEIGHT);
    const safeIndex = Math.max(0, Math.min(index, heights.length - 1));
    const finalY = safeIndex * ITEM_HEIGHT;

    scrollRef.current?.scrollTo({ y: finalY, animated: true });
    setSelected(heights[safeIndex]);
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
                    <Animated.View style={[styles.progressFill, { width: '42%' }]} />
                  </View>
                  <Text style={styles.stepText}>4/6</Text>
                </View>
              </View>
      <Text style={styles.title}>
        What's <Text style={{ color: PURPLE }}>Your</Text> Height?
      </Text>
      <Text style={styles.sub}>Share your Height with us.</Text>
      <View style={{width:200,flexDirection:'row',justifyContent:'space-between',marginBottom:20}}>
       <TouchableOpacity style={[styles.unitButton,unit==="cm" && styles.unitButtonSelected ]}onPress={() => setUnit("cm")}><Text style={[styles.unitText,unit==="cm"&& styles.isTextSelected]}>CM</Text></TouchableOpacity>
<TouchableOpacity style={[styles.unitButton,unit==="ft" && styles.unitButtonSelected]} onPress={() => setUnit("ft")}><Text style={[styles.unitText,unit==="ft"&& styles.isTextSelected]}>Ft</Text></TouchableOpacity>

      </View>

      <View style={[styles.wheel, { height: WHEEL_HEIGHT }]}>
        {/* Center lines */}
        <View style={[styles.overlay, { top: CENTER_OFFSET }]}>
          <View style={styles.line} />
          <View style={styles.line} />
        </View>

        {/* Scrollable ages */}
        <ScrollView
        key={unit}
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
          {heights.map((height) => {
            const isSelected = height === selected;
            return (
              <View style={styles.itemContainer} key={height}>
                <Text
                  style={[
                    styles.itemText,
                    isSelected && styles.itemSelected,
                  ]}
                >
                  {height}
                </Text>
              </View>
            );
          })}
        </ScrollView>

        {/* Fixed "years" text in the center between purple lines */}
        <View style={[styles.fixedYears, { top: CENTER_OFFSET }]}>
          <Text style={styles.yearsText}>{unit}</Text>
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
    unitButton: {
    backgroundColor: '#F3E8FF',
    width: 60,
height: 60,
    borderRadius: 15,
    alignItems: 'center',
    flex:1,
    justifyContent: 'center',
    alignContent:'center',
    textAlign: 'center',
    marginRight:10,
    
  },
  unitText: {
    color: PURPLE,
    fontWeight: '700',
    
    fontSize: 16,
  },
    unitButtonSelected: {
    backgroundColor: PURPLE,
    },
    isTextSelected: {
    color: '#FFF',  
    },
});
