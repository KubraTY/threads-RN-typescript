import * as React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { RefreshControl, ScrollView } from 'react-native-gesture-handler';
import Lottie from 'lottie-react-native'
import { Platform } from 'react-native';

export default function TabOneScreen() {
  const animationRef = React.useRef<Lottie>(null)
  return (
   <SafeAreaView>
    <ScrollView
    contentContainerStyle={{
      alignSelf: "center",
      paddingHorizontal: 10,
      paddingTop: Platform.select({android: 30}),
    }}
    refreshControl={
      <RefreshControl 
      refreshing={false}
      onRefresh={() => {animationRef.current?.play()}}
      tintColor={"transparent"}
      />
    }
    >
      <Lottie 
      ref={animationRef}
      source={require("../../assets/lottie-animations/Animation-threads.json")} 
      loop={false}
      autoPlay
      style={{
        width: 80,
        height: 80,
      }}
      />
    </ScrollView>
   </SafeAreaView>
  );
}
