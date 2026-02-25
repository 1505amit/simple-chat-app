import { SubscribeMessage, WebSocketGateway, WebSocketServer } from '@nestjs/websockets';
import { Server } from 'socket.io';

@WebSocketGateway({cors: true})
export class ChatGateway {
  @WebSocketServer()
  server: Server;

  private messages: string[] = [];
  
  @SubscribeMessage('sendMessage')
  handleMessage(client: any, payload: any): string {
    this.messages.push(payload.message);
    this.server.emit('message', payload);
    return 'Message sent!';
  }

  @SubscribeMessage('getMessages')
  handleGetMessages(client: any): string[] {
    return this.messages;
  }
}
