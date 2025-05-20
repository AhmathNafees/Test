import { HapticTab } from '@/components/HapticTab';
import TabBarBackground from '@/components/ui/TabBarBackground';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';
import { MaterialIcons } from '@expo/vector-icons';
import { Tabs } from 'expo-router';
import React from 'react';
import { Platform, View } from 'react-native';

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
        headerShown: false,
        tabBarShowLabel: false,
        tabBarButton: HapticTab,
        tabBarBackground: TabBarBackground,
        tabBarStyle: Platform.select({
          ios: {
            position: 'absolute',
            borderTopLeftRadius: 24,
            borderTopRightRadius: 24,
            height: 70,
            backgroundColor: 'white',
          },
          android: {
            position: 'absolute',
            borderTopLeftRadius: 24,
            borderTopRightRadius: 24,
            height: 70,
            backgroundColor: 'white',
            elevation: 5,
          },
        }),
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          tabBarIcon: ({ color, focused }) => (
            <View style={{ alignItems: 'center' }}>
              <MaterialIcons name='home' size={24} color={color}/>
              {focused && (
                <View
                  style={{
                    width: 6,
                    height: 6,
                    borderRadius: 3,
                    backgroundColor: color,
                    marginTop: 2,
                  }}
                />
              )}
            </View>
          ),
        }}
      />
      <Tabs.Screen
        name="wallet"
        options={{
          title: 'Wallet',
          tabBarIcon: ({ color }) => (
            <MaterialIcons name='wallet' size={24} color={color}/>
          ),
        }}
      />
      <Tabs.Screen
        name="center"
        options={{
          title: '',
          tabBarIcon: ({ color }) => (
            <View
              style={{
                width: 60,
                height: 60,
                borderRadius: 30,
                backgroundColor: Colors[colorScheme ?? 'light'].tint,
                justifyContent: 'center',
                alignItems: 'center',
                marginBottom: 40, // to lift it up
              }}
            >
              <View
                style={{
                  width: 40,
                  height: 40,
                  borderRadius: 20,
                  backgroundColor: 'white',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
              >
                <MaterialIcons name='play-circle' size={24} color={color}/>
              </View>
            </View>
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: 'Profile',
          tabBarIcon: ({ color }) => (
           <MaterialIcons name='account-circle' size={24} color={color}/>
          ),
        }}
      />
      <Tabs.Screen
        name="more"
        options={{
          title: 'More',
          tabBarIcon: ({ color }) => (
            <MaterialIcons name='more-horiz' size={24} color={color}/>
          ),
        }}
      />
    </Tabs>
  );
}
