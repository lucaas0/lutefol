import { Matches } from "./MatchesDB";
import { Goal, INCIDENTS, PlayerSeasonStats } from "./misc";

// Function to get player statistics by first name and last name
export const getPlayerStats = (label: string): PlayerSeasonStats => {
    // Initialize player statistics to zero
    let playerStats: PlayerSeasonStats = { goals: 0, assists: 0 };

    // Loop through the matches
    for (const match of Matches) {
        // Loop through team1 and team2 players
        for (const team of [match.team1, match.team2]) {
            for (const player of team.players) {
                // Check if the player's name matches
                if (player.label === label) {
                    // Loop through the goals in the match
                    for (const goal of match.incidents.filter((incident) => incident.type === INCIDENTS.GOAL) as Goal[]) {
                        // Check if the player is the scorer or assister in the goal
                        if (goal.Scorer === player) {
                            // Increment goals for the player
                            playerStats.goals++;
                        }
                        if (goal.Assist === player) {
                            // Increment assists for the player
                            playerStats.assists++;
                        }
                    }
                }
            }
        }
    }

    // Return the statistics for the player
    return playerStats;
};