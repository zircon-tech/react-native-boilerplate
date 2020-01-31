import React, {useState, useEffect} from 'react';
import {View, StyleSheet} from 'react-native';
import InputChar from 'components/components/inputChar';

const InputCode = props => {
  // Props
  const {codeLength, onChangeText} = props;

  // Hooks
  const [code, setCode] = useState(new Array(codeLength).fill(null));
  const [inputs, setInputs] = useState(new Array(codeLength).fill(null));

  useEffect(() => {
    code && onChangeText(code.join(''));
  }, [code]);

  // Render
  return (
    <View style={styles.container}>
      {code.map((e, index) => (
        <InputChar
          autoFocus={index === 0}
          key={index}
          value={e}
          inputRef={async r => {
            if (inputs[index] === null)
              await setInputs(Object.values({...inputs, [index]: r}));
          }}
          onFocus={() => setCode(Object.values({...code, [index]: null}))}
          onChangeText={value => {
            setCode(Object.values({...code, [index]: value}));
            value && inputs[index + 1] && inputs[index + 1].focus();
          }}
        />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
  },
});

export default InputCode;
