export class Serie {
    id: number;
    name: string;
    seasons: number;
    channel: string;
    description: string;
    url: string;
    img: string;
  
    constructor(id: number, name: string, channel: string, seasons: number, description: string, url: string, img: string) {
      this.name = name;
      this.seasons = seasons;
      this.channel = channel;
      this.id = id;
      this.description = description;
      this.url = url;
      this.img = img;
    }
  }