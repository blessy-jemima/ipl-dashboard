import {Link} from 'react-router-dom'
import './index.css'

const TeamCard = props => {
  const {teamDetails} = props
  const {id, name, teamImageUrl} = teamDetails

  return (
    <li className="team-card-container">
      <Link to={`/team-matches/${id}`} className="link">
        <div className="row-container">
          <img src={teamImageUrl} alt={`${name}`} className="team-img" />
          <p className="team-name">{name}</p>
        </div>
      </Link>
    </li>
  )
}

export default TeamCard
