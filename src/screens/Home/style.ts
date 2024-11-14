import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  Back: {
    paddingLeft: 10,
    paddingTop: 25,
    backgroundColor: "#001919",
  },
  logo: {
    fontSize: 25,
    paddingBottom: 10,
    color: "#fff",
  },
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  boxCard: {
    flexDirection: "row",
    paddingVertical: 10,
    marginHorizontal: 10,
  },
  boxInfo: {
    width: "72%",
    marginLeft: 10,
    justifyContent: "center",
  },
  name: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#E4E4E4",
  },
  lastMessageRow: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 3,
  },
  lastMessage: {
    fontSize: 14,
    color: "#666666",
    maxWidth: "90%",
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  time: {
    fontSize: 12,
    color: "#666",
    alignSelf: "flex-start",
  },
  searchBar: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#3c3c3c",
    borderRadius: 30,
    paddingHorizontal: 10,
    paddingVertical: 5,
    marginHorizontal: 10,
  },
  searchInput: {
    fontSize: 16,
    color: "#5c5c5c",
    width: "100%",
  },
  text: {
    color: "#fff",
    marginTop: 20,
  },
});
