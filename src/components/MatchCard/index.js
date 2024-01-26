import './index.css'

const MatchCard = props => {
  const {recentMatchDetails} = props
  const {
    competingTeamLogo,
    competingTeam,
    result,
    matchStatus,
  } = recentMatchDetails

  const getTextColor = () => {
    let textColor
    if (matchStatus === 'Win') {
      textColor = 'green'
    } else {
      textColor = 'red'
    }
  }

  return (
    <div className="recent-container">
      <img
        src={competingTeamLogo}
        alt={`${competingTeam}`}
        className="recent-logo"
      />
      <h1 className="competing-team">{competingTeam}</h1>
      <p className="result">{result}</p>
      <p className="text-style" style={`color:${getTextColor()}`}>
        {matchStatus}
      </p>
    </div>
  )
}

export default MatchCard
