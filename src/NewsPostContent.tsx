import React from "react"

export const renderContent = (postId: string) => {
    switch (postId) {
        case '1':
            return (
                <React.Fragment>
                    <p>In the world of football, anticipation is soaring as two powerhouse teams prepare to lock horns in an upcoming match that promises
                        to be nothing short of exhilarating.The balance of talent within these teams is truly awe - inspiring,
                        setting the stage for a contest that could go down as one of the most memorable clashes in recent memory.</p>

                    <p> {`Let's`} dissect the statistics that make this matchup so thrilling. On one side, the prolific goal-scorers include Nuno Reis
                        with an impressive 24 goals and 18 assists, João Ferreira boasting 26 goals and 11 assists,
                        and the dynamo Lucas Garcia contributing an astounding 30 goals and 26 assists.The offensive firepower is nothing short of remarkable,
                        with each player capable of turning a mere chance into a game - changing moment.</p>

                    <p> However, the equilibrium extends beyond the attacking front.The midfield maestros, José Pedrosa(20 goals, 15 assists) and André Salvado(18 goals, 10 assists),
                        bring a perfect blend of creativity and goal - scoring ability.Rúben Rodrigues(20 goals, 5 assists) and Diogo Domingues(23 goals, 8 assists)
                        provide additional depth, ensuring a multifaceted threat that keeps opponents on their toes.</p>

                    <p> On the other side, the defensive solidity of Gustavo Carreira, Rodrigo Alves, and Pedro Gonçalves adds an intriguing dimension to the matchup.
                        While Carreira might have 8 goals and 3 assists to his name, Alves and Gonçalves,
                        with 6 goals and 4 assists and 2 goals, respectively, showcase a commitment to both ends of the pitch.
                        Their defensive prowess could be the key to thwarting the relentless attacks of their high - scoring counterparts.</p>

                    <p> The question lingering in the minds of fans is whether the match will be a closely contested affair or a one - sided spectacle.With such a harmonious
                        distribution of talent across both teams, the scale tips neither to one side nor the other.The stage is set for a nail - biting encounter where every goal,
                        every assist, and every defensive maneuver could be the turning point.</p>

                    <p> As fans eagerly count down the days to the kickoff, one thing is certain - this match is poised to deliver a spectacle that transcends the ordinary.Whether
                        {`you're`} a neutral observer or a die - hard fan of one of the competing teams, mark your calendars, buckle up, and get ready for a footballing
                        extravaganza that promises to keep you on the edge of your seat until the final whistle blows.</p>
                </React.Fragment>
            );
        case '2':
            return (
                <React.Fragment>
                    <p>In a heartbreaking turn of events, Piratas FC faces a significant setback as their star player, Nuno Reis, succumbs to an injury during the recent thrilling match.
                        The news has cast a somber shadow over the spirits of Piratas FC fans who have witnessed Nuno {`Reis's`} stellar performance on the field until the unfortunate incident.</p>

                    <p>Nuno Reis, known for his incredible goal-scoring prowess and brilliant assists, had been a driving force for Piratas FC throughout the match. With 29 goals and 23 assists
                        to his name, he played a pivotal role in shaping the {`team's`} offensive strategy and contributing to their success. 
                        His absence from the remaining moments of the match and potentially upcoming fixtures is undoubtedly a blow to Piratas {`FC's`} aspirations.</p>

                    <p>The incident leading to Nuno {`Reis's`} injury came after a valiant effort on the field, making it all the more disheartening for the Piratas FC faithful. </p>

                    <p>As Piratas FC rallies to cope with the loss of their star player, the entire football community sends heartfelt wishes for Nuno {`Reis's`} swift and complete recovery. 
                    His absence will be felt not only in terms of statistical contributions but also in the spirit and morale he brought to the team.</p>
                </React.Fragment>
            )
        default:
            return (
                <React.Fragment>

                </React.Fragment>
            )
    }
}