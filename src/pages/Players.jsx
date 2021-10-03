import React from 'react'
import classNames from 'classnames'
import { useAuth } from '../hooks'
import { useNavigate, Link } from 'react-router-dom'
import { useQuery } from 'react-query'
import ListGroup from 'react-bootstrap/ListGroup';



function Players() {
  const { isAuth, isCoach, authUser } = useAuth()
  const navigate = useNavigate()
  const { data, isFetching, isFetched } = useQuery("teams/players")
  
  const players = data
  {!isAuth && navigate("/login")}

  return (
    <div className="home-page">
        
        <h3>{players && players[0].team}</h3>
        <ListGroup>
            {
                data?.map((player) => (
                    
                    <ListGroup.Item><Link to={`/player/${player.pk}`}>{player.user}</Link></ListGroup.Item>
                ))
            }
        </ListGroup>
    </div>
  )
}

export default Players