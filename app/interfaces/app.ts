// You can include shared interfaces/types in a separate file
// and then use them in any component by importing them. For
// example, to import the interface below do:
//
// import { Message } from 'path/to/interfaces';

export interface DispatchStore<T> {
  payload?: Record<string, any>,
  type: T
}

export interface SocialLink {
  name: string,
  uniconIcon: string,
  url: string
}

export interface Project {
  imageURL: string,
  name: string,
  description: string,
  projectPath: string,
  development: boolean,
  isExternalLink: boolean,
}

export interface Message {
  date: string | Date,
  author: string,
  isSender: boolean,
  isInfo: boolean,
  isReceiver: boolean,
  message: string,
  attachment?: Attachment
}

export interface Attachment {
  fileName: string
}