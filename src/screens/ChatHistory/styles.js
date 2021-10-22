import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingVertical: 8,
  },

  messageFromMe: {
    backgroundColor: "black",
    alignSelf: "flex-end",

    paddingLeft: 16,
    paddingRight: 8,
    paddingVertical: 8,
    marginHorizontal: 16,
    marginVertical: 2,

    borderTopLeftRadius: 16,
    borderBottomLeftRadius: 16,
    borderBottomRightRadius: 16,

    alignItems: "flex-end",
    flexDirection: "row",
  },
  messageTextFromMe: {
    color: "white",
  },

  messageToMe: {
    backgroundColor: "#eee",
    alignSelf: "flex-start",

    paddingLeft: 16,
    paddingRight: 8,
    paddingVertical: 8,
    marginHorizontal: 16,
    marginVertical: 2,

    borderTopRightRadius: 16,
    borderBottomLeftRadius: 16,
    borderBottomRightRadius: 16,

    alignItems: "flex-end",
    flexDirection: "row",
  },
  messageTextToMe: {
    color: "black",
  },

  messageTime: {
    color: "#aaa",
    fontSize: 10,
    marginLeft: 12,
    marginRight: 1,
  },
});
