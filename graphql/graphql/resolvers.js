class Greetings {
    constructor(polite, friendly) {
        this.polite = polite
        this.friendly = friendly
    }
}

export const resolvers = {
    greetings() {
        return new Greetings("Hello, sir", "Hey, bud")
    },
}
