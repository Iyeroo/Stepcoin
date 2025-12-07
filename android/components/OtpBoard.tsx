import React, { useState } from "react";
import {
  StyleSheet,
  View,
  TouchableOpacity,
  Text,
  Image,
  Modal,
  ActivityIndicator,
} from "react-native";

const PURPLE = "#7B2CFF";

const OtpBoard = ({ onVerify }) => {
  const [digitss, setDigits] = useState(["", "", "", ""]);
  const [activeIndex, setActiveIndex] = useState(0);
  const [modalVisible, setModalVisible] = useState(false); // **Correct state**

  const keypad = [
    ["1", "2", "3"],
    ["4", "5", "6"],
    ["7", "8", "9"],
    ["*", "0", "⌫"],
  ];

  // ✅ CLEAN – handle verify is OUTSIDE handlePress
  const handleVerifyCode = () => {
    setModalVisible(true);

    // simulate loading
    setTimeout(() => {
      setModalVisible(false);
      onVerify?.();
    }, 2000);
  };

  // ------------------------------
  //  HANDLE KEYPAD TAP
  // ------------------------------
  const handlePress = (key) => {
    if (key === "⌫") {
      // Backspace
      const next = [...digitss];
      const idx = next.findLastIndex((d) => d !== "");
      if (idx !== -1) next[idx] = "";
      setDigits(next);
      setActiveIndex(Math.max(idx, 0));
      return;
    }

    if (key === "*") return; // disabled

    // Fill next empty box
    const next = [...digitss];
    const index = next.findIndex((d) => d === "");
    if (index === -1) return;

    next[index] = key;
    setDigits(next);
    setActiveIndex(Math.min(index + 1, next.length - 1));
  };

  return (
    <View style={styles.screen}>
      <View style={styles.inputContainer}>
        <View style={styles.inputRow}>
          <Image
            source={require("../assets/icons/arrow.png")}
            style={styles.inputIcon}
          />
        </View>

        <Text style={styles.title}>Enter OTP Code</Text>
        <Text style={styles.description}>
          We've sent a 4-digit code to your email
        </Text>
      </View>

      {/* OTP Boxes */}
      <View style={styles.otpContainer}>
        {digitss.map((digit, index) => (
          <View
            key={index}
            style={[
              styles.otpBox,
              index === activeIndex && {
                borderColor: PURPLE,
                borderWidth: 2,
              },
            ]}
          >
            <Text style={styles.otpText}>{digit}</Text>
          </View>
        ))}
      </View>

      {/* Resend */}
      <View style={styles.resendContainer}>
        <Text style={styles.description}>
          You can resend code in 60 seconds
        </Text>
        <Text style={styles.resendText}>Resend Code</Text>
      </View>

      {/* Verify button */}
      <TouchableOpacity style={styles.verifyButton} onPress={handleVerifyCode}>
        <Text style={styles.verifyButtonText}>Verify Code</Text>
      </TouchableOpacity>

      {/* KEYPAD */}
      <View style={styles.keypad}>
        {keypad.map((row, rowIndex) => (
          <View key={rowIndex} style={styles.row}>
            {row.map((key) => (
              <TouchableOpacity
                key={key}
                onPress={() => handlePress(key)}
                style={styles.key}
              >
                <Text style={styles.keyText}>{key}</Text>
              </TouchableOpacity>
            ))}
          </View>
        ))}
      </View>

      {/* MODAL */}
      <Modal transparent={true} visible={modalVisible} animationType="fade">
        <View style={styles.overlay}>
          <View style={styles.loaderBox}>
            <ActivityIndicator size="large" color="#6C63FF" />
            <Text style={styles.loadingText}>Verifying...</Text>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default OtpBoard;

// ---------------------------------------------------------

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    paddingTop: 40,
  },

  inputContainer: {
    marginHorizontal: 20,
  },

  inputRow: {
    marginTop: 10,
    marginBottom: 20,
  },

  inputIcon: {
    width: 24,
    height: 24,
  },

  otpContainer: {
    flexDirection: "row",
    justifyContent: "center",
    gap: 20,
    marginTop: 25,
    marginBottom: 25,
  },

  otpBox: {
    width: 50,
    height: 50,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
  },

  otpText: {
    fontSize: 22,
    fontWeight: "600",
  },

  resendContainer: {
    alignItems: "center",
  },

  keypad: {
    width: "100%",
    position: "absolute",
    bottom: 0,
  },

  row: {
    flexDirection: "row",
  },

  key: {
    flex: 1,
    height: 70,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#eee",
  },

  keyText: {
    fontSize: 22,
    fontWeight: "600",
  },

  title: {
    fontSize: 28,
    fontWeight: "bold",
  },

  description: {
    fontSize: 16,
    color: "#333",
  },

  resendText: {
    fontSize: 16,
    marginTop: 10,
    color: "#007AFF",
  },

  verifyButton: {
    backgroundColor: PURPLE,
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: "center",
    marginHorizontal: 20,
    marginBottom: 20,
  },

  verifyButtonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "600",
  },

  overlay: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0,0,0,0.3)",
  },

  loaderBox: {
    width: 220,
    height: 140,
    backgroundColor: "#fff",
    borderRadius: 12,
    justifyContent: "center",
    alignItems: "center",
  },

  loadingText: {
    marginTop: 10,
    fontSize: 16,
    fontWeight: "500",
    color: "#333",
  },
});
