import { useNavigation } from "@react-navigation/native";
import { Image, Text, TouchableOpacity, View } from "react-native";
import WhatsAppImg from "../../assets/WhatsAppImg.png";
import { styles } from "./style";

export const AddAcount = () => {
  const navigate = useNavigation();

  const Concordar = () => {
    navigate.navigate("StackLogin");
  };

  return (
    <View style={styles.container}>
      <Image source={WhatsAppImg} style={styles.logo} />

      <Text style={styles.titulo}>Adicionar conta</Text>
      <View style={styles.texto}>
        <Text style={styles.texto}>
          Leia nossa{" "}
          <Text style={styles.link}>Política e Privacidade.</Text>{" "}
          Toque em CONCORDAR E CONTINUAR para aceitar os{" "}
          <Text style={styles.link}>Termos de Serviço.</Text>
        </Text>
      </View>

      <TouchableOpacity style={styles.buttonContainer} onPress={Concordar}>
        <Text>CONCORDAR E CONTINUAR</Text>
      </TouchableOpacity>
    </View>
  );
};
