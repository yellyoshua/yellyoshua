const isDev = (process.env.NODE_ENV || "").toLowerCase().includes("development")

class LoggerPrinter {
  private onlyInDev: boolean = true;
  private callbackExecInDev(executeConsoleLog: () => void) {
    if (!isDev && this.onlyInDev) {
      return null
    } else {
      return executeConsoleLog()
    }
  }

  constructor(onlyInDev: boolean) {
    this.onlyInDev = onlyInDev
  }

  info(...message: any[]) {
    this.callbackExecInDev(() => console.log(message))
  }

  warn(...message: any[]) {
    this.callbackExecInDev(() => console.warn(message))
    console.warn(message)
  }

  error(...message: any[]) {
    this.callbackExecInDev(() => console.error(message))
  }
}

export class Logger {
  constructor() { }

  get inDev() {
    return new LoggerPrinter(true)
  }

  get production() {
    return new LoggerPrinter(false)
  }
}