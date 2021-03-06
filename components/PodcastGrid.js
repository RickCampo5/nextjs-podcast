import Link from 'next/link'

export default class PodcastGrid extends React.Component {
  render() {
    const { channels } = this.props
    
    return (
      <div className="channels" >
        { 
          channels.map(channel => (
            <Link href={`/podcast/${channel.id}`} prefetch>
              <a className="channel">
                <img src={channel.urls.image} alt="" />
                <h2>{ channel.title }</h2>
              </a>
            </Link>
          )) 
        }
        <style jsx>{`
          .channels {
            display: grid;
            grid-gap: 30px;
            padding: 20px;
            grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
          }
          .channel {
            display: block;
            border-radius: 3px;
            box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.15);
            margin-bottom: 0.5;
          }
          .channel img {
            width: 100%;
          }
          h2 {
            padding: 5px;
            font-size: 0.9em;
            font-weight: 600;
            margin: 0;
            text-align: center;
          }
        `}</style>
      </div>
    )
  }
}