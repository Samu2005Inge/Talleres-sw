var Serie = /** @class */ (function () {
    function Serie(id, name, channel, seasons, description, url, img) {
        this.name = name;
        this.seasons = seasons;
        this.channel = channel;
        this.id = id;
        this.description = description;
        this.url = url;
        this.img = img;
    }
    return Serie;
}());
export { Serie };
