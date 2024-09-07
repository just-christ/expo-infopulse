import React from 'react'
import { Tabs } from 'expo-router'
import { TabBar } from '@/components/TabBar'

const TabLayout = () => {
  return ( 
    <Tabs tabBar={(props) => <TabBar {...props} />} screenOptions={{headerShown: false}}>
      <Tabs.Screen
        name="index"
        options={{
          title: "Accueil",
        }}
      />
      <Tabs.Screen
        name="discover"
        options={{
          title: "Découverte", 
        }}
      />
      <Tabs.Screen
        name="saved"
        options={{
          title: "Sauvegardes",
        }}
      />
      <Tabs.Screen
        name="settings"
        options={{
          title: "Paramètres",
        }}
      />
    </Tabs>
  )
}

export default TabLayout
