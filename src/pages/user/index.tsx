import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, Alert, ScrollView } from "react-native";
import { useNavigation, NavigationProp } from "@react-navigation/native";
import { FontAwesome6 } from "@expo/vector-icons";
import { style } from "./styles";
import { themas } from "../../global/themes";

export default function User() {
  const navigation = useNavigation<NavigationProp<any>>();

  const [isEditing, setIsEditing] = useState(false);

  const [userInfo, setUserInfo] = useState({
    nome: "Isadora Miranda",
    email: "isadora@gmail.com",
    idade: "17",
    nascimento: "10/03/2008",
    cidade: "Curitiba",
    estado: "PR",
  });

  const handleChange = (field: keyof typeof userInfo, value: string) => {
    setUserInfo({ ...userInfo, [field]: value });
  };

  const handleSave = () => {
    setIsEditing(false);
    Alert.alert("Sucesso", "Informações atualizadas com sucesso!");
  };

  const handleLogout = () => {
    Alert.alert("Logout", "Você saiu da sua conta!");
    navigation.reset({ routes: [{ name: "Login" }] });
  };

  return (
    <ScrollView contentContainerStyle={[style.container, { paddingBottom: 40 }]}>
      {/* Cabeçalho com ícone e nome */}
      <View style={style.header}>
        <FontAwesome6 name="user-circle" size={110} style={{ color: themas.colors.primary }} />
        <Text style={style.name}>{userInfo.nome}</Text>
      </View>

      {/* Caixa de informações */}
      <View style={style.infoBox}>
        {Object.keys(userInfo).map((key) => (
          <View key={key} style={style.infoItem}>
            <Text style={style.label}>{key.toUpperCase()}:</Text>
            {isEditing ? (
              <TextInput
                style={style.input}
                value={userInfo[key as keyof typeof userInfo]}
                onChangeText={(text) => handleChange(key as keyof typeof userInfo, text)}
              />
            ) : (
              <Text style={style.value}>{userInfo[key as keyof typeof userInfo]}</Text>
            )}
          </View>
        ))}
      </View>

      {/* Botões de ação */}
      <View style={style.buttonRow}>
        {isEditing ? (
          <TouchableOpacity style={style.saveButton} onPress={handleSave}>
            <FontAwesome6 name="check" size={18} color="#fff" />
            <Text style={style.saveText}>Salvar</Text>
          </TouchableOpacity>
        ) : (
          <TouchableOpacity style={style.editButton} onPress={() => setIsEditing(true)}>
            <FontAwesome6 name="pen-to-square" size={18} color="#fff" />
            <Text style={style.editText}>Editar</Text>
          </TouchableOpacity>
        )}

        <TouchableOpacity style={style.logoutButton} onPress={handleLogout}>
          <FontAwesome6 name="right-from-bracket" size={18} color="#fff" />
          <Text style={style.logoutText}>Sair</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}
