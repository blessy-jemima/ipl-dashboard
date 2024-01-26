import {Link} from 'react-router-dom'
import Loader from 'react-loader-spinner'
import {Component} from 'react'
import TeamCard from '../TeamCard'
import './index.css'

class Home extends Component {
  state = {isLoading: true, teamList: []}

  componentDidMount() {
    this.getTeamList()
  }

  getTeamList = async () => {
    const response = await fetch('https://apis.ccbp.in/ipl')
    const data = await response.json()
    const formattedData = data.teams.map(each => ({
      name: each.name,
      id: each.id,
      teamImageUrl: each.team_image_url,
    }))

    this.setState({isLoading: false, teamList: formattedData})
  }

  render() {
    const {isLoading, teamList} = this.state
    return (
      <div>
        {isLoading ? (
          <div className="spinner" data-testid="loader">
            <Loader type="Oval" color="#ffffff" height={50} width={50} />
          </div>
        ) : (
          <Link to="/" className="link">
            <div className="background-image">
              <div className="home-header">
                <img
                  src="https://assets.ccbp.in/frontend/react-js/ipl-logo-img.png"
                  alt="ipl logo"
                  className="logo"
                />
                <h1 className="home-heading">IPL Dashboard</h1>
              </div>
              <div>
                <ul className="team-list-container">
                  {teamList.map(each => (
                    <TeamCard key={each.id} teamDetails={each} />
                  ))}
                </ul>
              </div>
            </div>
          </Link>
        )}
      </div>
    )
  }
}

export default Home
