import './index.css'

const LatestMatch = props => {
  const {latestMatchDetails} = props
  const {
    umpires,
    result,
    manOfTheMatch,
    date,
    venue,
    competingTeam,
    competingTeamLogo,
    firstInnings,
    secondInnings,
  } = latestMatchDetails

  return (
    <div className="latest-match">
      <div className="match-details">
        <h1 className="match-heading">{competingTeam}</h1>
        <p className="match-para">{date}</p>
        <p className="match-para">{venue}</p>
        <p className="match-para">{result}</p>
      </div>
      <img
        src={competingTeamLogo}
        alt={`${competingTeam}`}
        className="match-logo"
      />
      <div className="innings-container">
        <p className="match-para-right">First Innings</p>
        <p className="match-para-right">{firstInnings}</p>
        <p className="match-para-right">Second Innings</p>
        <p className="match-para-right">{secondInnings}</p>
        <p className="match-para-right">Man Of The Match</p>
        <p className="match-para-right">{manOfTheMatch}</p>
        <p className="match-para-right">Umpires</p>
        <p className="match-para-right">{umpires}</p>
      </div>
    </div>
  )
}

export default LatestMatch
