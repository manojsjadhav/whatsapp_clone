import axios from "axios";

// const URL = "http://localhost:5555";
const URL = " https://whatsapp-clone-bymanoj.herokuapp.com";

export const addUser = async (data) => {
  try {
    return await axios.post(`${URL}/add`, data);
    // console.log("adduser data", data);
  } catch (err) {
    console.log("Error while calling adduser api :", err);
  }
};

export const getUsers = async () => {
  try {
    const response = await axios.get(`${URL}/users`);
    console.log(response.data);
    return response.data;
  } catch (err) {
    console.log("Error while calling getusers api :", err);
  }
};

export const setConversation = async (data) => {
  try {
    return await axios.post(`${URL}/conversation/add`, data);
  } catch (err) {
    console.log("Error while calling adduser conversationapi :", err);
  }
};

export const getConversation = async (data) => {
  try {
    const response = await axios.post(`${URL}/convesation/get`, data);
    // console.log(response.data);
    return response.data;
  } catch (err) {
    console.log("Error while calling getconversation api :", err);
  }
};

export const newMessages = async (data) => {
  try {
    await axios.post(`${URL}/massege/add`, data);
  } catch (err) {
    console.log("Error while calling newMasseges api :", err);
  }
};

export const getMessage = async (id) => {
  try {
    return await axios.get(`${URL}/massege/get/${id}`);
  } catch (err) {
    console.log("Error while calling newMasseges api :", err);
  }
};
