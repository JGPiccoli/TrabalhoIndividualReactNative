import React, { useState } from "react";
import {
  FlatList,
  Image,
  Text,
  TextInput,
  View,
  SafeAreaView,
} from "react-native";
import { styles } from "./style";
import { DataAPI } from "../../Mock/Data";
import { Icon } from "react-native-elements";

export const TelaHome = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearchChange = (text: string) => {
    setSearchQuery(text);
  };

  return (
    <SafeAreaView style={styles.Back}>
      <Text style={styles.logo}>WhatsApp</Text>
      <View style={styles.searchBar}>
      <Icon name="search" type="font-awesome" size={20} color="#fff" />
        <TextInput
          style={styles.searchInput}
          placeholder="Pesquisar"
          placeholderTextColor="#888"
          value={searchQuery}
          onChangeText={handleSearchChange}
        />
      </View>
      <FlatList
        data={DataAPI}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.boxCard}>
            <Image
              style={styles.avatar}
              source={
                typeof item.avatar === "string"
                  ? { uri: item.avatar }
                  : item.avatar
              }
              alt="Avatar de perfil"
            />
            <View style={styles.boxInfo}>
              <Text style={styles.name}>{item.name}</Text>
              <View style={styles.lastMessageRow}>
                <Text style={styles.lastMessage}>{item.lastMessage}</Text>
              </View>
            </View>
            <Text style={styles.time}>{item.time}</Text>
          </View>
        )}
        contentContainerStyle={{ paddingBottom: 20 }}
      />
    </SafeAreaView>
  );
};
