import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#002121",
    justifyContent: "center",
    alignItems: "center",
    paddingTop: 45,
    minHeight: "100%",
  },
  logo: {
    width: 275,
    height: 275,
    marginBottom: 45,
  },
  titulo: {
    fontSize: 30,
    color: "#fff",
    marginBottom: 15,
  },
  texto: {
    fontSize: 15,
    color: "#aaa",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    marginBottom: 100,
  },
  link: {
    color: "#25d4ff",
    fontWeight: "bold",
  },
  buttonContainer: {
    width: "90%",
    height: 40,
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    borderRadius: 30,
    backgroundColor: "#119f7f",
    position: "absolute",
    bottom: 10,
  },
});
