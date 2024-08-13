import { StyleSheet, View, Text, Pressable } from 'react-native';

function GoalItem({ goal, id, onDeleteItem }) {
  return (
    <View style={styles.goalItem}>
      <Pressable
        android_ripple={{ color: '#210644' }}
        onPress={onDeleteItem.bind(this, id)}
      >
        <Text style={styles.goalText}>{goal.text}</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  goalItem: {
    margin: 8,
    borderRadius: 6,
    backgroundColor: '#520acc',
  },
  goalText: {
    color: 'white',
    padding: 8,
  },
});

export default GoalItem;
