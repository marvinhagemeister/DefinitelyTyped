// Type definitions for emailjs v1.0.8
// Project: https://github.com/eleith/emailjs
// Definitions by: Marvin Hagemeister <https://github.com/marvinhagemeister/>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare module "emailjs" {
  export interface TLSOptions {
    ciphers: string;
  }

  export interface SSLOptions {
    key: string;
    ca: string;
    cert: string;
  }

  export interface ServerOptions {
    user: string;
    password: string;
    host: string;
    /** Standard port will be used if `null` */
    port?: number | null;
    ssl?: boolean | SSLOptions;
    /** If true, starttls will be used */
    tls?: boolean | TLSOptions;
    /** Max number of ms to wait for smtp response */
    timeout?: number;
  }

  export interface Message {
    text: string;
    from: string;
    to: string;
    cc?: string;
    bcc?: string;
    subject: string;
    attachment?: Attachment | Attachment[];
  }

  export interface Attachment {
    data?: string;
    path?: string;
    stream?: any;
    /** MIME type */
    type?: string;
    name?: string;
    method?: any;
    inline?: boolean;
    encoded?: boolean;
    headers?: Record<string, string>;
    alternative?: boolean;
    related?: any;
  }

  class Client {
    send(msg: Message, callback: (err: Error, msg: Email) => void): void;
  }

  interface ServerExport {
    connect(server: ServerOptions): Client,
    Client: Client;
  }

  export const server: ServerExport;

  export interface Email {
    /** Files attached to the email */
    attachments: Attachment[];
    alternative: any;
    /** Email meta data like sender, receiver, etc */
    header: {
      "message-id": string;
      date: string;
      subject: string;
      to: string;
      from: string;
    };
    /** Character encoding */
    content: string;
    /** Email body, meaning the actual message */
    text: string;
  }

  export class SMTP {
    debug(level: string): void;
    state(): any;
    authorized(): any;
    connect(cb: Function, port?: number, host?: string, options?: ServerOptions): void;
    send(str: string, callback: Function): void;
  }
}
