import React, { useEffect, useState, useRef } from 'react';
import * as signalR from '@microsoft/signalr';
import { Box, ListItem, UnorderedList, useToast } from '@chakra-ui/react';
import { useDispatch } from 'react-redux';
import { setMessage,addMessage } from '../../stores/reducers/MessageReducer';

function RealTime() {
  const [connection, setConnection] = useState(null);
  const [messages, setMessages] = useState([]);
  const toast = useToast();
  const dispatch = useDispatch();

  useEffect(() => {
    const newConnection = new signalR.HubConnectionBuilder()
      .withUrl("https://localhost:7149/myhub")
      .build();

    setConnection(newConnection);

    return () => {
      if (newConnection) {
        newConnection.stop();
      }
    }
  }, []);

  useEffect(() => {
    if (connection) {
      connection.start().then(() => {
        connection.on("ReceiveMessage", (message, sender, dateTime) => {
          setMessages(prevMessages => [...prevMessages, sender + "  " + message + " vào lúc " + dateTime + " !!"]);
          dispatch(addMessage(sender + " " + message + " vào lúc " + dateTime + " !!"));
          toast({
            position: "top-right",
            title: `Thông báo`,
            description: `${sender} ${message} vào lúc ${dateTime}`,
            status: 'info',
            isClosable: true,
          });
        });
      });
    }
  }, [connection, toast]);

  // return (
  //   <div>
  //     <ul>
  //       {messages.map((message, index) => (
  //         <li key={index}>{message}</li>
  //       ))}
  //     </ul>
  //   </div>
  // );
}

export default RealTime;