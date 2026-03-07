import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, ScrollView } from 'react-native';

export default function App() {
  // 1. State cho bộ đếm (Slide 05 - Phần 1)
  const [count, setCount] = useState(0);

  // 2. State cho màu nền (Slide 05 - Phần 2)
  const [bgColor, setBgColor] = useState('#ffffff');

  // Danh sách các màu theo yêu cầu bài tập
  const colorOptions = [
    { name: 'GREEN', hex: '#4CAF50' },
    { name: 'BLUE', hex: '#2196F3' },
    { name: 'BROWN', hex: '#795548' },
    { name: 'YELLOW', hex: '#FFEB3B' },
    { name: 'RED', hex: '#F44336' },
    { name: 'BLACK', hex: '#000000' },
  ];

  return (
    <View style={[styles.container, { backgroundColor: bgColor }]}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        
        <Text style={styles.title}>BÀI TẬP BUỔI 05</Text>

        {/* PHẦN BỘ ĐẾM */}
        <View style={styles.section}>
          <Text style={styles.label}>1. Bộ đếm số</Text>
          <Text style={styles.countText}>{count}</Text>
          <View style={styles.row}>
            <TouchableOpacity 
              style={[styles.button, styles.btnIncrease]} 
              onPress={() => setCount(count + 1)}
            >
              <Text style={styles.buttonText}>INCREASE</Text>
            </TouchableOpacity>
            
            <TouchableOpacity 
              style={[styles.button, styles.btnDecrease]} 
              onPress={() => setCount(count - 1)}
            >
              <Text style={styles.buttonText}>DECREASE</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* PHẦN ĐỔI MÀU NỀN */}
        <View style={styles.section}>
          <Text style={styles.label}>2. Chọn màu nền</Text>
          {colorOptions.map((item, index) => (
            <TouchableOpacity 
              key={index} 
              style={[styles.colorItem, { backgroundColor: item.hex }]}
              onPress={() => setBgColor(item.hex)}
            >
              <Text style={[
                styles.colorLabel, 
                item.name === 'YELLOW' ? { color: '#000' } : { color: '#fff' }
              ]}>
                {item.name}
              </Text>
            </TouchableOpacity>
          ))}
        </View>

      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollContent: {
    paddingTop: 60,
    paddingBottom: 40,
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 30,
    color: '#333',
  },
  section: {
    width: '100%',
    alignItems: 'center',
    marginBottom: 40,
    backgroundColor: 'rgba(255,255,255,0.3)',
    padding: 20,
    borderRadius: 15,
  },
  label: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 15,
  },
  countText: {
    fontSize: 80,
    fontWeight: 'bold',
    marginVertical: 10,
  },
  row: {
    flexDirection: 'row',
    gap: 15,
  },
  button: {
    paddingVertical: 12,
    paddingHorizontal: 25,
    borderRadius: 8,
    minWidth: 120,
    alignItems: 'center',
  },
  btnIncrease: {
    backgroundColor: '#2196F3',
  },
  btnDecrease: {
    backgroundColor: '#F44336',
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  colorItem: {
    width: '100%',
    padding: 15,
    borderRadius: 8,
    marginVertical: 5,
    alignItems: 'center',
    elevation: 3, // Bóng đổ cho Android
    shadowColor: '#000', // Bóng đổ cho iOS
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
  },
  colorLabel: {
    fontWeight: 'bold',
    fontSize: 16,
  },
});