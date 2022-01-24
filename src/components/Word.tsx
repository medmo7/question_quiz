import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { Tooltip } from 'react-native-elements';

import { QuestionWord } from '../util/types';
import { COLORS } from '../util/constants';

type Props = {
  data: QuestionWord
}

export default function Word(props: Props) {
  return (
    <View style={styles.container}>
      <Tooltip
       backgroundColor={COLORS.white}
       withOverlay={false}
       containerStyle={{ maxWidth: 100, paddingHorizontal:10 }}
        popover={<Text>{props.data.translation}</Text>}
      >
        <Text style={styles.word}>{props.data.word}</Text>
      </Tooltip>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 5,
    justifyContent: 'center',
    alignContent: 'center'
  },
  word: {
    fontSize: 20,
    color: COLORS.white,
  }
});
