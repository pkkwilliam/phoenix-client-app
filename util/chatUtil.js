import {
  GET_OPPOSITE_PARTIES,
  GET_UNRECEIVED_CHAT_MESSAGE,
  UPDATE_OPPOSITE_USER_CHAT_MESSAGE_RECEIVED,
} from "../service/service";
import { getMessages, saveMessages } from "../store/applicationStorage";
import { MESSAGE_CONTENT_MESSAGE_STRING } from "../enum/messageContent";
import { MESSAGE_TYPE_PRIVATE } from "../enum/messageType";

export function generateStorageChatMessage(users) {
  return users.map((user) => ({
    chatWith: user,
    content: undefined,
    messageContent: MESSAGE_CONTENT_MESSAGE_STRING.key,
    messageType: MESSAGE_TYPE_PRIVATE.key,
  }));
}

export async function getChatList(execute, store) {
  const currentMessages = getMessages();
  if (Object.keys(currentMessages).length < 20) {
    const users = await execute(GET_OPPOSITE_PARTIES(0, 20));
    const transformedChatMessages = generateStorageChatMessage(users.content);
    updateMessages(store, transformedChatMessages);
  }
}

export function organizeMessages(currentMessages, newMessages) {
  if (
    currentMessages === undefined ||
    currentMessages === null ||
    currentMessages === ""
  ) {
    currentMessages = {};
  }
  for (let index = 0; index < newMessages.length; index++) {
    const {
      chatWith,
      createBy,
      createTime,
      content,
      id,
      messageContent,
      messageType,
      received,
    } = newMessages[index];
    const { sid } = chatWith;
    // please refactor this
    if (currentMessages[sid] && content) {
      const containCurrentMessage = currentMessages[sid].messages.some(
        (message) => message.id === id
      );
      if (containCurrentMessage) {
        continue;
      }
      currentMessages[sid] = {
        chatWith,
        messages: [
          ...currentMessages[sid].messages,
          {
            content,
            createBy,
            createTime,
            id,
            messageContent,
            messageType,
            received,
          },
        ],
      };
    } else if (!currentMessages[sid]) {
      currentMessages[sid] = {
        chatWith,
        messages: [
          {
            content,
            createBy,
            createTime,
            id,
            messageContent,
            messageType,
            received,
          },
        ],
      };
    }
  }
  return currentMessages;
}

export function onChatWithMessageRead(execute, store, userSid) {
  setLocalUserMessageRead(store, userSid);
  execute(UPDATE_OPPOSITE_USER_CHAT_MESSAGE_RECEIVED(userSid));
}

export function setLocalUserMessageRead(store, userSid) {
  let count = 0;
  const currentMessages = getMessages();
  let userSidStorageMessages = currentMessages[userSid].messages;
  userSidStorageMessages = userSidStorageMessages.map((message) => {
    if (!message.received) {
      count++;
    }
    return { ...message, received: true };
  });
  currentMessages[userSid].messages = userSidStorageMessages;
  saveMessages(currentMessages);
  store.commit("setChat", currentMessages);
  updateMessageUnreceivedCount(store, store.state.chat.unreceivedCount - count);
}

export function startWebsocket(execute, store) {
  let currentStorageMessages = getMessages();
  let pageRequest = 0;
  let pageSize = 50;
  let totalServerPage = 0;
  const getUnreceivedMessage = async () => {
    pageRequest = 0;
    do {
      const { content, totalElements, totalPage } = await execute(
        GET_UNRECEIVED_CHAT_MESSAGE(pageRequest, pageSize)
      );
      totalServerPage = totalPage;
      currentStorageMessages = updateMessages(store, content);
      updateMessageUnreceivedCount(store, totalElements);
    } while (pageRequest++ < totalServerPage);
  };
  if (store.state.chatWebSocket.dirty) {
    store.commit("setChat", currentStorageMessages);
    store.commit("setChatWebSocket", false);
    setInterval(getUnreceivedMessage, store.state.chatWebSocket.refreshTime);
  }
}

export function updateMessages(store, chatMessages) {
  const updateMessage = organizeMessages(
    store.state.chat.content,
    chatMessages
  );
  saveMessages(updateMessage);
  store.commit("setChat", updateMessage);
}

export function updateMessageUnreceivedCount(store, unreceivedCount) {
  store.commit("setChatUnreceivedCount", unreceivedCount);
}
