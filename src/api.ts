import { Match } from "./types"

const api = {
    match: {
        list: async(): Promise<Match[]> => {
            return fetch('https://docs.google.com/spreadsheets/d/e/2PACX-1vRu73N-I1vhs4pp8h4P0quI86XE6a595JhYuSOfCSoWnBYdjRt0v740yY97FPP18GIWtJimpcytho_r/pub?output=tsv')
            .then(response => response.text())
            .then(data => {
                return data.split('\n').slice(1).map(line => {
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
}

export default api