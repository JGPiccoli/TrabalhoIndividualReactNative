import { useNavigation } from "@react-navigation/native";
import { useState } from "react";
import {
  Alert,
  Text,
  TextInput,
  TouchableOpacity,
  View
} from "react-native";
import { styles } from "./style";

export const TelaLogin = () => {
  const navigate = useNavigation();
  const [telefone, setTelefone] = useState("");

  const Inserir = () => {
    Alert.alert(
      "Aviso",
      "Um SMS foi enviado para esse número porfavor confirme o seu número"
    );
    navigate.navigate("TabsHome");
  };

  return (
    <View style={styles.container}>
      <View style={styles.textoLogin}>
        <Text style={styles.titulo}>Insira seu número de telefone</Text>
        <Text style={styles.texto}>
          O WhatsApp precisa confirmar seu número de telefone. Essa ação está
          sujeita à cobranças da sua operadora.{" "}
          <Text style={styles.link}>Qual é meu número de telefone?</Text>
        </Text>
        <TextInput
          style={styles.input}
          placeholder="+55 (00) 00000-0000"
          placeholderTextColor={"#fff"}
          keyboardType="phone-pad"
          maxLength={15}
          value={telefone}
          onChangeText={setTelefone}
        />
      </View>

      <TouchableOpacity style={styles.buttonContainer} onPress={Inserir}>
        <Text>Avançar</Text>
      </TouchableOpacity>
    </View>
  );
};
