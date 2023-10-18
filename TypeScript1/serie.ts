
export class Serie {
    id: number;
    name: string;
    seasons: number;
    channel: string;
  
    constructor(id: number, name: string, channel: string, seasons: number) {
      this.name = name;
      this.seasons = seasons;
      this.channel = channel;
      this.id = id;
    }
  }