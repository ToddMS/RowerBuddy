import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import * as Clipboard from 'expo-clipboard';

interface CopyButtonProps {
  textToCopy: string;
}

const CopyButton: React.FC<CopyButtonProps> = ({ textToCopy }) => {
  const copyToClipboard = async () => {
    await Clipboard.setStringAsync(textToCopy);
  };

  return (
    <TouchableOpacity onPress={copyToClipboard} style={styles.copyButton}>
      <Text style={styles.copyText}>📋 Copy</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  copyButton: {
    width: 70,
    height: 35,
    backgroundColor: '#444',
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  copyText: {
    color: 'white',
    fontSize: 14,
    fontWeight: 'bold',
  },
});

export default CopyButton;
