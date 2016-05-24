"use strict";
import Server from 'socket.io';

export const PORT = 8090;
export function startServer(store) {

  const io = new Server().attach(PORT);
  store.subscribe(
    () => io.emit('state', store.getState().toJS())
  );

  io.on('connection', (socket) => {
    socket.emit('state', store.getState().toJS());
    socket.on('action', store.dispatch.bind(store));
  });
}
