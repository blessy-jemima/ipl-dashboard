import Loader from 'react-loader-spinner'
import {Component} from 'react'
import LatestMatch from '../LatestMatch'
import MatchCard from '../MatchCard'
import './index.css'

class TeamMatches extends Component {
  state = {
    isLoading: true,
    recentMatchList: [],
    latestMatchList: {},
    bannerList: {},
  }

  componentDidMount() {
    this.getMatchDetails()
  }

  getMatchDetails = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params

    const response = await fetch(`https://apis.ccbp.in/ipl/${id}`)
    const data = await response.json()

    const bannerListDetails = {
      bannerImg: data.team_banner_url,
      bannerName: id,
    }

    const latestMatch = {
      umpires: data.latest_match_details.umpires,
      result: data.latest_match_details.result,
      manOfTheMatch: data.latest_match_details.man_of_the_match,
      id: data.latest_match_details.id,
      date: data.latest_match_details.date,
      venue: data.latest_match_details.venue,
      competingTeam: data.latest_match_details.competing_team,
      competingTeamLogo: data.latest_match_details.competing_team_logo,
      firstInnings: data.latest_match_details.first_innings,
      secondInnings: data.latest_match_details.second_innings,
      matchStatus: data.latest_match_details.match_status,
    }

    const recentMatches = data.recent_matches.map(each => ({
      umpires: each.umpires,
      result: each.result,
      manOfTheMatch: each.man_of_the_match,
      id: each.id,
      date: each.date,
      venue: each.venue,
      competingTeam: each.competing_team,
      competingTeamLogo: each.competing_team_logo,
      firstInnings: each.first_innings,
      secondInnings: each.second_innings,
      matchStatus: each.match_status,
    }))

    this.setState({
      isLoading: false,
      recentMatchList: recentMatches,
      latestMatchList: latestMatch,
      bannerList: bannerListDetails,
    })
  }

  render() {
    const {isLoading, recentMatchList, bannerList, latestMatchList} = this.state

    return (
      <div>
        {isLoading ? (
          <div className="spinner" data-testid="loader">
            <Loader type="Oval" color="#ffffff" height={50} width={50} />
          </div>
        ) : (
          <div className={`bg-container ${bannerList.id}`}>
            <img
              src={bannerList.bannerImg}
              alt="team banner"
              className="banner"
            />
            <p className="latest-heading">Latest Match</p>
            <LatestMatch
              key={latestMatchList.id}
              latestMatchDetails={latestMatchList}
            />
            <ul className="match-list-container">
              {recentMatchList.map(each => (
                <MatchCard key={each.id} recentMatchDetails={each} />
              ))}
            </ul>
          </div>
        )}
      </div>
    )
  }
}

export default TeamMatches
