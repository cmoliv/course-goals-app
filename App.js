import { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { FlatList, StyleSheet, View, Button } from 'react-native';

import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';

export default function App() {
  const [listOfGoals, setListOfGoals] = useState([]);
  const [modalIsVisible, setModalIsVisible] = useState(false);

  const deleteGoalHandler = (id) => {
    setListOfGoals((currentCourseGoals) => {
      return currentCourseGoals.filter((goal) => goal.id !== id);
    });
  };

  const startAddGoalHandler = () => {
    setModalIsVisible(true);
  };

  const endAddGoalHandler = () => {
    setModalIsVisible(false);
  };

  return (
    <>
      <StatusBar style="light" />
      <View style={styles.appContainer}>
        <Button
          title="Add new goal"
          color="#5e0acc"
          onPress={startAddGoalHandler}
        />
        <GoalInput
          showModal={modalIsVisible}
          setListOfGoals={setListOfGoals}
          closeModal={endAddGoalHandler}
        />
        <View style={styles.goalsContainer}>
          <FlatList
            data={listOfGoals}
            renderItem={(goal) => {
              return (
                <GoalItem
                  goal={goal.item}
                  id={goal.item.id}
                  onDeleteItem={deleteGoalHandler}
                />
              );
            }}
            keyExtractor={(item, index) => {
              return item.id;
            }}
          />
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16,
  },
  goalsContainer: {
    flex: 4,
  },
});
