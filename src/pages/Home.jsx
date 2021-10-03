import React from 'react'
import classNames from 'classnames'
import { useNavigate, NavLink, Link  } from 'react-router-dom'
import { useAuth } from '../hooks'
import { useQuery } from 'react-query'
import Button from 'react-bootstrap/Button';



function Home() {
  const { isAuth, isCoach } = useAuth()
  const navigate = useNavigate()
  {!isAuth && navigate("/login")}
  const { data } = useQuery("league/leagues_list")
  const leagues = data
  
  return (
    
    <div className="home-page">
        {isCoach &&
            <div>
                <Link to="/players">
                <Button variant="success">
                    My Team Players
                </Button>
                </Link>
                <br/><br/>
            </div>
        }
        <div>
            <h2>Score Boards</h2>
            {
                leagues?.map((league) => (
                    <Link to={`/scoreboard/${league.pk}`}><Button variant="success">{league.name}</Button></Link>
                ))
            }

        </div>
    </div>
  )
}

export default Home