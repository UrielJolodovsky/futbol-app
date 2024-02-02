import { Match, Player } from "./types"

const api = {
    match: {
        list: async(): Promise<Match[]> => {
            return fetch('https://docs.google.com/spreadsheets/d/e/2PACX-1vRu73N-I1vhs4pp8h4P0quI86XE6a595JhYuSOfCSoWnBYdjRt0v740yY97FPP18GIWtJimpcytho_r/pub?output=tsv', {next: {revalidate:0}})
            .then(response => response.text())
            .then(text => {
                return text.split('\n').slice(1).map(line => {
                    const [date, team1, team2, score1, score2] = line.split('\t')
                    return {
                        date,
                        team1,
                        team2,
                        score1: parseInt(score1),
                        score2: parseInt(score2)
                    }
                })
            })
        },
    },
    player: {
        list: async(): Promise<Player[]> => {
            const matches = await api.match.list()
            const players = new Map<string, Player>()

            for (const {date, team1, team2, score1, score2} of matches) {
                    const players1 = team1.split(',')
                    const players2 = team2.split(',')

                    for (let name of players1) {
                        name = name.trim()

                        const player = players.get(name) || { name, matches: 0, score: 0 }
                        player.matches++
                        player.score += score1 - score2
                        players.set(name, player)
                    }
                    for (let name of players2) {
                        name = name.trim()

                        const player = players.get(name) || { name, matches: 0, score: 0 }
                        player.matches++
                        player.score += score2 - score1
                        players.set(name, player)
                    }
                }
                return Array.from(players.values()).sort((a, b) => b.score - a.score)
            },
        },
    }


export default api