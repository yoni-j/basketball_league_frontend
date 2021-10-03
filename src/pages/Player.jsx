import React from 'react'
import classNames from 'classnames'
import { useParams, useNavigate } from 'react-router-dom'
import { useQuery } from 'react-query'
import { useAuth } from '../hooks'


function Player() {
  const { isAuth, isCoach, authUser } = useAuth()
  {!isAuth && navigate("/login")}
  const navigate = useNavigate()
  const { playerId } = useParams()
  const { data, isFetching, isFetched } = useQuery("teams/players/"+playerId)
  const player = data
 

  return (
    <div className="home-page">
        <h1>{player?.name}</h1>
        <h3>Height: {player?.height}</h3>
        <h3>Played games: {player?.played_games}</h3>
        <h3>Average Score: {player?.avg_score}</h3>
    </div>
  )
}

export default Player