import React from 'react'
import classNames from 'classnames'
import { useAuth } from '../hooks'
import { useNavigate, useParams } from 'react-router-dom'
import { useQuery } from 'react-query'
import Alert from 'react-bootstrap/Alert';
import ListGroup from 'react-bootstrap/ListGroup';
import Card from 'react-bootstrap/Card';




function ScoreBoard() {
    const { isAuth, isCoach, authUser } = useAuth()
    {!isAuth && navigate("/login")}
    const navigate = useNavigate()
    const { leagueId } = useParams()
    const { data, isFetching, isFetched } = useQuery("league/scoreboard/"+leagueId)
    const league = data
    console.log(league)

    return (
        <div className="home-page">
            <Alert variant="primary">
                <h1>{league?.name}</h1>
            </Alert>
            <div>
                {league?.rounds?.map(round => (
                    <div>
                    <Card>
                    <h3>Round {round.stage}</h3>
                        <ListGroup>
                                {round?.games?.map((game, i) => (
                                    <ListGroup.Item key={i}>
                                        <span className={game?.teams[0].result === "Won" && "won-team"}>{game?.teams[0].team_name}  {game?.teams[0].score}</span> - 
                                        <span className={game?.teams[1].result === "Won" && "won-team"}>{game?.teams[1].team_name}  {game?.teams[1].score}</span>
                                    </ListGroup.Item>
                                ))}
                        </ListGroup>
                    </Card>
                    <br/>
                    </div>
                ))}
            </div>
            
        </div>
    )
}

export default ScoreBoard