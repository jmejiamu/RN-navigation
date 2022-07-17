import React from "react";
import { TextInput, View, Text } from "react-native";
import Label from "./label";
import { styles } from "./styles";

const CustomInput = ({
  editable,
  children,
  value,
  onChangeText,
  onFocus,
  onBlur,
  maxLength,
  placeholder,
  placeholderTextColor,
  keyboardType,
  hasError,
  error,
  touched,
  ...props
}) => {
  return (
    <View style={styles.container}>
      <Label {...props}>
        <TextInput
          {...props}
          style={styles.input}
          editable={!editable}
          onFocus={onFocus}
          onChangeText={onChangeText}
          onBlur={onBlur}
          placeholder={placeholder}
          placeholderTextColor={placeholderTextColor}
          maxLength={maxLength}
          keyboardType={keyboardType}
          value={value}
        />
      </Label>
      {hasError && touched && (
        <View style={styles.message}>
          <Text style={styles.helperText}>{error}</Text>
        </View>
      )}
    </View>
  );
};

export default CustomInput;
