import { Matches } from "./MatchesDB";
import { Goal, INCIDENTS, PlayerSeasonStats } from "./misc";

// Function to get player statistics by first name and last name
export const getPlayerStats = (label: string): PlayerSeasonStats => {
    // Initialize player statistics to zero
    let playerStats: PlayerSeasonStats = { goals: 0, assists: 0 };

    // Loop through the matches
    for (const match of Matches) {
        // Loop through team1 and team2 players
        for (const team of match.teams) {
            for (const player of team.players) {
                // Check if the player's name matches
                if (player.nickName === label) {
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

// Function to get player statistics by first name and last name
export const getPlayerStatsMiniMatches = (label: string): PlayerSeasonStats => {
    // Initialize player statistics to zero
    let playerStats: PlayerSeasonStats = { goals: 0, assists: 0 };

    // Loop through the matches
    for (const match of Matches) {
        // Check if miniMatches are defined
        if (match.miniMatches) {
            // Loop through the mini-games in the match
            for (const miniGame of match.miniMatches) {
                // Loop through the incidents in the mini-game
                for (const incident of miniGame.incidents) {
                    // Check if the incident is a goal
                    if (incident.type === INCIDENTS.GOAL) {
                        const goal = incident as Goal;

                        // Check if the player is the scorer or assister in the goal
                        if (goal.Scorer.nickName === label) {
                            // Increment goals for the player
                            playerStats.goals++;
                        }
                        if (goal.Assist?.nickName === label) {
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