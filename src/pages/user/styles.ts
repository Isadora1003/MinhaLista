import { StyleSheet } from "react-native";
import { themas } from "../../global/themes";

export const style = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: "#F8F8F8",
    alignItems: "center",
    paddingVertical: 40,
    paddingHorizontal: 20,
    marginTop: 20,
  },

  header: {
    alignItems: "center",
    marginBottom: 30,
  },

  name: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#333",
    marginTop: 10,
  },

  infoBox: {
    width: "100%",
    backgroundColor: "#FFF",
    borderRadius: 16,
    padding: 20,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },

  infoItem: {
    marginBottom: 15,
  },

  label: {
    fontSize: 14,
    color: "#666",
    marginBottom: 4,
  },

  value: {
    fontSize: 16,
    color: "#333",
  },

  input: {
    borderWidth: 1,
    borderColor: "#CCC",
    borderRadius: 8,
    padding: 8,
    fontSize: 16,
    color: "#333",
  },

  buttonRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    marginTop: 30, // 🔹 mais espaço acima
    marginBottom: 10, // 🔹 evita ficar colado na base
  },

  editButton: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: themas.colors.primary,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
  },

  editText: {
    color: "#FFF",
    fontSize: 16,
    fontWeight: "bold",
    marginLeft: 6,
  },

  saveButton: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#27AE60",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
  },

  saveText: {
    color: "#FFF",
    fontSize: 16,
    fontWeight: "bold",
    marginLeft: 6,
  },

  logoutButton: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: themas.colors.red,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
  },

  logoutText: {
    color: "#FFF",
    fontSize: 16,
    fontWeight: "bold",
    marginLeft: 6,
  },
});
