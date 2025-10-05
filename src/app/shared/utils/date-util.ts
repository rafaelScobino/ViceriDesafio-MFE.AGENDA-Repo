export class DateUtils {

  static formatDate(date: Date, locale: string = "pt-BR"): string {
    return date.toLocaleDateString(locale);
  }

  static formatTime(date: Date, locale: string = "pt-BR"): string {
    return date.toLocaleTimeString(locale);
  }

  static getWeekDay(date: Date, locale: string = "pt-BR"): string {
    return date.toLocaleDateString(locale, { weekday: "long" });
  }

  static isValidDate(date: any): boolean {
    return date instanceof Date && !isNaN(date.getTime());
  }

static getWeekNumber(date:Date){
 const dia = date.getDate();
    const primeiroDia = new Date(date.getFullYear(), date.getMonth(),1).getDay();
    return Math.ceil((dia + primeiroDia) / 7);
}

}
